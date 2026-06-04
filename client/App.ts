import { html, x, pathAtom } from "mates";
import { ABTestResults } from "./pages/ABTestResults.ts";
import { AdPerformance } from "./pages/AdPerformance.ts";
import { AffiliateNetwork } from "./pages/AffiliateNetwork.ts";
import { AnalyticsDashboard } from "./pages/AnalyticsDashboard.ts";
import { ApiDocumentation } from "./pages/ApiDocumentation.ts";
import { AssetManagement } from "./pages/AssetManagement.ts";
import { AuditLogViewer } from "./pages/AuditLogViewer.ts";
import { BackupRestore } from "./pages/BackupRestore.ts";
import { BoardReport } from "./pages/BoardReport.ts";
import { BounceRateAnalysis } from "./pages/BounceRateAnalysis.ts";
import { BranchPerformance } from "./pages/BranchPerformance.ts";
import { BrowserStats } from "./pages/BrowserStats.ts";
import { BudgetPlanning } from "./pages/BudgetPlanning.ts";
import { BugTracker } from "./pages/BugTracker.ts";
import { BusinessContinuity } from "./pages/BusinessContinuity.ts";
import { CacheAnalytics } from "./pages/CacheAnalytics.ts";
import { ChatRoom } from "./pages/ChatRoom.ts";
import { ChurnAnalysis } from "./pages/ChurnAnalysis.ts";
import { CodeReviewQueue } from "./pages/CodeReviewQueue.ts";
import { CommissionReport } from "./pages/CommissionReport.ts";
import { ComplianceReport } from "./pages/ComplianceReport.ts";
import { ContentManagement } from "./pages/ContentManagement.ts";
import { ContractLibrary } from "./pages/ContractLibrary.ts";
import { ContractRenewals } from "./pages/ContractRenewals.ts";
import { ConversionFunnel } from "./pages/ConversionFunnel.ts";
import { CustomerInsights } from "./pages/CustomerInsights.ts";
import { CustomerSegments } from "./pages/CustomerSegments.ts";
import { DataExport } from "./pages/DataExport.ts";
import { DatabaseAdmin } from "./pages/DatabaseAdmin.ts";
import { DealTracker } from "./pages/DealTracker.ts";
import { DeploymentHistory } from "./pages/DeploymentHistory.ts";
import { DeviceBreakdown } from "./pages/DeviceBreakdown.ts";
import { DisasterRecovery } from "./pages/DisasterRecovery.ts";
import { EmailCampaigns } from "./pages/EmailCampaigns.ts";
import { EmployeeOnboarding } from "./pages/EmployeeOnboarding.ts";
import { ExecutiveSummary } from "./pages/ExecutiveSummary.ts";
import { ExpenseTracker } from "./pages/ExpenseTracker.ts";
import { FeatureFlags } from "./pages/FeatureFlags.ts";
import { FeedbackSurvey } from "./pages/FeedbackSurvey.ts";
import { GeoTargeting } from "./pages/GeoTargeting.ts";
import { GoalTracking } from "./pages/GoalTracking.ts";
import { HirePipeline } from "./pages/HirePipeline.ts";
import { IncidentReport } from "./pages/IncidentReport.ts";
import { InventoryOverview } from "./pages/InventoryOverview.ts";
import { InvestorUpdate } from "./pages/InvestorUpdate.ts";
import { InvoiceManager } from "./pages/InvoiceManager.ts";
import { KpiDashboard } from "./pages/KpiDashboard.ts";
import { LanguageDistribution } from "./pages/LanguageDistribution.ts";
import { LeadGeneration } from "./pages/LeadGeneration.ts";
import { LeaveManagement } from "./pages/LeaveManagement.ts";
import { LifetimeValue } from "./pages/LifetimeValue.ts";
import { LoadTestResults } from "./pages/LoadTestResults.ts";
import { MarketingCampaign } from "./pages/MarketingCampaign.ts";
import { NotificationCenter } from "./pages/NotificationCenter.ts";
import { OrderTracking } from "./pages/OrderTracking.ts";
import { OrgChartViewer } from "./pages/OrgChartViewer.ts";
import { OsAnalytics } from "./pages/OsAnalytics.ts";
import { OvertimeReport } from "./pages/OvertimeReport.ts";
import { PageViewsHeatmap } from "./pages/PageViewsHeatmap.ts";
import { PartnerPortal } from "./pages/PartnerPortal.ts";
import { PayrollSummary } from "./pages/PayrollSummary.ts";
import { PerformanceMetrics } from "./pages/PerformanceMetrics.ts";
import { PerformanceReview } from "./pages/PerformanceReview.ts";
import { PipelineForecast } from "./pages/PipelineForecast.ts";
import { PolicyLibrary } from "./pages/PolicyLibrary.ts";
import { ProcurementOrder } from "./pages/ProcurementOrder.ts";
import { ProductCatalog } from "./pages/ProductCatalog.ts";
import { ProductRoadmap } from "./pages/ProductRoadmap.ts";
import { QualityControl } from "./pages/QualityControl.ts";
import { QuarterlyForecast } from "./pages/QuarterlyForecast.ts";
import { ReferralProgram } from "./pages/ReferralProgram.ts";
import { RegionalSales } from "./pages/RegionalSales.ts";
import { ReleaseNotes } from "./pages/ReleaseNotes.ts";
import { ResellerDashboard } from "./pages/ResellerDashboard.ts";
import { ResourceAllocation } from "./pages/ResourceAllocation.ts";
import { RetentionCohorts } from "./pages/RetentionCohorts.ts";
import { ReturnManagement } from "./pages/ReturnManagement.ts";
import { RevenueAnalysis } from "./pages/RevenueAnalysis.ts";
import { RiskAssessment } from "./pages/RiskAssessment.ts";
import { RolePermissions } from "./pages/RolePermissions.ts";
import { SalesReport } from "./pages/SalesReport.ts";
import { SearchQueries } from "./pages/SearchQueries.ts";
import { SecurityAlerts } from "./pages/SecurityAlerts.ts";
import { SeoRankings } from "./pages/SeoRankings.ts";
import { ServerMonitoring } from "./pages/ServerMonitoring.ts";
import { ShiftScheduler } from "./pages/ShiftScheduler.ts";
import { ShippingDashboard } from "./pages/ShippingDashboard.ts";
import { SkillMatrix } from "./pages/SkillMatrix.ts";
import { SocialMediaAnalytics } from "./pages/SocialMediaAnalytics.ts";
import { SprintPlanner } from "./pages/SprintPlanner.ts";
import { StakeholderMap } from "./pages/StakeholderMap.ts";
import { StoreLocator } from "./pages/StoreLocator.ts";
import { SubscriptionPlans } from "./pages/SubscriptionPlans.ts";
import { SuccessionPlanning } from "./pages/SuccessionPlanning.ts";
import { SupportTickets } from "./pages/SupportTickets.ts";
import { SystemHealth } from "./pages/SystemHealth.ts";
import { TeamDirectory } from "./pages/TeamDirectory.ts";
import { TimeOnSite } from "./pages/TimeOnSite.ts";
import { TimesheetApproval } from "./pages/TimesheetApproval.ts";
import { TrafficSources } from "./pages/TrafficSources.ts";
import { TrainingModules } from "./pages/TrainingModules.ts";
import { UserManagement } from "./pages/UserManagement.ts";
import { UserSessions } from "./pages/UserSessions.ts";
import { VendorPortal } from "./pages/VendorPortal.ts";
import { VendorScorecard } from "./pages/VendorScorecard.ts";
import { WarehouseMap } from "./pages/WarehouseMap.ts";
import { WorkflowBuilder } from "./pages/WorkflowBuilder.ts";
import { YearEndReview } from "./pages/YearEndReview.ts";

