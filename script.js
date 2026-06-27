const areaLeads = {"Area 1": "Jerrod / Nicholle", "Area 2": "Michael / Bobby", "Area 3": "John / Megan", "Area 4": "Pat / Sushant"};
let schools = [
  {
    "name": "Todd Beamer",
    "code": "TBHS",
    "area": "Area 1",
    "total": 47,
    "done": 45,
    "damaged": 2,
    "interns": 4
  },
  {
    "name": "FW Public Academy",
    "code": "FWPA",
    "area": "Area 1",
    "total": 14,
    "done": 12,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Illahee",
    "code": "ILH",
    "area": "Area 1",
    "total": 36,
    "done": 26,
    "damaged": 4,
    "interns": 3
  },
  {
    "name": "Sequoyah",
    "code": "SEQ",
    "area": "Area 1",
    "total": 37,
    "done": 25,
    "damaged": 3,
    "interns": 3
  },
  {
    "name": "Enterprise",
    "code": "ENT",
    "area": "Area 1",
    "total": 21,
    "done": 12,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Lakeland",
    "code": "LKL",
    "area": "Area 1",
    "total": 21,
    "done": 10,
    "damaged": 5,
    "interns": 2
  },
  {
    "name": "Panther Lake",
    "code": "PNL",
    "area": "Area 1",
    "total": 19,
    "done": 7,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Rainier View",
    "code": "RVW",
    "area": "Area 1",
    "total": 22,
    "done": 6,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Sherwood Forest",
    "code": "SHF",
    "area": "Area 1",
    "total": 22,
    "done": 4,
    "damaged": 0,
    "interns": 1
  },
  {
    "name": "Decatur",
    "code": "DHS",
    "area": "Area 2",
    "total": 59,
    "done": 50,
    "damaged": 7,
    "interns": 5
  },
  {
    "name": "TAF @ Saghalie",
    "code": "TAF/SAG",
    "area": "Area 2",
    "total": 26,
    "done": 19,
    "damaged": 3,
    "interns": 3
  },
  {
    "name": "Truman Campus",
    "code": "TRU",
    "area": "Area 2",
    "total": 15,
    "done": 10,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Lakota",
    "code": "LKA",
    "area": "Area 2",
    "total": 36,
    "done": 21,
    "damaged": 4,
    "interns": 3
  },
  {
    "name": "Olympic View",
    "code": "OLV",
    "area": "Area 2",
    "total": 28,
    "done": 23,
    "damaged": 2,
    "interns": 3
  },
  {
    "name": "Adelaide",
    "code": "ADE",
    "area": "Area 2",
    "total": 22,
    "done": 13,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Brigadoon",
    "code": "BRG",
    "area": "Area 2",
    "total": 19,
    "done": 9,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Green Gables",
    "code": "GGB",
    "area": "Area 2",
    "total": 17,
    "done": 6,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Silver Lake",
    "code": "SLV",
    "area": "Area 2",
    "total": 22,
    "done": 5,
    "damaged": 0,
    "interns": 1
  },
  {
    "name": "Twin Lakes",
    "code": "TWL",
    "area": "Area 2",
    "total": 20,
    "done": 4,
    "damaged": 1,
    "interns": 1
  },
  {
    "name": "Federal Way",
    "code": "FWHS",
    "area": "Area 3",
    "total": 66,
    "done": 55,
    "damaged": 8,
    "interns": 5
  },
  {
    "name": "Sacajawea",
    "code": "SAC",
    "area": "Area 3",
    "total": 39,
    "done": 28,
    "damaged": 3,
    "interns": 3
  },
  {
    "name": "Nautilus",
    "code": "NAU",
    "area": "Area 3",
    "total": 31,
    "done": 21,
    "damaged": 3,
    "interns": 3
  },
  {
    "name": "Woodmont",
    "code": "WDM",
    "area": "Area 3",
    "total": 27,
    "done": 16,
    "damaged": 4,
    "interns": 3
  },
  {
    "name": "Lake Grove",
    "code": "LGV",
    "area": "Area 3",
    "total": 21,
    "done": 17,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Mark Twain",
    "code": "MTW",
    "area": "Area 3",
    "total": 32,
    "done": 15,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Mirror Lake",
    "code": "MIR",
    "area": "Area 3",
    "total": 26,
    "done": 10,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Wildwood",
    "code": "WIL",
    "area": "Area 3",
    "total": 27,
    "done": 8,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Thomas Jefferson",
    "code": "TJHS",
    "area": "Area 4",
    "total": 80,
    "done": 68,
    "damaged": 9,
    "interns": 5
  },
  {
    "name": "Evergreen",
    "code": "EVG",
    "area": "Area 4",
    "total": 32,
    "done": 25,
    "damaged": 6,
    "interns": 3
  },
  {
    "name": "Kilo",
    "code": "KLO",
    "area": "Area 4",
    "total": 28,
    "done": 17,
    "damaged": 3,
    "interns": 3
  },
  {
    "name": "Camelot",
    "code": "CML",
    "area": "Area 4",
    "total": 16,
    "done": 14,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Lake Dolloff",
    "code": "LDF",
    "area": "Area 4",
    "total": 26,
    "done": 13,
    "damaged": 3,
    "interns": 2
  },
  {
    "name": "Meredith Hill",
    "code": "MHL",
    "area": "Area 4",
    "total": 23,
    "done": 9,
    "damaged": 2,
    "interns": 2
  },
  {
    "name": "Star Lake",
    "code": "STL",
    "area": "Area 4",
    "total": 19,
    "done": 7,
    "damaged": 4,
    "interns": 2
  },
  {
    "name": "Sunnycrest",
    "code": "SUN",
    "area": "Area 4",
    "total": 35,
    "done": 11,
    "damaged": 1,
    "interns": 2
  },
  {
    "name": "Valhalla",
    "code": "VLH",
    "area": "Area 4",
    "total": 28,
    "done": 5,
    "damaged": 1,
    "interns": 1
  }
];
let updates = [
  { school:"Evergreen", code:"EVG", area:"Area 4", type:"Damage Report", room:"Room 118", text:"Asset 567034 is damaged. Screen issue noted and device needs swap.", user:"Jayden", date:"Jun 25, 2026", time:"9:42 AM" },
  { school:"Olympic View", code:"OLV", area:"Area 2", type:"Room Completed", room:"Library", text:"Two carts fully cleaned and powerwashed. One missing charger found.", user:"Team A", date:"Jun 25, 2026", time:"10:18 AM" },
  { school:"Star Lake", code:"STL", area:"Area 4", type:"Completed COW", room:"Media Center", text:"COW completed and ready.", user:"Team B", date:"Jun 25, 2026", time:"11:05 AM" }
];

