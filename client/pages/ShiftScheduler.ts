import{html,x}from"mates";import type{Props}from"mates";
import"../styles/layout.css";import"../styles/theme.css";import"../styles/components.css";import"../styles/utilities.css";
import{DataSummaryCard}from"../components/custom/DataSummaryCard.ts";
import{UserProfileBlock}from"../components/custom/UserProfileBlock.ts";
import{ProductInfoPanel}from"../components/custom/ProductInfoPanel.ts";
import{ActivityTimeline}from"../components/custom/ActivityTimeline.ts";
import{MetricsWidget}from"../components/custom/MetricsWidget.ts";
import{StatusOverview}from"../components/custom/StatusOverview.ts";
import{DataTableSection}from"../components/custom/DataTableSection.ts";
import{DetailViewPanel}from"../components/custom/DetailViewPanel.ts";
import{NotificationCenter}from"../components/custom/NotificationCenter.ts";
import{AnalyticsChart}from"../components/custom/AnalyticsChart.ts";
import{UIButton}from"../components/ui/UIButton.ts";
import{UITextBlock}from"../components/ui/UITextBlock.ts";
import{UICard}from"../components/ui/UICard.ts";
import{UIBadge}from"../components/ui/UIBadge.ts";
import{UIChip}from"../components/ui/UIChip.ts";
import{UISpinner}from"../components/ui/UISpinner.ts";
import{UISwitch}from"../components/ui/UISwitch.ts";
import{UIProgress}from"../components/ui/UIProgress.ts";
import{UISkeleton}from"../components/ui/UISkeleton.ts";
import{UIIcon}from"../components/ui/UIIcon.ts";
export const ShiftScheduler=(_p:Props<{}>)=>()=>html`<div class="page-container">
<div class="page-header"><h1 style="color:hsl(58,65%,61%)">Shift Scheduler</h1><p>Manage shift scheduler.</p></div>
<div class="component-column">
<div class="api-card">${x(DataSummaryCard,{pageId:"page-095"})}</div>
<div class="api-card">${x(ProductInfoPanel,{pageId:"page-095"})}</div>
<div class="api-card">${x(MetricsWidget,{pageId:"page-095"})}</div>
<div class="api-card">${x(DataTableSection,{pageId:"page-095"})}</div>
<div class="api-card">${x(NotificationCenter,{pageId:"page-095"})}</div>
<div class="api-card">${x(UIButton,{pageId:"page-095"})}</div>
<div class="api-card">${x(UICard,{pageId:"page-095"})}</div>
<div class="api-card">${x(UIChip,{pageId:"page-095"})}</div>
<div class="api-card">${x(UISwitch,{pageId:"page-095"})}</div>
<div class="api-card">${x(UISkeleton,{pageId:"page-095"})}</div>
</div>
<div class="component-column">
<div class="api-card">${x(UserProfileBlock,{pageId:"page-095"})}</div>
<div class="api-card">${x(ActivityTimeline,{pageId:"page-095"})}</div>
<div class="api-card">${x(StatusOverview,{pageId:"page-095"})}</div>
<div class="api-card">${x(DetailViewPanel,{pageId:"page-095"})}</div>
<div class="api-card">${x(AnalyticsChart,{pageId:"page-095"})}</div>
<div class="component-full"><div class="component-row">
${x(UITextBlock,{pageId:"page-095"})}
${x(UIBadge,{pageId:"page-095"})}
${x(UISpinner,{pageId:"page-095"})}
${x(UIProgress,{pageId:"page-095"})}
${x(UIIcon,{pageId:"page-095"})}
</div></div></div></div>`;