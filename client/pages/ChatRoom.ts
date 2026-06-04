import { html, atom, onCleanup, stylesheet } from "mates";
import type { Props } from "mates";

const { css: cl, mount } = stylesheet();
const s = cl({
  wrap: {
    fontFamily: "system-ui, sans-serif",
    maxWidth: "700px",
    margin: "0 auto",
    padding: "1.5rem",
    display: "flex",
    flexDirection: "column",
    height: "100vh",
    boxSizing: "border-box",
    background: "#f8f9fa",
  },
  header: {
    padding: "0.75rem",
    background: "#1a73e8",
    color: "white",
    borderRadius: "8px",
    marginBottom: "1rem",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight: 700,
  },
  status: { fontSize: "0.8rem", opacity: 0.8, marginTop: "0.25rem" },
  msgs: {
    flex: "1",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    padding: "0.5rem",
    background: "white",
    borderRadius: "8px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
    marginBottom: "1rem",
  },
  systemMsg: {
    textAlign: "center",
    padding: "0.25rem",
    fontSize: "0.8rem",
    color: "#888",
    fontStyle: "italic",
  },
  userMsg: { display: "flex", flexDirection: "column" },
  userName: {
    fontSize: "0.75rem",
    color: "#1a73e8",
    fontWeight: 600,
    marginBottom: "0.15rem",
  },
  msgBubble: {
    background: "#e8f0fe",
    padding: "0.5rem 0.75rem",
    borderRadius: "12px",
    maxWidth: "70%",
    alignSelf: "flex-start",
    fontSize: "0.9rem",
    wordBreak: "break-word",
  },
  ownBubble: {
    background: "#1a73e8",
    color: "white",
    alignSelf: "flex-end",
  },
  inputWrap: {
    display: "flex",
    gap: "0.5rem",
  },
  input: {
    flex: "1",
    padding: "0.75rem",
    border: "1px solid #ddd",
    borderRadius: "8px",
    fontSize: "0.9rem",
    outline: "none",
  },
  btn: {
    padding: "0.75rem 1.25rem",
    background: "#1a73e8",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "0.9rem",
  },
});

interface ChatMsg {
  type: string;
  id?: string;
  name?: string;
  from?: string;
  text?: string;
  time?: string;
  users?: number;
}

export const ChatRoom = (_p: Props<{}>) => {
  mount();

  const messages = atom<ChatMsg[]>([{ type: "system", text: "Connecting…" }]);
  const connected = atom(false);
  const userCount = atom(0);
  const myName = atom("");
  const inputVal = atom("");
  let ws: WebSocket | null = null;

  function scrollDown() {
    setTimeout(() => {
      const el = document.querySelector("[data-chat-msgs]");
      if (el) el.scrollTop = el.scrollHeight;
    }, 50);
  }

  const protocol = location.protocol === "https:" ? "wss:" : "ws:";
  const url = `${protocol}//${location.host}/socket/chat`;

  try {
    ws = new WebSocket(url);
    ws.onopen = () => connected.set(true);
    ws.onclose = () => connected.set(false);

    ws.onmessage = (e) => {
      try {
        const raw = JSON.parse(e.data);
        // Server sends { event: "xxx", data: {...} } envelope
        const msg: ChatMsg = { type: raw.event, ...(raw.data || {}) };
        console.log("[chat]", msg.type, msg);
        messages.set((prev) => [...prev, msg]);
        if (msg.type === "welcome") {
          myName.set(msg.name ?? "");
          userCount.set(msg.users ?? 0);
        }
        if (msg.users !== undefined) userCount.set(msg.users);
        scrollDown();
      } catch (err) {
        console.error("parse error", err);
      }
    };
  } catch {}

  onCleanup(() => {
    ws?.close();
    ws = null;
  });

  function sendMsg() {
    const text = inputVal().trim();
    if (!text || !ws || ws.readyState !== WebSocket.OPEN) return;
    // WS RPC envelope format: { fnName, payload }
    ws.send(JSON.stringify({ fnName: "sendMessage", payload: { text } }));
    inputVal.set("");
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") sendMsg();
  }

  return () => html`
    <div class="${s.wrap}">
      <div class="${s.header}">
        Mates Chat Room
        <div class="${s.status}">
          ${connected() ? `Online · ${userCount()} user${userCount() !== 1 ? "s" : ""} · You: ${myName()}` : "Disconnected"}
        </div>
      </div>

      <div class="${s.msgs}" data-chat-msgs>
        ${messages().map(
          (m) => html`<div class="${s.userMsg}">
            ${m.type === "system"
              ? html`<div class="${s.systemMsg}">${m.text}</div>`
              : html`
                  <span class="${s.userName}">${m.from === myName() ? "You" : m.from ?? "?"}</span>
                  <div class="${s.msgBubble} ${m.from === myName() ? s.ownBubble : ""}">${m.text}</div>
                `}
          </div>`,
        )}
      </div>

      <div class="${s.inputWrap}">
        <input
          class="${s.input}"
          type="text"
          placeholder="Type a message…"
          .value=${inputVal()}
          @input=${(e: any) => inputVal.set(e.target.value)}
          @keydown=${onKeyDown}
          ?disabled=${!connected()}
        />
        <button class="${s.btn}" @click=${sendMsg} ?disabled=${!connected()}>
          Send
        </button>
      </div>
    </div>
  `;
};
