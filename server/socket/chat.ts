// WebSocket chat room
const clients = new Map<string, { ws: any; name: string }>();

export async function onConnect(ctx: any) {
  const id = ctx.id;
  const name = `User-${id.slice(0, 4)}`;
  clients.set(id, { ws: ctx.ws, name });

  ctx.emit("welcome", { id, name, users: clients.size });
  ctx.broadcast("system", { text: `${name} joined`, users: clients.size });

  (ctx as any)._clientId = id;
}

// WS RPC: { fnName: "sendMessage", payload: { text: "hello" } }
export async function sendMessage(payload: { text: string }, ctx: any) {
  const id = (ctx as any)._clientId ?? ctx.id;
  const client = clients.get(id);
  if (!client || !payload.text) return;

  ctx.broadcast("message", {
    from: client.name,
    text: payload.text,
    time: new Date().toISOString(),
  });
}

export async function onDisconnect(ctx: any) {
  const id = (ctx as any)._clientId ?? ctx.id;
  const client = clients.get(id);
  if (client) {
    clients.delete(id);
    ctx.broadcast("system", { text: `${client.name} left`, users: clients.size });
  }
}