let selectedSchoolName = null;
let pendingAction = null;
const areas = ["All Areas","Area 1","Area 2","Area 3","Area 4"];
const updateTypes = ["All Updates","Completed COW","Damaged Device","Room Completed","Damage Report","General Note","Count Adjustment"];
const pct = s => s.total ? Math.round((s.done / s.total) * 100) : 0;
const sortByProgress = arr => [...arr].sort((a,b) => pct(b)-pct(a) || a.name.localeCompare(b.name));

function status(s){ const p=pct(s); if(p>=85)return["Almost Complete","good","var(--green)"]; if(p>=45)return["In Progress","mid","var(--yellow)"]; return["Needs Support","bad","var(--red)"]; }
function fillSelect(select, options){ select.innerHTML = options.map(o => `<option value="${o}">${o}</option>`).join(""); }
function matchesSearch(s,q){ q=(q||"").toLowerCase(); return s.name.toLowerCase().includes(q) || s.code.toLowerCase().includes(q); }
function filteredSchools(areaValue, searchValue=""){ return sortByProgress(schools.filter(s => (areaValue==="All Areas" || s.area===areaValue) && matchesSearch(s, searchValue))); }
function labelName(s){ return `${s.name} <span class="code-pill">${s.code}</span>`; }

function renderDashboard(){
  const data = filteredSchools(globalAreaFilter.value, dashboardSearch.value);
  const totalSchools=data.length, completed=data.filter(s=>pct(s)>=100).length;
  const avg=totalSchools?Math.round(data.reduce((a,s)=>a+pct(s),0)/totalSchools):0;
  const cowsDone=data.reduce((a,s)=>a+s.done,0), cowsTotal=data.reduce((a,s)=>a+s.total,0), damaged=data.reduce((a,s)=>a+s.damaged,0);
  metricSchools.textContent=totalSchools; metricCompleted.textContent=completed; metricProgress.textContent=avg+"%"; metricCows.textContent=`${cowsDone} / ${cowsTotal}`; metricDamaged.textContent=damaged;
  schoolRows.innerHTML = data.map(s => { const p=pct(s), [label,cls,color]=status(s); return `<div class="row"><div><div class="school-name">${labelName(s)}</div><div class="small">${s.area} · ITS: ${areaLeads[s.area]}</div></div><strong>${p}%</strong><div class="progress"><div style="width:${p}%;background:${color}"></div></div><div>${s.done} / ${s.total}</div><div>${s.damaged}</div><span class="badge ${cls}">${label}</span></div>`; }).join("");
  const almost=data.filter(s=>pct(s)>=85&&pct(s)<100).length, support=data.filter(s=>pct(s)<40).length, behind=[...data].sort((a,b)=>pct(a)-pct(b))[0];
  insights.innerHTML = `<div class="insight"><strong>${almost} school(s) almost complete</strong><br><span>Consider reallocating extra interns soon.</span></div><div class="insight"><strong>${support} school(s) need support</strong><br><span>${behind ? behind.name + " (" + behind.code + ")" : "No school"} is currently lowest progress.</span></div><div class="insight"><strong>Area selected</strong><br><span>${globalAreaFilter.value==="All Areas" ? "District-wide view" : globalAreaFilter.value + " · ITS: " + areaLeads[globalAreaFilter.value]}</span></div>`;
}

