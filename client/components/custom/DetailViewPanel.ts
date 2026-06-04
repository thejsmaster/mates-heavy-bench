import{html,asyncAction,stylesheet}from"mates";import type{Props}from"mates";import{getDetail}from"../../../server/api/detail.ts";
const{css:cl,mount}=stylesheet();const s=cl({
root:{background:"white",borderRadius:"8px",padding:"1.25rem",boxShadow:"0 1px 3px rgba(0,0,0,0.08)",borderTop:"3px solid hsl(139,65%,53%)"},
h3:{margin:"0 0 0.75rem",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"#888",fontWeight:600},
val:{fontSize:"1.5rem",fontWeight:700,color:"hsl(139,65%,53%)"},
meta:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},
});
export const DetailViewPanel=(p:Props<{pageId:string}>)=>{mount();const{pageId}=p();const d=asyncAction(()=>getDetail({pageId}));d();
return()=>html`<div class="${s.root}"><h3 class="${s.h3}">Detail View</h3><div class="${s.val}">${d.data()?.value??"\u2014"}</div><div class="${s.meta}">${d.data()?.meta??""}</div></div>`;};