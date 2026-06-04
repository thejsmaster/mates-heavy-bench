import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const ROOT = path.resolve(import.meta.dirname ?? path.dirname(fileURLToPath(import.meta.url)), "..");

const PAGE_NAMES = [
  "AnalyticsDashboard","UserManagement","ProductCatalog","OrderTracking",
  "InventoryOverview","CustomerInsights","SalesReport","MarketingCampaign",
  "SupportTickets","TeamDirectory","RevenueAnalysis","ContentManagement",
  "SubscriptionPlans","FeedbackSurvey","PerformanceMetrics","SystemHealth",
  "AuditLogViewer","RolePermissions","NotificationCenter","WorkflowBuilder",
  "ApiDocumentation","FeatureFlags","ABTestResults","DataExport",
  "ComplianceReport","RiskAssessment","BudgetPlanning","ExpenseTracker",
  "InvoiceManager","PayrollSummary","EmployeeOnboarding","TrainingModules",
  "AssetManagement","VendorPortal","ContractLibrary","ProcurementOrder",
  "ShippingDashboard","WarehouseMap","QualityControl","ReturnManagement",
  "SocialMediaAnalytics","EmailCampaigns","SeoRankings","AdPerformance",
  "LeadGeneration","PipelineForecast","DealTracker","CommissionReport",
  "CustomerSegments","ChurnAnalysis","ProductRoadmap","SprintPlanner",
  "BugTracker","ReleaseNotes","CodeReviewQueue","DeploymentHistory",
  "ServerMonitoring","DatabaseAdmin","BackupRestore","SecurityAlerts",
  "LoadTestResults","CacheAnalytics","SearchQueries","UserSessions",
  "PageViewsHeatmap","ConversionFunnel","TrafficSources","GeoTargeting",
  "DeviceBreakdown","BrowserStats","OsAnalytics","LanguageDistribution",
  "TimeOnSite","BounceRateAnalysis","RetentionCohorts","LifetimeValue",
  "ReferralProgram","AffiliateNetwork","PartnerPortal","ResellerDashboard",
  "StoreLocator","BranchPerformance","RegionalSales","QuarterlyForecast",
  "YearEndReview","GoalTracking","KpiDashboard","ExecutiveSummary",
  "BoardReport","InvestorUpdate","StakeholderMap","ResourceAllocation",
  "TimesheetApproval","LeaveManagement","ShiftScheduler","OvertimeReport",
  "HirePipeline","PerformanceReview","SkillMatrix","SuccessionPlanning",
  "OrgChartViewer","PolicyLibrary","IncidentReport","DisasterRecovery",
  "BusinessContinuity","VendorScorecard","ContractRenewals",
];

const CUSTOM = [
  {id:"DataSummaryCard",api:"getDataSummary",file:"data-summary",label:"Data Summary"},
  {id:"UserProfileBlock",api:"getUserProfile",file:"user-profile",label:"User Profile"},
  {id:"ProductInfoPanel",api:"getProductInfo",file:"product-info",label:"Product Info"},
  {id:"ActivityTimeline",api:"getActivity",file:"activity",label:"Activity"},
  {id:"MetricsWidget",api:"getMetrics",file:"metrics",label:"Metrics"},
  {id:"StatusOverview",api:"getStatus",file:"status",label:"Status"},
  {id:"DataTableSection",api:"getDataTable",file:"data-table",label:"Data Table"},
  {id:"DetailViewPanel",api:"getDetail",file:"detail",label:"Detail View"},
  {id:"NotificationCenter",api:"getNotifications",file:"notifications",label:"Notifications"},
  {id:"AnalyticsChart",api:"getAnalytics",file:"analytics",label:"Analytics Chart"},
];

const UI = [
  {id:"UIButton",me:"Button",label:"Action Button"},
  {id:"UITextBlock",me:"Text",label:"Text Block"},
  {id:"UICard",me:"Card",label:"Info Card"},
  {id:"UIBadge",me:"Badge",label:"Status Badge"},
  {id:"UIChip",me:"Chip",label:"Filter Chip"},
  {id:"UISpinner",me:"Spinner",label:"Loading Spinner"},
  {id:"UISwitch",me:"Switch",label:"Toggle Switch"},
  {id:"UIProgress",me:"LinearProgress",label:"Progress Bar"},
  {id:"UISkeleton",me:"Skeleton",label:"Skeleton Loader"},
  {id:"UIIcon",me:"Icon",label:"Icon Display"},
];