function renderSchoolList(){
  const data = filteredSchools(detailAreaFilter.value, detailSearch.value);
  detailSchoolList.innerHTML = data.map(s => { const active=s.name===selectedSchoolName?"active":"", [label,cls]=status(s); return `<div class="school-item ${active}" data-school="${s.name}"><div class="school-name">${labelName(s)}</div><div class="small">${s.area} · ${pct(s)}% · ${s.done}/${s.total} COWs</div><span class="badge ${cls}">${label}</span></div>`; }).join("");
  document.querySelectorAll(".school-item").forEach(item => item.addEventListener("click", () => { selectedSchoolName=item.dataset.school; renderSchoolList(); renderDetailPanel(); }));
}
function renderAreaOnly(){
  const area=detailAreaFilter.value, data=filteredSchools(area, detailSearch.value);
  const avg=data.length?Math.round(data.reduce((a,s)=>a+pct(s),0)/data.length):0, cowsDone=data.reduce((a,s)=>a+s.done,0), cowsTotal=data.reduce((a,s)=>a+s.total,0), damaged=data.reduce((a,s)=>a+s.damaged,0);
  areaTitle.textContent = area==="All Areas" ? "All Areas Snapshot" : `${area} Snapshot`; areaMeta.textContent = area==="All Areas" ? "District-wide area view" : `ITS: ${areaLeads[area]}`;
  areaSchoolsCount.textContent=data.length; areaAvgProgress.textContent=avg+"%"; areaCows.textContent=`${cowsDone} / ${cowsTotal}`; areaDamaged.textContent=damaged;
  areaSnapshot.innerHTML = data.map(x => { const [label,cls,color]=status(x); return `<div class="snapshot-row"><span>${x.name} <span class="code-pill">${x.code}</span></span><strong>${pct(x)}%</strong><div class="progress"><div style="width:${pct(x)}%;background:${color}"></div></div></div>`; }).join("");
}
function renderSchoolOnly(){
  const s=schools.find(x=>x.name===selectedSchoolName); if(!s) return clearSelectedSchool();
  detailName.innerHTML=`${s.name} <span class="code-pill">${s.code}</span>`; detailMeta.textContent=`${s.area} · ITS: ${areaLeads[s.area]} · ${s.total} COWs`;
  detailProgress.textContent=pct(s)+"%"; detailCows.textContent=`${s.done} / ${s.total}`; detailDamaged.textContent=s.damaged; detailInterns.textContent=s.interns; detailBar.style.width=pct(s)+"%";
  const schoolUpdates=updates.filter(n=>n.school===selectedSchoolName);
  detailNotes.innerHTML = schoolUpdates.length ? schoolUpdates.map(renderUpdateCard).join("") : `<div class="empty-note">No notes have been added for this school yet.</div>`;
  liveUpdates.innerHTML = `<div class="note-card"><strong>Current status</strong><div>${s.done} of ${s.total} COWs completed. ${s.total-s.done} COWs remaining.</div></div><div class="note-card"><strong>Damage update</strong><div>${s.damaged} damaged devices currently reported.</div></div>`;
}
function renderDetailPanel(){ if(selectedSchoolName){ areaOnlyView.classList.add("hidden"); schoolOnlyView.classList.remove("hidden"); renderSchoolOnly(); } else { schoolOnlyView.classList.add("hidden"); areaOnlyView.classList.remove("hidden"); renderAreaOnly(); } }
function clearSelectedSchool(){ selectedSchoolName=null; renderSchoolList(); renderDetailPanel(); }

