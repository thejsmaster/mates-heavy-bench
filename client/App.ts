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
  "/page-108": YearEndReview,
};

const App = () => {
  const p = pathAtom();
  const C = _pages[p];
  return C
    ? () => x(C, {})
    : () => html`<div style="font-family:system-ui;padding:3rem;text-align:center;background:#f8f9fa;min-height:100vh">
        <h1 style="font-size:2rem;margin-bottom:0.5rem">Mates Heavy Benchmark</h1>
        <p style="color:#666;margin-bottom:2rem">108 pages · 20 components each · 4 CSS files each</p>
        <nav style="display:flex;flex-wrap:wrap;gap:0.3rem;justify-content:center;max-width:900px;margin:0 auto">
          <a href="/page-001" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">1</a> <a href="/page-002" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">2</a> <a href="/page-003" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">3</a> <a href="/page-004" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">4</a> <a href="/page-005" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">5</a> <a href="/page-006" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">6</a> <a href="/page-007" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">7</a> <a href="/page-008" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">8</a> <a href="/page-009" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">9</a> <a href="/page-010" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">10</a> <a href="/page-011" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">11</a> <a href="/page-012" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">12</a> <a href="/page-013" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">13</a> <a href="/page-014" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">14</a> <a href="/page-015" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">15</a> <a href="/page-016" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">16</a> <a href="/page-017" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">17</a> <a href="/page-018" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">18</a> <a href="/page-019" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">19</a> <a href="/page-020" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">20</a> <a href="/page-021" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">21</a> <a href="/page-022" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">22</a> <a href="/page-023" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">23</a> <a href="/page-024" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">24</a> <a href="/page-025" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">25</a> <a href="/page-026" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">26</a> <a href="/page-027" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">27</a> <a href="/page-028" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">28</a> <a href="/page-029" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">29</a> <a href="/page-030" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">30</a> <a href="/page-031" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">31</a> <a href="/page-032" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">32</a> <a href="/page-033" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">33</a> <a href="/page-034" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">34</a> <a href="/page-035" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">35</a> <a href="/page-036" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">36</a> <a href="/page-037" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">37</a> <a href="/page-038" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">38</a> <a href="/page-039" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">39</a> <a href="/page-040" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">40</a> <a href="/page-041" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">41</a> <a href="/page-042" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">42</a> <a href="/page-043" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">43</a> <a href="/page-044" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">44</a> <a href="/page-045" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">45</a> <a href="/page-046" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">46</a> <a href="/page-047" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">47</a> <a href="/page-048" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">48</a> <a href="/page-049" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">49</a> <a href="/page-050" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">50</a> <a href="/page-051" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">51</a> <a href="/page-052" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">52</a> <a href="/page-053" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">53</a> <a href="/page-054" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">54</a> <a href="/page-055" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">55</a> <a href="/page-056" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">56</a> <a href="/page-057" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">57</a> <a href="/page-058" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">58</a> <a href="/page-059" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">59</a> <a href="/page-060" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">60</a> <a href="/page-061" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">61</a> <a href="/page-062" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">62</a> <a href="/page-063" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">63</a> <a href="/page-064" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">64</a> <a href="/page-065" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">65</a> <a href="/page-066" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">66</a> <a href="/page-067" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">67</a> <a href="/page-068" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">68</a> <a href="/page-069" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">69</a> <a href="/page-070" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">70</a> <a href="/page-071" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">71</a> <a href="/page-072" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">72</a> <a href="/page-073" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">73</a> <a href="/page-074" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">74</a> <a href="/page-075" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">75</a> <a href="/page-076" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">76</a> <a href="/page-077" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">77</a> <a href="/page-078" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">78</a> <a href="/page-079" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">79</a> <a href="/page-080" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">80</a> <a href="/page-081" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">81</a> <a href="/page-082" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">82</a> <a href="/page-083" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">83</a> <a href="/page-084" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">84</a> <a href="/page-085" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">85</a> <a href="/page-086" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">86</a> <a href="/page-087" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">87</a> <a href="/page-088" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">88</a> <a href="/page-089" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">89</a> <a href="/page-090" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">90</a> <a href="/page-091" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">91</a> <a href="/page-092" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">92</a> <a href="/page-093" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">93</a> <a href="/page-094" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">94</a> <a href="/page-095" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">95</a> <a href="/page-096" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">96</a> <a href="/page-097" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">97</a> <a href="/page-098" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">98</a> <a href="/page-099" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">99</a> <a href="/page-100" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">100</a> <a href="/page-101" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">101</a> <a href="/page-102" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">102</a> <a href="/page-103" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">103</a> <a href="/page-104" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">104</a> <a href="/page-105" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">105</a> <a href="/page-106" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">106</a> <a href="/page-107" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">107</a> <a href="/page-108" style="padding:0.3rem 0.6rem;background:#f0f0f0;border-radius:6px;text-decoration:none;color:#333;font-size:0.75rem;margin:0.15rem;display:inline-block">108</a>
        </nav>
      </div>`;
};

export { App };
