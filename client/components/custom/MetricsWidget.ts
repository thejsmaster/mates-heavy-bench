import{html,asyncAction,stylesheet}from"mates";import type{Props}from"mates";import{getMetrics}from"../../../server/api/metrics.ts";
const{css:cl,mount}=stylesheet();const s=cl({
root:{background:"white",borderRadius:"8px",padding:"1.25rem",boxShadow:"0 1px 3px rgba(0,0,0,0.08)",borderTop:"3px solid hsl(58,65%,61%)"},
h3:{margin:"0 0 0.75rem",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"#888",fontWeight:600},
val:{fontSize:"1.5rem",fontWeight:700,color:"hsl(58,65%,61%)"},
meta:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},
});
export const MetricsWidget=(p:Props<{pageId:string}>)=>{mount();const{pageId}=p();const d=asyncAction(()=>getMetrics({pageId}));d();
return()=>html`<div class="${s.root}"><h3 class="${s.h3}">Metrics</h3><div class="${s.val}">${d.data()?.value??"\u2014"}</div><div class="${s.meta}">${d.data()?.meta??""}</div></div>`;};