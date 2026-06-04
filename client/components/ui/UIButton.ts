import{html,asyncAction,stylesheet}from"mates";import type{Props}from"mates";import{Button}from"mates-ui";import{getUiConfig}from"../../../server/api/ui-config.ts";
const{css:cl,mount}=stylesheet();const s=cl({
wr:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",background:"white",borderRadius:"8px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},
lb:{fontSize:"0.85rem",color:"#666",fontWeight:500},
st:{fontSize:"0.75rem",color:"#999"},
});
export const UIButton=(p:Props<{pageId:string}>)=>{mount();const{pageId}=p();const d=asyncAction(()=>getUiConfig({pageId,comp:0}));d();
return()=>html`<div class="${s.wr}"><span class="${s.lb}">Action Button</span><${Button}>${d.data()?.label??"\u2026"}</${Button}><span class="${s.st}">${d.data()?.status??""}</span></div>`;};