function w(p:string,c:string) { const f=path.join(ROOT,p); fs.mkdirSync(path.dirname(f),{recursive:true}); fs.writeFileSync(f,c,"utf-8"); }
function hc(i:number) { const h=[200,340,160,280,30,80,0,120,60,300]; return `hsl(${h[i%10]+(i*7)%30},65%,${45+(i%5)*4}%)`; }
function pid(i:number) { return `page-${String(i+1).padStart(3,"0")}`; }
function lb(s:string) { return s.replace(/([a-z])([A-Z])/g,"$1 $2"); }

function configs() {
  w("package.json",JSON.stringify({name:"mates-heavy-bench",version:"1.0.0",type:"module",private:true,
    scripts:{dev:"mates-fullstack dev",build:"mates-fullstack build",start:"mates-fullstack start",generate:"npx tsx scripts/generate.ts"},
    dependencies:{mates:"0.4.0-beta.1","mates-fullstack":"^1.0.0-beta.14","mates-ui":"*"},
    devDependencies:{"@types/node":"^20.0.0",tsx:"^4.0.0",typescript:"^5.3.2"}},null,2)+"\n");
  w("tsconfig.json",JSON.stringify({compilerOptions:{target:"ES2022",module:"ESNext",moduleResolution:"bundler",strict:true,esModuleInterop:true,skipLibCheck:true,outDir:"dist"},include:["client/**/*.ts","server/**/*.ts"]},null,2)+"\n");
  w("mates.config.ts","export default {};\n");
  w(".gitignore","node_modules/\ndist/\n.mates-dev/\n");
}

function cssFiles() {
  w("client/styles/layout.css",`.page-container{display:grid;grid-template-columns:1fr 1fr;gap:1.5rem;padding:2rem;max-width:1400px;margin:0 auto}.page-header{grid-column:1/-1;margin-bottom:0.5rem}.page-header h1{font-size:1.75rem;font-weight:700;margin:0 0 0.25rem;}.page-header p{color:#666;margin:0;font-size:0.95rem}.component-column{display:flex;flex-direction:column;gap:1rem}.component-row{display:flex;gap:0.75rem;flex-wrap:wrap;align-items:center}.component-full{grid-column:1/-1}@media(max-width:768px){.page-container{grid-template-columns:1fr;padding:1rem}}\n`);
  w("client/styles/theme.css",`:root{--font-sans:system-ui,-apple-system,sans-serif;--radius-md:8px;--shadow-card:0 1px 3px rgba(0,0,0,0.08)}body{font-family:var(--font-sans);margin:0;background:#f8f9fa;color:#1a1a2e}\n`);
  w("client/styles/components.css",`.api-card{background:white;border-radius:var(--radius-md);box-shadow:var(--shadow-card);padding:1.25rem}.api-card h3{margin:0 0 0.75rem;font-size:0.85rem;text-transform:uppercase;letter-spacing:0.05em;color:#888;font-weight:600}.api-card .value{font-size:1.5rem;font-weight:700}.api-card .meta{font-size:0.8rem;color:#999;margin-top:0.5rem}\n`);
  w("client/styles/utilities.css",`.flex{display:flex}.flex-wrap{flex-wrap:wrap}.gap-sm{gap:0.5rem}.gap-md{gap:1rem}.items-center{align-items:center}.text-sm{font-size:0.875rem}.font-bold{font-weight:700}\n`);
}

function customComponents() {
  for(const[i,c]of CUSTOM.entries()){
    const col=hc(i);
    w(`client/components/custom/${c.id}.ts`,
`import{html,asyncAction,stylesheet}from"mates";import type{Props}from"mates";import{${c.api}}from"../../../server/api/${c.file}.ts";
const{css:cl,mount}=stylesheet();const s=cl({
root:{background:"white",borderRadius:"8px",padding:"1.25rem",boxShadow:"0 1px 3px rgba(0,0,0,0.08)",borderTop:"3px solid ${col}"},
h3:{margin:"0 0 0.75rem",fontSize:"0.85rem",textTransform:"uppercase",letterSpacing:"0.05em",color:"#888",fontWeight:600},
val:{fontSize:"1.5rem",fontWeight:700,color:"${col}"},
meta:{fontSize:"0.8rem",color:"#999",marginTop:"0.5rem"},
});
export const ${c.id}=(p:Props<{pageId:string}>)=>{mount();const{pageId}=p();const d=asyncAction(()=>${c.api}({pageId}));d();
return()=>html\`<div class="\${s.root}"><h3 class="\${s.h3}">${c.label}</h3><div class="\${s.val}">\${d.data()?.value??"\\u2014"}</div><div class="\${s.meta}">\${d.data()?.meta??""}</div></div>\`;};`);
  }
}