function renderUpdateSchoolOptions(){
  const opts=filteredSchools(updateArea.value).map(s=>s.name);
  updateSchool.innerHTML=opts.map(o=>`<option value="${o}">${o} (${schools.find(s=>s.name===o).code})</option>`).join("");
  updateMobileStats();
}
function updateMobileStats(){ const s=schools.find(x=>x.name===updateSchool.value)||filteredSchools(updateArea.value)[0]; if(!s)return; updateSchool.value=s.name; updateCows.textContent=`${s.done} / ${s.total}`; updateDamaged.textContent=s.damaged; }

function openConfirm(action){
  const s=schools.find(x=>x.name===updateSchool.value); if(!s)return;
  const map={cowPlus:["Completed COW","+1 completed COW",1,"done"],cowMinus:["Count Adjustment","-1 completed COW",-1,"done"],damagePlus:["Damaged Device","+1 damaged device",1,"damaged"],damageMinus:["Count Adjustment","-1 damaged device",-1,"damaged"]};
  pendingAction={type:map[action][0], label:map[action][1], amount:map[action][2], field:map[action][3], school:s};
  confirmText.innerHTML = `Apply <strong>${pendingAction.label}</strong> to <strong>${s.name} (${s.code})</strong>?`;
  confirmRoom.value=""; confirmNote.value="";
  confirmOverlay.classList.remove("hidden");
  setTimeout(()=>confirmRoom.focus(),100);
}
function closeConfirm(){ confirmOverlay.classList.add("hidden"); pendingAction=null; }
function confirmCountUpdate(){
  if(!pendingAction)return;
  const s=pendingAction.school;
  s[pendingAction.field]=Math.max(0, s[pendingAction.field]+pendingAction.amount);
  if(pendingAction.field==="done") s[pendingAction.field]=Math.min(s[pendingAction.field], s.total);
  const room=confirmRoom.value.trim() || "Not specified";
  const text=confirmNote.value.trim() || pendingAction.label;
  addUpdate(s, pendingAction.type, room, text);
  selectedSchoolName=s.name; updateMobileStats(); renderAll(); closeConfirm(); showSuccessToast();
}

function addUpdate(s,type,room,text){
  const now=new Date();
  updates.unshift({school:s.name, code:s.code, area:s.area, type, room, text, user:"Jayden", date:now.toLocaleDateString([],{month:"short",day:"numeric",year:"numeric"}), time:now.toLocaleTimeString([],{hour:"numeric",minute:"2-digit"})});
}
function saveManualNote(){
  const s=schools.find(x=>x.name===updateSchool.value); const text=noteBox.value.trim();
  if(!s || !text){ saveMessage.textContent="Add a note before saving."; setTimeout(()=>saveMessage.textContent="",1800); return; }
  addUpdate(s, manualNoteType.value, manualRoom.value.trim() || "Not specified", text);
  selectedSchoolName=s.name; noteBox.value=""; manualRoom.value=""; saveMessage.textContent="Saved with date and time."; setTimeout(()=>saveMessage.textContent="",1800); renderAll(); showSuccessToast();
}

