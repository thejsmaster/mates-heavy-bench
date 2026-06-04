import { html, x, pathAtom } from "mates";

/** Page cache — each page is loaded once on first visit. */
const _loaded: Record<string, any> = {};
const _loaders: Record<string, () => Promise<any>> = {
  "/page-001": async () => (await import("./pages/ABTestResults.ts")).ABTestResults,
  "/page-002": async () => (await import("./pages/AdPerformance.ts")).AdPerformance,
  "/page-003": async () => (await import("./pages/AffiliateNetwork.ts")).AffiliateNetwork,
  "/page-004": async () => (await import("./pages/AnalyticsDashboard.ts")).AnalyticsDashboard,
  "/page-005": async () => (await import("./pages/ApiDocumentation.ts")).ApiDocumentation,
  "/page-006": async () => (await import("./pages/AssetManagement.ts")).AssetManagement,
  "/page-007": async () => (await import("./pages/AuditLogViewer.ts")).AuditLogViewer,
  "/page-008": async () => (await import("./pages/BackupRestore.ts")).BackupRestore,
  "/page-009": async () => (await import("./pages/BoardReport.ts")).BoardReport,
  "/page-010": async () => (await import("./pages/BounceRateAnalysis.ts")).BounceRateAnalysis,
  "/page-011": async () => (await import("./pages/BranchPerformance.ts")).BranchPerformance,
  "/page-012": async () => (await import("./pages/BrowserStats.ts")).BrowserStats,
  "/page-013": async () => (await import("./pages/BudgetPlanning.ts")).BudgetPlanning,
  "/page-014": async () => (await import("./pages/BugTracker.ts")).BugTracker,
  "/page-015": async () => (await import("./pages/BusinessContinuity.ts")).BusinessContinuity,
  "/page-016": async () => (await import("./pages/CacheAnalytics.ts")).CacheAnalytics,
  "/page-017": async () => (await import("./pages/ChatRoom.ts")).ChatRoom,
  "/page-018": async () => (await import("./pages/ChurnAnalysis.ts")).ChurnAnalysis,
  "/page-019": async () => (await import("./pages/CodeReviewQueue.ts")).CodeReviewQueue,
  "/page-020": async () => (await import("./pages/CommissionReport.ts")).CommissionReport,
  "/page-021": async () => (await import("./pages/ComplianceReport.ts")).ComplianceReport,
  "/page-022": async () => (await import("./pages/ContentManagement.ts")).ContentManagement,
  "/page-023": async () => (await import("./pages/ContractLibrary.ts")).ContractLibrary,
  "/page-024": async () => (await import("./pages/ContractRenewals.ts")).ContractRenewals,
  "/page-025": async () => (await import("./pages/ConversionFunnel.ts")).ConversionFunnel,
  "/page-026": async () => (await import("./pages/CustomerInsights.ts")).CustomerInsights,
  "/page-027": async () => (await import("./pages/CustomerSegments.ts")).CustomerSegments,
  "/page-028": async () => (await import("./pages/DataExport.ts")).DataExport,
  "/page-029": async () => (await import("./pages/DatabaseAdmin.ts")).DatabaseAdmin,
  "/page-030": async () => (await import("./pages/DealTracker.ts")).DealTracker,
  "/page-031": async () => (await import("./pages/DeploymentHistory.ts")).DeploymentHistory,
  "/page-032": async () => (await import("./pages/DeviceBreakdown.ts")).DeviceBreakdown,
  "/page-033": async () => (await import("./pages/DisasterRecovery.ts")).DisasterRecovery,
  "/page-034": async () => (await import("./pages/EmailCampaigns.ts")).EmailCampaigns,
  "/page-035": async () => (await import("./pages/EmployeeOnboarding.ts")).EmployeeOnboarding,
  "/page-036": async () => (await import("./pages/ExecutiveSummary.ts")).ExecutiveSummary,
  "/page-037": async () => (await import("./pages/ExpenseTracker.ts")).ExpenseTracker,
  "/page-038": async () => (await import("./pages/FeatureFlags.ts")).FeatureFlags,
  "/page-039": async () => (await import("./pages/FeedbackSurvey.ts")).FeedbackSurvey,
  "/page-040": async () => (await import("./pages/GeoTargeting.ts")).GeoTargeting,
  "/page-041": async () => (await import("./pages/GoalTracking.ts")).GoalTracking,
  "/page-042": async () => (await import("./pages/HirePipeline.ts")).HirePipeline,
  "/page-043": async () => (await import("./pages/IncidentReport.ts")).IncidentReport,
  "/page-044": async () => (await import("./pages/InventoryOverview.ts")).InventoryOverview,
  "/page-045": async () => (await import("./pages/InvestorUpdate.ts")).InvestorUpdate,
  "/page-046": async () => (await import("./pages/InvoiceManager.ts")).InvoiceManager,
  "/page-047": async () => (await import("./pages/KpiDashboard.ts")).KpiDashboard,
  "/page-048": async () => (await import("./pages/LanguageDistribution.ts")).LanguageDistribution,
  "/page-049": async () => (await import("./pages/LeadGeneration.ts")).LeadGeneration,
  "/page-050": async () => (await import("./pages/LeaveManagement.ts")).LeaveManagement,
  "/page-051": async () => (await import("./pages/LifetimeValue.ts")).LifetimeValue,
  "/page-052": async () => (await import("./pages/LoadTestResults.ts")).LoadTestResults,
  "/page-053": async () => (await import("./pages/MarketingCampaign.ts")).MarketingCampaign,
  "/page-054": async () => (await import("./pages/NotificationCenter.ts")).NotificationCenter,
  "/page-055": async () => (await import("./pages/OrderTracking.ts")).OrderTracking,
  "/page-056": async () => (await import("./pages/OrgChartViewer.ts")).OrgChartViewer,
  "/page-057": async () => (await import("./pages/OsAnalytics.ts")).OsAnalytics,
  "/page-058": async () => (await import("./pages/OvertimeReport.ts")).OvertimeReport,
  "/page-059": async () => (await import("./pages/PageViewsHeatmap.ts")).PageViewsHeatmap,
  "/page-060": async () => (await import("./pages/PartnerPortal.ts")).PartnerPortal,
  "/page-061": async () => (await import("./pages/PayrollSummary.ts")).PayrollSummary,
  "/page-062": async () => (await import("./pages/PerformanceMetrics.ts")).PerformanceMetrics,
  "/page-063": async () => (await import("./pages/PerformanceReview.ts")).PerformanceReview,
  "/page-064": async () => (await import("./pages/PipelineForecast.ts")).PipelineForecast,
  "/page-065": async () => (await import("./pages/PolicyLibrary.ts")).PolicyLibrary,
  "/page-066": async () => (await import("./pages/ProcurementOrder.ts")).ProcurementOrder,
  "/page-067": async () => (await import("./pages/ProductCatalog.ts")).ProductCatalog,
  "/page-068": async () => (await import("./pages/ProductRoadmap.ts")).ProductRoadmap,
  "/page-069": async () => (await import("./pages/QualityControl.ts")).QualityControl,
  "/page-070": async () => (await import("./pages/QuarterlyForecast.ts")).QuarterlyForecast,
  "/page-071": async () => (await import("./pages/ReferralProgram.ts")).ReferralProgram,
  "/page-072": async () => (await import("./pages/RegionalSales.ts")).RegionalSales,
  "/page-073": async () => (await import("./pages/ReleaseNotes.ts")).ReleaseNotes,
  "/page-074": async () => (await import("./pages/ResellerDashboard.ts")).ResellerDashboard,
  "/page-075": async () => (await import("./pages/ResourceAllocation.ts")).ResourceAllocation,
  "/page-076": async () => (await import("./pages/RetentionCohorts.ts")).RetentionCohorts,
  "/page-077": async () => (await import("./pages/ReturnManagement.ts")).ReturnManagement,
  "/page-078": async () => (await import("./pages/RevenueAnalysis.ts")).RevenueAnalysis,
  "/page-079": async () => (await import("./pages/RiskAssessment.ts")).RiskAssessment,
  "/page-080": async () => (await import("./pages/RolePermissions.ts")).RolePermissions,
  "/page-081": async () => (await import("./pages/SalesReport.ts")).SalesReport,
  "/page-082": async () => (await import("./pages/SearchQueries.ts")).SearchQueries,
  "/page-083": async () => (await import("./pages/SecurityAlerts.ts")).SecurityAlerts,
  "/page-084": async () => (await import("./pages/SeoRankings.ts")).SeoRankings,
  "/page-085": async () => (await import("./pages/ServerMonitoring.ts")).ServerMonitoring,
  "/page-086": async () => (await import("./pages/ShiftScheduler.ts")).ShiftScheduler,
  "/page-087": async () => (await import("./pages/ShippingDashboard.ts")).ShippingDashboard,
  "/page-088": async () => (await import("./pages/SkillMatrix.ts")).SkillMatrix,
  "/page-089": async () => (await import("./pages/SocialMediaAnalytics.ts")).SocialMediaAnalytics,
  "/page-090": async () => (await import("./pages/SprintPlanner.ts")).SprintPlanner,
  "/page-091": async () => (await import("./pages/StakeholderMap.ts")).StakeholderMap,
  "/page-092": async () => (await import("./pages/StoreLocator.ts")).StoreLocator,
  "/page-093": async () => (await import("./pages/SubscriptionPlans.ts")).SubscriptionPlans,
  "/page-094": async () => (await import("./pages/SuccessionPlanning.ts")).SuccessionPlanning,
  "/page-095": async () => (await import("./pages/SupportTickets.ts")).SupportTickets,
  "/page-096": async () => (await import("./pages/SystemHealth.ts")).SystemHealth,
  "/page-097": async () => (await import("./pages/TeamDirectory.ts")).TeamDirectory,
  "/page-098": async () => (await import("./pages/TimeOnSite.ts")).TimeOnSite,
  "/page-099": async () => (await import("./pages/TimesheetApproval.ts")).TimesheetApproval,
  "/page-100": async () => (await import("./pages/TrafficSources.ts")).TrafficSources,
  "/page-101": async () => (await import("./pages/TrainingModules.ts")).TrainingModules,
  "/page-102": async () => (await import("./pages/UserManagement.ts")).UserManagement,
  "/page-103": async () => (await import("./pages/UserSessions.ts")).UserSessions,
  "/page-104": async () => (await import("./pages/VendorPortal.ts")).VendorPortal,
  "/page-105": async () => (await import("./pages/VendorScorecard.ts")).VendorScorecard,
  "/page-106": async () => (await import("./pages/WarehouseMap.ts")).WarehouseMap,
  "/page-107": async () => (await import("./pages/WorkflowBuilder.ts")).WorkflowBuilder,
  "/page-108": async () => (await import("./pages/YearEndReview.ts")).YearEndReview,
};

const App = () => {
  const p = pathAtom();
  const loader = _loaders[p];
  if (!loader) {
    return () => html`<div style="font-family:system-ui;padding:3rem;text-align:center;background:#f8f9fa;min-height:100vh">
        <h1 style="font-size:2rem;margin-bottom:0.5rem">Mates Heavy Benchmark</h1>
        <p style="color:#666;margin-bottom:2rem">108 pages · 20 components each · 4 CSS files each</p>
      </div>`;
  }

  // Trigger the lazy load; x() handles async components
  if (!_loaded[p]) {
    _loaded[p] = true;
    loader().then(fn => { _loaded[p] = fn; });
  }

  const C = typeof _loaded[p] === "function" ? _loaded[p] : null;
  return C ? () => x(C, {}) : () => html`<div>Loading...</div>`;
};

export { App };
