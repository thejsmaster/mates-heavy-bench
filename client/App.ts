import { Router, html, navigateTo } from "mates";

// ── Page name → path mapping (generated) ──────────────────────────────────
const PAGES: Array<{ path: string; name: string; file: string }> = [
  { path: "/page-001", name: "ABTestResults",       file: "ABTestResults.ts" },
  { path: "/page-002", name: "AdPerformance",       file: "AdPerformance.ts" },
  { path: "/page-003", name: "AffiliateNetwork",     file: "AffiliateNetwork.ts" },
  { path: "/page-004", name: "AnalyticsDashboard",   file: "AnalyticsDashboard.ts" },
  { path: "/page-005", name: "ApiDocumentation",     file: "ApiDocumentation.ts" },
  { path: "/page-006", name: "AssetManagement",      file: "AssetManagement.ts" },
  { path: "/page-007", name: "AuditLogViewer",       file: "AuditLogViewer.ts" },
  { path: "/page-008", name: "BackupRestore",        file: "BackupRestore.ts" },
  { path: "/page-009", name: "BoardReport",          file: "BoardReport.ts" },
  { path: "/page-010", name: "BounceRateAnalysis",   file: "BounceRateAnalysis.ts" },
  { path: "/page-011", name: "BranchPerformance",    file: "BranchPerformance.ts" },
  { path: "/page-012", name: "BrowserStats",         file: "BrowserStats.ts" },
  { path: "/page-013", name: "BudgetPlanning",       file: "BudgetPlanning.ts" },
  { path: "/page-014", name: "BugTracker",           file: "BugTracker.ts" },
  { path: "/page-015", name: "BusinessContinuity",   file: "BusinessContinuity.ts" },
  { path: "/page-016", name: "CacheAnalytics",       file: "CacheAnalytics.ts" },
  { path: "/page-017", name: "ChatRoom",             file: "ChatRoom.ts" },
  { path: "/page-018", name: "ChurnAnalysis",        file: "ChurnAnalysis.ts" },
  { path: "/page-019", name: "CodeReviewQueue",      file: "CodeReviewQueue.ts" },
  { path: "/page-020", name: "CommissionReport",     file: "CommissionReport.ts" },
  { path: "/page-021", name: "ComplianceReport",     file: "ComplianceReport.ts" },
  { path: "/page-022", name: "ContentManagement",    file: "ContentManagement.ts" },
  { path: "/page-023", name: "ContractLibrary",      file: "ContractLibrary.ts" },
  { path: "/page-024", name: "ContractRenewals",     file: "ContractRenewals.ts" },
  { path: "/page-025", name: "ConversionFunnel",     file: "ConversionFunnel.ts" },
  { path: "/page-026", name: "CustomerInsights",     file: "CustomerInsights.ts" },
  { path: "/page-027", name: "CustomerSegments",     file: "CustomerSegments.ts" },
  { path: "/page-028", name: "DataExport",           file: "DataExport.ts" },
  { path: "/page-029", name: "DatabaseAdmin",        file: "DatabaseAdmin.ts" },
  { path: "/page-030", name: "DealTracker",          file: "DealTracker.ts" },
  { path: "/page-031", name: "DeploymentHistory",    file: "DeploymentHistory.ts" },
  { path: "/page-032", name: "DeviceBreakdown",      file: "DeviceBreakdown.ts" },
  { path: "/page-033", name: "DisasterRecovery",     file: "DisasterRecovery.ts" },
  { path: "/page-034", name: "EmailCampaigns",       file: "EmailCampaigns.ts" },
  { path: "/page-035", name: "EmployeeOnboarding",   file: "EmployeeOnboarding.ts" },
  { path: "/page-036", name: "ExecutiveSummary",     file: "ExecutiveSummary.ts" },
  { path: "/page-037", name: "ExpenseTracker",       file: "ExpenseTracker.ts" },
  { path: "/page-038", name: "FeatureFlags",         file: "FeatureFlags.ts" },
  { path: "/page-039", name: "FeedbackSurvey",       file: "FeedbackSurvey.ts" },
  { path: "/page-040", name: "GeoTargeting",         file: "GeoTargeting.ts" },
  { path: "/page-041", name: "GoalTracking",         file: "GoalTracking.ts" },
  { path: "/page-042", name: "HirePipeline",         file: "HirePipeline.ts" },
  { path: "/page-043", name: "IncidentReport",       file: "IncidentReport.ts" },
  { path: "/page-044", name: "InventoryOverview",    file: "InventoryOverview.ts" },
  { path: "/page-045", name: "InvestorUpdate",       file: "InvestorUpdate.ts" },
  { path: "/page-046", name: "InvoiceManager",       file: "InvoiceManager.ts" },
  { path: "/page-047", name: "KpiDashboard",         file: "KpiDashboard.ts" },
  { path: "/page-048", name: "LanguageDistribution", file: "LanguageDistribution.ts" },
  { path: "/page-049", name: "LeadGeneration",       file: "LeadGeneration.ts" },
  { path: "/page-050", name: "LeaveManagement",      file: "LeaveManagement.ts" },
  { path: "/page-051", name: "LifetimeValue",        file: "LifetimeValue.ts" },
  { path: "/page-052", name: "LoadTestResults",      file: "LoadTestResults.ts" },
  { path: "/page-053", name: "MarketingCampaign",    file: "MarketingCampaign.ts" },
  { path: "/page-054", name: "NotificationCenter",   file: "NotificationCenter.ts" },
  { path: "/page-055", name: "OrderTracking",        file: "OrderTracking.ts" },
  { path: "/page-056", name: "OrgChartViewer",       file: "OrgChartViewer.ts" },
  { path: "/page-057", name: "OsAnalytics",          file: "OsAnalytics.ts" },
  { path: "/page-058", name: "OvertimeReport",       file: "OvertimeReport.ts" },
  { path: "/page-059", name: "PageViewsHeatmap",     file: "PageViewsHeatmap.ts" },
  { path: "/page-060", name: "PartnerPortal",        file: "PartnerPortal.ts" },
  { path: "/page-061", name: "PayrollSummary",       file: "PayrollSummary.ts" },
  { path: "/page-062", name: "PerformanceMetrics",   file: "PerformanceMetrics.ts" },
  { path: "/page-063", name: "PerformanceReview",    file: "PerformanceReview.ts" },
  { path: "/page-064", name: "PipelineForecast",     file: "PipelineForecast.ts" },
  { path: "/page-065", name: "PolicyLibrary",        file: "PolicyLibrary.ts" },
  { path: "/page-066", name: "ProcurementOrder",     file: "ProcurementOrder.ts" },
  { path: "/page-067", name: "ProductCatalog",       file: "ProductCatalog.ts" },
  { path: "/page-068", name: "ProductRoadmap",       file: "ProductRoadmap.ts" },
  { path: "/page-069", name: "QualityControl",       file: "QualityControl.ts" },
  { path: "/page-070", name: "QuarterlyForecast",    file: "QuarterlyForecast.ts" },
  { path: "/page-071", name: "ReferralProgram",      file: "ReferralProgram.ts" },
  { path: "/page-072", name: "RegionalSales",        file: "RegionalSales.ts" },
  { path: "/page-073", name: "ReleaseNotes",         file: "ReleaseNotes.ts" },
  { path: "/page-074", name: "ResellerDashboard",    file: "ResellerDashboard.ts" },
  { path: "/page-075", name: "ResourceAllocation",   file: "ResourceAllocation.ts" },
  { path: "/page-076", name: "RetentionCohorts",     file: "RetentionCohorts.ts" },
  { path: "/page-077", name: "ReturnManagement",     file: "ReturnManagement.ts" },
  { path: "/page-078", name: "RevenueAnalysis",      file: "RevenueAnalysis.ts" },
  { path: "/page-079", name: "RiskAssessment",       file: "RiskAssessment.ts" },
  { path: "/page-080", name: "RolePermissions",      file: "RolePermissions.ts" },
  { path: "/page-081", name: "SalesReport",          file: "SalesReport.ts" },
  { path: "/page-082", name: "SearchQueries",        file: "SearchQueries.ts" },
  { path: "/page-083", name: "SecurityAlerts",       file: "SecurityAlerts.ts" },
  { path: "/page-084", name: "SeoRankings",          file: "SeoRankings.ts" },
  { path: "/page-085", name: "ServerMonitoring",     file: "ServerMonitoring.ts" },
  { path: "/page-086", name: "ShiftScheduler",       file: "ShiftScheduler.ts" },
  { path: "/page-087", name: "ShippingDashboard",    file: "ShippingDashboard.ts" },
  { path: "/page-088", name: "SkillMatrix",          file: "SkillMatrix.ts" },
  { path: "/page-089", name: "SocialMediaAnalytics", file: "SocialMediaAnalytics.ts" },
  { path: "/page-090", name: "SprintPlanner",        file: "SprintPlanner.ts" },
  { path: "/page-091", name: "StakeholderMap",       file: "StakeholderMap.ts" },
  { path: "/page-092", name: "StoreLocator",         file: "StoreLocator.ts" },
  { path: "/page-093", name: "SubscriptionPlans",    file: "SubscriptionPlans.ts" },
  { path: "/page-094", name: "SuccessionPlanning",   file: "SuccessionPlanning.ts" },
  { path: "/page-095", name: "SupportTickets",       file: "SupportTickets.ts" },
  { path: "/page-096", name: "SystemHealth",         file: "SystemHealth.ts" },
  { path: "/page-097", name: "TeamDirectory",        file: "TeamDirectory.ts" },
  { path: "/page-098", name: "TimeOnSite",           file: "TimeOnSite.ts" },
  { path: "/page-099", name: "TimesheetApproval",    file: "TimesheetApproval.ts" },
  { path: "/page-100", name: "TrafficSources",       file: "TrafficSources.ts" },
  { path: "/page-101", name: "TrainingModules",      file: "TrainingModules.ts" },
  { path: "/page-102", name: "UserManagement",       file: "UserManagement.ts" },
  { path: "/page-103", name: "UserSessions",         file: "UserSessions.ts" },
  { path: "/page-104", name: "VendorPortal",         file: "VendorPortal.ts" },
  { path: "/page-105", name: "VendorScorecard",      file: "VendorScorecard.ts" },
  { path: "/page-106", name: "WarehouseMap",         file: "WarehouseMap.ts" },
  { path: "/page-107", name: "WorkflowBuilder",      file: "WorkflowBuilder.ts" },
  { path: "/page-108", name: "YearEndReview",        file: "YearEndReview.ts" },
];