function uiComponents() {
  for(const[i,c]of UI.entries()){
    w(`client/components/ui/${c.id}.ts`,
`import{html,asyncAction,stylesheet}from"mates";import type{Props}from"mates";import{${c.me}}from"mates-ui";import{getUiConfig}from"../../../server/api/ui-config.ts";
const{css:cl,mount}=stylesheet();const s=cl({
wr:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.75rem 1rem",background:"white",borderRadius:"8px",boxShadow:"0 1px 3px rgba(0,0,0,0.08)"},
lb:{fontSize:"0.85rem",color:"#666",fontWeight:500},
st:{fontSize:"0.75rem",color:"#999"},
});
export const ${c.id}=(p:Props<{pageId:string}>)=>{mount();const{pageId}=p();const d=asyncAction(()=>getUiConfig({pageId,comp:${i}}));d();
return()=>html\`<div class="\${s.wr}"><span class="\${s.lb}">${c.label}</span><\${${c.me}}>\${d.data()?.label??"\\u2026"}</\${${c.me}}><span class="\${s.st}">\${d.data()?.status??""}</span></div>\`;};`);
  }
}

function pages() {
  for(let i=0;i<PAGE_NAMES.length;i++){
    const n=PAGE_NAMES[i],id=pid(i),col=hc(i);
    w(`client/pages/${n}.ts`,
`import{html,x}from"mates";import type{Props}from"mates";
import"../styles/layout.css";import"../styles/theme.css";import"../styles/components.css";import"../styles/utilities.css";
${CUSTOM.map(c=>`import{${c.id}}from"../components/custom/${c.id}.ts";`).join("\n")}
${UI.map(c=>`import{${c.id}}from"../components/ui/${c.id}.ts";`).join("\n")}
export const ${n}=(_p:Props<{}>)=>()=>html\`<div class="page-container">
<div class="page-header"><h1 style="color:${col}">${lb(n)}</h1><p>Manage ${lb(n).toLowerCase()}.</p></div>
<div class="component-column">
${CUSTOM.filter((_,j)=>j%2===0).map(c=>`<div class="api-card">\${x(${c.id},{pageId:"${id}"})}</div>`).join("\n")}
${UI.filter((_,j)=>j%2===0).map(c=>`<div class="api-card">\${x(${c.id},{pageId:"${id}"})}</div>`).join("\n")}
</div>
<div class="component-column">
${CUSTOM.filter((_,j)=>j%2===1).map(c=>`<div class="api-card">\${x(${c.id},{pageId:"${id}"})}</div>`).join("\n")}
<div class="component-full"><div class="component-row">
${UI.filter((_,j)=>j%2===1).map(c=>`\${x(${c.id},{pageId:"${id}"})}`).join("\n")}
</div></div></div></div>\`;`);
  }
}

function appFile() {
  const routes=PAGE_NAMES.map((n,i)=>`  {path:"/${pid(i)}",component:()=>import("./pages/${n}.ts")}`).join(",\n");
  w("client/App.ts",
`import{html,Router}from"mates";
export default Router([
${routes}
],()=>html\`<div style="font-family:system-ui,sans-serif;padding:3rem;text-align:center">
<h1>Mates Heavy Benchmark</h1>
<p style="color:#666">100 pages · 20 components each · 4 CSS files each</p>
<nav style="display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center;margin-top:2rem;max-width:800px;margin:2rem auto 0">${
PAGE_NAMES.map((_,i)=>`<a href="/${pid(i)}" style="padding:0.4rem 0.8rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.8rem">${i+1}</a>`).join("")
}</nav></div>\`);`);
  w("client/client.ts",`import{renderX}from"mates";import App from"./App.ts";const root=document.getElementById("app");if(root)renderX(App,root);\n`);
}

