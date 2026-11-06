import"./hoisted.B_qmD9Sr.js";function s(){const e=document.getElementById("export-quote-form"),o=document.getElementById("form-feedback"),n=document.getElementById("submit-inquiry-btn"),t=document.getElementById("btn-text");!e||!o||!n||!t||e.addEventListener("submit",a=>{a.preventDefault(),n.disabled=!0;const i=t.textContent;t.textContent="TRANSMITTING TO TRADE DESK...",setTimeout(()=>{const r=new FormData(e),d=r.get("firstName"),m=r.get("companyName"),l="DEMO-"+Math.floor(1e5+Math.random()*9e5);o.className="p-5 rounded-2xl text-sm bg-emerald-50 border border-emerald-200 text-emerald-900 block space-y-2",o.innerHTML=`
          <div class="font-bold text-base text-emerald-950 flex items-center space-x-2">
            <svg class="w-5 h-5 text-emerald-600 inline-block flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
            <span>Demonstration Inquiry Logged</span>
          </div>
          <p class="text-emerald-800">
            Thank you, ${d} (${m}). Your simulated quote reference is <strong>${l}</strong>.
          </p>
          <p class="text-xs text-emerald-700">
            This inquiry was processed by the Demo Coffee Exporters prototype platform. In a live production environment, this triggers immediate notification to the Kampala export desk.
          </p>
        `,e.reset(),n.disabled=!1,t.textContent=i},750)})}s();document.addEventListener("astro:page-load",s);