function renderUpdateCard(n){ return `<div class="note-card"><strong>${n.school} <span class="code-pill">${n.code}</span></strong><div><span class="type-pill">${n.type}</span><span class="room-pill">${n.room}</span></div><div>${n.text}</div><div class="note-meta">${n.area} · ${n.user} · ${n.date} · ${n.time}</div></div>`; }
function updateMatchesSummary(n){
  const q=summarySearch.value.toLowerCase();
  const typeOk=summaryTypeFilter.value==="All Updates" || n.type===summaryTypeFilter.value;
  return (summaryAreaFilter.value==="All Areas" || n.area===summaryAreaFilter.value) && (summarySchoolFilter.value==="All Schools" || n.school===summarySchoolFilter.value) && typeOk && (n.school.toLowerCase().includes(q) || n.code.toLowerCase().includes(q) || n.room.toLowerCase().includes(q) || n.text.toLowerCase().includes(q));
}
function renderSummaryControls(){
  const opts=["All Schools",...filteredSchools(summaryAreaFilter.value, summarySearch.value).map(s=>s.name)];
  const current=summarySchoolFilter.value;
  summarySchoolFilter.innerHTML=opts.map(o=>`<option value="${o}">${o==="All Schools"?o:o+" ("+schools.find(s=>s.name===o).code+")"}</option>`).join("");
  if(opts.includes(current))summarySchoolFilter.value=current;
}
function renderSummary(){
  renderSummaryControls();
  let data=filteredSchools(summaryAreaFilter.value, summarySearch.value);
  if(summarySchoolFilter.value && summarySchoolFilter.value!=="All Schools") data=data.filter(s=>s.name===summarySchoolFilter.value);
  const visited=data.filter(s=>s.done>0).length, completed=data.filter(s=>pct(s)>=100).length, cowsDone=data.reduce((a,s)=>a+s.done,0), cowsTotal=data.reduce((a,s)=>a+s.total,0), damaged=data.reduce((a,s)=>a+s.damaged,0), avg=data.length?Math.round(data.reduce((a,s)=>a+pct(s),0)/data.length):0, lowest=[...data].sort((a,b)=>pct(a)-pct(b)).slice(0,3);
  summaryContent.innerHTML=`<strong>${summarySchoolFilter.value==="All Schools"?"Summary":summarySchoolFilter.value+" Summary"}</strong><br>Area view: ${summaryAreaFilter.value}<br>Schools shown: ${data.length}<br>Schools visited: ${visited}<br>COWs completed: ${cowsDone} / ${cowsTotal}<br>Average progress: ${avg}%<br>Damaged devices found: ${damaged}<br>Schools completed: ${completed}<br><br><strong>Top needs</strong><br>${lowest.map(s=>`${s.name} (${s.code}): ${pct(s)}% complete, ${s.total-s.done} COWs remaining`).join("<br>")||"No matching schools."}<br><br><strong>Recommended action</strong><br>Move interns away from schools above 85% completion and prioritize the lowest-progress sites.`;
  const visible=updates.filter(updateMatchesSummary);
  summaryNotes.innerHTML=visible.length?visible.map(renderUpdateCard).join(""):`<div class="empty-note">No updates match the current filters.</div>`;
}

function showSuccessToast(){ successToast.classList.remove("show"); void successToast.offsetWidth; successToast.classList.add("show"); }
function renderAll(){ renderDashboard(); renderSchoolList(); renderDetailPanel(); renderSummary(); }
function init(){
  fillSelect(globalAreaFilter,areas); fillSelect(detailAreaFilter,areas); fillSelect(updateArea,areas); fillSelect(summaryAreaFilter,areas); fillSelect(summaryTypeFilter,updateTypes);
  detailAreaFilter.value="Area 4"; updateArea.value="Area 4";
  globalAreaFilter.addEventListener("change",renderDashboard); dashboardSearch.addEventListener("input",renderDashboard);
  detailAreaFilter.addEventListener("change",()=>{selectedSchoolName=null;renderSchoolList();renderDetailPanel();}); detailSearch.addEventListener("input",()=>{selectedSchoolName=null;renderSchoolList();renderDetailPanel();});
  clearSchoolBtn.addEventListener("click",clearSelectedSchool); deselectFromDetail.addEventListener("click",clearSelectedSchool);
  updateArea.addEventListener("change",renderUpdateSchoolOptions); updateSchool.addEventListener("change",updateMobileStats); saveUpdate.addEventListener("click",saveManualNote);
  document.querySelectorAll("[data-action]").forEach(btn=>btn.addEventListener("click",()=>openConfirm(btn.dataset.action)));
  cancelConfirm.addEventListener("click",closeConfirm); confirmUpdate.addEventListener("click",confirmCountUpdate); confirmOverlay.addEventListener("click",(e)=>{ if(e.target===confirmOverlay)closeConfirm(); });
  summaryAreaFilter.addEventListener("change",renderSummary); summarySchoolFilter.addEventListener("change",renderSummary); summaryTypeFilter.addEventListener("change",renderSummary); summarySearch.addEventListener("input",renderSummary); copySummary.addEventListener("click",()=>alert("Summary copied in the real version."));
  document.querySelectorAll("nav button").forEach(btn=>btn.addEventListener("click",()=>{ document.querySelectorAll("nav button").forEach(b=>b.classList.remove("active")); document.querySelectorAll(".view").forEach(v=>v.classList.remove("active-view")); btn.classList.add("active"); document.getElementById(btn.dataset.view).classList.add("active-view"); pageTitle.textContent=btn.textContent; }));
  renderDashboard(); renderSchoolList(); renderDetailPanel(); renderUpdateSchoolOptions(); renderSummary();
}
init();