function serverFiles() {
  const d:Record<string,[string,string]>={"data-summary":["8,472","+12%"],"user-profile":["User #483","32 acts"],"product-info":["SKU-74291","$249.99"],"activity":["247 events","3h ago"],"metrics":["87.3%","7d trend"],"status":["Online","99.9%"],"data-table":["3,421 rows","12m ago"],"detail":["#48291","High"],"notifications":["18 alerts","3 new"],"analytics":["742.3","+15.2%"]};
  for(const c of CUSTOM){const[v,m]=d[c.file]??["—",""];w(`server/api/${c.file}.ts`,`export async function ${c.api}(p:{pageId:string}){return{value:${JSON.stringify(v)},meta:${JSON.stringify(m)},_page:p.pageId}}`);}
  w("server/api/ui-config.ts",`export async function getUiConfig(p:{pageId:string;comp:number}){return{label:"v2.4",status:"ready",_page:p.pageId,_comp:p.comp}}`);
  w("server/main.ts",`import{onRequest,setServerTimeout}from"mates-fullstack";setServerTimeout(60);onRequest(c=>{c.resHeaders["x-benchmark"]="1"});\n`);
}

function main() {
  console.log("Generating mates-heavy-bench...\n");
  for(const d of["client","server"]){const f=path.join(ROOT,d);if(fs.existsSync(f))fs.rmSync(f,{recursive:true,force:true});}
  for(const f of["package.json","tsconfig.json","mates.config.ts",".gitignore"]){const p=path.join(ROOT,f);if(fs.existsSync(p))fs.rmSync(p);}
  configs();console.log("  [1/6] Configs");
  cssFiles();console.log("  [2/6] 4 CSS files");
  customComponents();console.log(`  [3/6] ${CUSTOM.length} custom components`);
  uiComponents();console.log(`  [4/6] ${UI.length} mates-ui wrappers`);
  pages();console.log(`  [5/6] ${PAGE_NAMES.length} pages`);
  appFile();serverFiles();console.log("  [6/6] App.ts, client.ts, server API");
  let fc=0;function wc(d:string){if(!fs.existsSync(d))return;for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=path.join(d,e.name);if(e.isDirectory()&&e.name!=="node_modules"&&!e.name.startsWith("."))wc(f);else if(e.isFile())fc++;}}
  wc(path.join(ROOT,"client"));wc(path.join(ROOT,"server"));
  for(const f of["package.json","tsconfig.json","mates.config.ts",".gitignore"]){if(fs.existsSync(path.join(ROOT,f)))fc++;}
  console.log(`\n  ${fc} files generated.\n  cd mates-heavy-bench && npm install && npm run build`);
}
main();

// Patch: use const + named export to avoid "export { X as default }" in esbuild output
function patchApp() {
  const pkg = JSON.parse(fs.readFileSync(path.join(ROOT, "package.json"), "utf-8"));
  // App.ts already uses export default Router(...) which creates the as issue
  // Fix: rewrite App.ts to use const + export { ... }
  const routes = PAGE_NAMES.map((n,i) => `  {path:"/${pid(i)}",component:()=>import("./pages/${n}.ts")}`).join(",\n");
  const nav = PAGE_NAMES.map((_,i) => `<a href="/${pid(i)}" style="padding:0.4rem 0.8rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.8rem">${i+1}</a>`).join("");
  // Use "export { App }" — no "as" keyword in export
  w("client/App.ts",
`import{html,Router}from"mates";
const _rt=[${routes}];const _fb=()=>html\`<div style="font-family:system-ui,sans-serif;padding:3rem;text-align:center">
<h1>Mates Heavy Benchmark</h1>
<p style="color:#666">100 pages·20 components·4 CSS files</p>
<nav style="display:flex;flex-wrap:wrap;gap:0.4rem;justify-content:center;margin-top:2rem;max-width:800px;margin:2rem auto 0">${nav}</nav></div>\`;
const App=Router(_rt,_fb);export{App};`);
  // Update client.ts to use named import
  w("client/client.ts",`import{renderX}from"mates";import{App}from"./App.ts";const root=document.getElementById("app");if(root)renderX(App,root);\n`);
  console.log("  [patch] App.ts fixed — no 'as' in export");
}
patchApp();