// ── Landing / not-found page with navigable link grid ────────────────────
const Landing = () => () => html`
  <div style="font-family:system-ui;min-height:100vh;background:#f8f9fa;padding:2rem">
    <div style="max-width:1100px;margin:0 auto">
      <h1 style="font-size:2rem;margin:0 0 0.25rem;color:#1a1a2e">
        Mates Heavy Benchmark
      </h1>
      <p style="color:#666;margin:0 0 2rem;font-size:0.95rem">
        108 pages · 20 components each · 4 CSS files each — click any page to
        navigate
      </p>
      <div style="
        display:grid;
        grid-template-columns:repeat(auto-fill,minmax(160px,1fr));
        gap:0.5rem
      ">
        ${PAGES.map((p) => {
          const num = p.path.slice(6); // "001" .. "108"
          return html`
            <button
              @click=${(e: Event) => { e.preventDefault(); navigateTo(p.path); }}
              style="
                display:flex;align-items:center;gap:0.5rem;
                padding:0.55rem 0.75rem;
                border:1px solid #dee2e6;border-radius:6px;
                background:#fff;color:#333;cursor:pointer;
                font-size:0.85rem;font-family:inherit;
                text-align:left;transition:all 0.15s
              "
              onmouseover="this.style.borderColor='#4a6cf7';this.style.boxShadow='0 0 0 2px rgba(74,108,247,.15)'"
              onmouseout="this.style.borderColor='#dee2e6';this.style.boxShadow='none'"
            >
              <span style="
                display:inline-flex;align-items:center;justify-content:center;
                width:26px;height:26px;border-radius:4px;
                background:#4a6cf7;color:#fff;font-size:0.7rem;font-weight:700;
                flex-shrink:0
              ">${num}</span>
              <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">
                ${p.name.replace(/([A-Z])/g, " $1").trim()}
              </span>
            </button>
          `;
        })}
      </div>
    </div>
  </div>
`;

// ── Build lazy routes ────────────────────────────────────────────────────
const routes = PAGES.map((p) => ({
  path: p.path,
  component: async () => import(`./pages/${p.file}`),
}));
let count = 0; 
// ── App component ────────────────────────────────────────────────────────
const App = () => {
  return () => Router(routes, Landing)();
};

export default App;