const _pages: Record<string, any> = {
  "/page-001": ABTestResults,
  "/page-002": AdPerformance,
  "/page-003": AffiliateNetwork,
  "/page-004": AnalyticsDashboard,
  "/page-005": ApiDocumentation,
  "/page-006": AssetManagement,
  "/page-007": AuditLogViewer,
  "/page-008": BackupRestore,
  "/page-009": BoardReport,
  "/page-010": BounceRateAnalysis,
  "/page-011": BranchPerformance,
  "/page-012": BrowserStats,
  "/page-013": BudgetPlanning,
  "/page-014": BugTracker,
  "/page-015": BusinessContinuity,
  "/page-016": CacheAnalytics,
  "/page-017": ChatRoom,
  "/page-018": ChurnAnalysis,
  "/page-019": CodeReviewQueue,
  "/page-020": CommissionReport,
  "/page-021": ComplianceReport,
  "/page-022": ContentManagement,
  "/page-023": ContractLibrary,
  "/page-024": ContractRenewals,
  "/page-025": ConversionFunnel,
  "/page-026": CustomerInsights,
  "/page-027": CustomerSegments,
  "/page-028": DataExport,
  "/page-029": DatabaseAdmin,
  "/page-030": DealTracker,
  "/page-031": DeploymentHistory,
  "/page-032": DeviceBreakdown,
  "/page-033": DisasterRecovery,
  "/page-034": EmailCampaigns,
  "/page-035": EmployeeOnboarding,
  "/page-036": ExecutiveSummary,
  "/page-037": ExpenseTracker,
  "/page-038": FeatureFlags,
  "/page-039": FeedbackSurvey,
  "/page-040": GeoTargeting,
  "/page-041": GoalTracking,
  "/page-042": HirePipeline,
  "/page-043": IncidentReport,
  "/page-044": InventoryOverview,
  "/page-045": InvestorUpdate,
  "/page-046": InvoiceManager,
  "/page-047": KpiDashboard,
  "/page-048": LanguageDistribution,
  "/page-049": LeadGeneration,
  "/page-050": LeaveManagement,
  "/page-051": LifetimeValue,
  "/page-052": LoadTestResults,
  "/page-053": MarketingCampaign,
  "/page-054": NotificationCenter,
  "/page-055": OrderTracking,
  "/page-056": OrgChartViewer,
  "/page-057": OsAnalytics,
  "/page-058": OvertimeReport,
  "/page-059": PageViewsHeatmap,
  "/page-060": PartnerPortal,
  "/page-061": PayrollSummary,
  "/page-062": PerformanceMetrics,
  "/page-063": PerformanceReview,
  "/page-064": PipelineForecast,
  "/page-065": PolicyLibrary,
  "/page-066": ProcurementOrder,
  "/page-067": ProductCatalog,
  "/page-068": ProductRoadmap,
  "/page-069": QualityControl,
  "/page-070": QuarterlyForecast,
  "/page-071": ReferralProgram,
  "/page-072": RegionalSales,
  "/page-073": ReleaseNotes,
  "/page-074": ResellerDashboard,
  "/page-075": ResourceAllocation,
  "/page-076": RetentionCohorts,
  "/page-077": ReturnManagement,
  "/page-078": RevenueAnalysis,
  "/page-079": RiskAssessment,
  "/page-080": RolePermissions,
  "/page-081": SalesReport,
  "/page-082": SearchQueries,
  "/page-083": SecurityAlerts,
  "/page-084": SeoRankings,
  "/page-085": ServerMonitoring,
  "/page-086": ShiftScheduler,
  "/page-087": ShippingDashboard,
  "/page-088": SkillMatrix,
  "/page-089": SocialMediaAnalytics,
  "/page-090": SprintPlanner,
  "/page-091": StakeholderMap,
  "/page-092": StoreLocator,
  "/page-093": SubscriptionPlans,
  "/page-094": SuccessionPlanning,
  "/page-095": SupportTickets,
  "/page-096": SystemHealth,
  "/page-097": TeamDirectory,
  "/page-098": TimeOnSite,
  "/page-099": TimesheetApproval,
  "/page-100": TrafficSources,
  "/page-101": TrainingModules,
  "/page-102": UserManagement,
  "/page-103": UserSessions,
  "/page-104": VendorPortal,
  "/page-105": VendorScorecard,
  "/page-106": WarehouseMap,
  "/page-107": WorkflowBuilder,
  "/page-108": YearEndReview
};

const App = () => {
  const p = pathAtom();
  console.log('[App] path:', p, 'found:', !!_pages[p]);
  const C = _pages[p];
  return C
    ? () => x(C, {})
    : () => html`<div style="font-family:system-ui;padding:3rem;text-align:center;background:#f8f9fa;min-height:100vh">
        <h1 style="font-size:2rem;margin-bottom:0.5rem">Mates Heavy Benchmark</h1>
        <p style="color:#666;margin-bottom:2rem">108 pages · 20 components each · 4 CSS files each</p>
      </div>`;
};

export default App;
