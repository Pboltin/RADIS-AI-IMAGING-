"use client";
import {useState} from "react";
import {Activity,AlertTriangle,ChevronLeft,ChevronRight,CircleHelp,FileText,FolderOpen,Gauge,Layers3,Maximize2,MessageSquareText,MoreHorizontal,PanelRight,Play,ScanLine,Search,Settings2,ShieldCheck,SlidersHorizontal,Sparkles,Stethoscope,Upload,UserRound,ZoomIn} from "lucide-react";

const findings=[
{name:"Pneumonia",level:"Possible",note:"Focal air-space opacity in the right lower lung zone.",icon:Activity},
{name:"TB-compatible pattern",level:"Review",note:"Upper-zone reticular/nodular pattern flagged for review.",icon:ScanLine},
{name:"Pneumothorax",level:"Low concern",note:"No strong pleural-line signal in this demonstration case.",icon:ShieldCheck}
];

export default function Home(){
const [panel,setPanel]=useState("ai"); const [selected,setSelected]=useState(0);
return <main className="shell">
<header className="topbar"><div className="brand"><div className="brandMark"><Activity size={17}/></div><div><strong>RADIS</strong><span>AI</span><small>INTELLIGENT RADIOLOGY</small></div></div>
<div className="studyCrumb"><span className="muted">Studies</span><ChevronRight size={14}/><strong>XR-2026-00481</strong><span className="pill subtle">CHEST PA</span><span className="pill research"><i/> RESEARCH PROTOTYPE</span></div>
<div className="topActions"><button className="iconBtn"><Search size={18}/></button><button className="iconBtn"><CircleHelp size={18}/></button><button className="iconBtn"><Settings2 size={18}/></button><div className="avatar"><UserRound size={17}/></div></div></header>

<section className="workspace">
<aside className="studyRail"><div className="railHead"><span>STUDY</span><button className="iconBtn small"><MoreHorizontal size={17}/></button></div>
<div className="caseCard active"><div className="thumb xray"><div className="lung l"/><div className="lung r"/><div className="spine"/></div><div className="caseMeta"><strong>Chest X-ray</strong><span>PA · 1 image</span><small>Today · 09:42</small></div></div>
<div className="caseCard"><div className="thumb ghost"><ScanLine size={18}/></div><div className="caseMeta"><strong>Prior study</strong><span>PA · 1 image</span><small>18 Mar 2026</small></div></div>
<div className="railDivider"/><button className="railAction"><Upload size={16}/> Import study</button><button className="railAction"><FolderOpen size={16}/> Study list</button></aside>

<section className="viewer"><div className="viewerTop"><div className="viewerTitle"><b/> Analysis workspace <span>/</span> Chest</div><div className="viewerTools"><button className="tool active"><ZoomIn size={16}/> Zoom</button><button className="tool"><Layers3 size={16}/> Compare</button><button className="tool"><SlidersHorizontal size={16}/> Window</button><button className="tool"><Maximize2 size={16}/></button></div></div>
<div className="imageStage"><div className="corner tl">R</div><div className="corner tr">L</div><div className="imageHud topLeft">PA · 1024 × 1024<br/><span>MONOCHROME2</span></div><div className="imageHud topRight">W 4096 · L 2048</div>
<div className="xrayLarge"><div className="rib r1"/><div className="rib r2"/><div className="rib r3"/><div className="rib r4"/><div className="rib r5"/><div className="bigLung left"/><div className="bigLung right"/><div className="bigSpine"/><div className="heart"/>{selected===0?<div className="aiTarget t1"><span>01</span></div>:<div className="aiTarget t2"><span>02</span></div>}</div>
<div className="imageHud bottomLeft">Case XR-2026-00481 · Demo case</div><div className="imageHud bottomRight">1 / 1</div>
<div className="findingToast"><div className="toastIcon"><Sparkles size={15}/></div><div><strong>AI analysis available</strong><span>3 findings require review</span></div><button onClick={()=>setPanel("ai")}><PanelRight size={15}/></button></div></div>
<div className="bottomRail"><button className="railTool"><Gauge size={16}/> Quality</button><button className="railTool"><ScanLine size={16}/> AI overlay</button><button className="railTool"><Activity size={16}/> Measure</button><button className="railTool"><Layers3 size={16}/> Layout</button><div className="bottomSpacer"/><button className="railTool"><ChevronLeft size={15}/> Prev</button><span className="slice">Image 1 of 1</span><button className="railTool">Next <ChevronRight size={15}/></button></div></section>

<aside className="insights"><div className="insightTabs"><button className={panel==="ai"?"selected":""} onClick={()=>setPanel("ai")}><Sparkles size={15}/> AI Insights</button><button className={panel==="quality"?"selected":""} onClick={()=>setPanel("quality")}><Gauge size={15}/> Quality</button><button className={panel==="report"?"selected":""} onClick={()=>setPanel("report")}><FileText size={15}/> Report</button></div>
{panel==="ai"&&<><div className="panelIntro"><div><span className="eyebrow">RADIS ANALYSIS</span><h2>Findings for review</h2></div><span className="statusReady"><i/> Ready</span></div>
<div className="aiBanner"><div className="spark"><Sparkles size={16}/></div><div><strong>Decision support</strong><p>Model outputs are presented as research signals, not a diagnosis.</p></div></div>
<div className="findingList">{findings.map((f,i)=>{const Icon=f.icon;return <button key={f.name} className={"finding "+(selected===i?"chosen":"")} onClick={()=>setSelected(i)}><div className="findingIcon"><Icon size={17}/></div><div className="findingText"><div><strong>{f.name}</strong><span>{f.level}</span></div><p>{f.note}</p><small>Demo output</small></div><ChevronRight size={15}/></button>})}</div>
<div className="explain"><div className="sectionLabel">SELECTED EVIDENCE</div><div className="evidenceRow"><span className="evidenceDot"/><div><strong>{findings[selected].name}</strong><p>{findings[selected].note}</p></div></div><button className="evidenceBtn"><ScanLine size={15}/> Show evidence on image</button></div>
<div className="confidence"><div className="sectionLabel">MODEL STATE</div><div className="confidenceLine"><span>Analysis completeness</span><strong>Ready</strong></div><div className="bar"><i/></div><div className="confidenceMeta"><span>Preprocessing</span><span>✓ complete</span></div><div className="confidenceMeta"><span>Inference</span><span>✓ complete</span></div><div className="confidenceMeta"><span>Explainability</span><span>✓ available</span></div></div></>}
{panel==="quality"&&<div className="panelPage"><span className="eyebrow">IMAGE QUALITY INTELLIGENCE</span><h2>Image is usable</h2><div className="qualityScore"><strong>94</strong><span>/100</span></div><div className="qualityItem"><span>Exposure</span><b>Acceptable</b></div><div className="qualityItem"><span>Positioning</span><b>Good</b></div><div className="qualityItem"><span>Rotation</span><b>Good</b></div><div className="qualityItem"><span>Motion</span><b>Low</b></div><div className="qualityNote"><AlertTriangle size={16}/><span>Research signal only. Quality thresholds require clinical validation.</span></div></div>}
{panel==="report"&&<div className="panelPage"><span className="eyebrow">RADIS REPORT ASSIST</span><h2>Preliminary report</h2><div className="reportBox"><strong>Findings</strong><p>Demo model signals a possible right lower-zone air-space opacity. Additional upper-zone pattern is flagged for review.</p><strong>Impression</strong><p>Research signals require radiologist review before any clinical interpretation.</p></div><button className="primaryBtn"><FileText size={16}/> Open report editor</button></div>}
<div className="panelFooter"><button className="footerBtn"><MessageSquareText size={15}/> Ask RADIS</button><button className="footerBtn"><Stethoscope size={15}/> Clinician review</button></div></aside>
</section>
<div className="demoControl"><span><Play size={12}/> Demo case active</span><span>Research prototype · simulated AI outputs</span></div>
</main>}