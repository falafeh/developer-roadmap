import"./hoisted.B2GukDAP.js";import"./hoisted.CY1zknO3.js";import"./navigation.BppU7e5P.js";import"./index.es.B1RiJbf6.js";import"./jwt.DjKu0S3o.js";import"./resource-progress.CaCjaD4j.js";import"./http.BfNEAXh_.js";import"./roadmap.SDi3zlny.js";import"./index.Bhz7cRIx.js";import"./index.CEvxOxeV.js";import"./page.C3ddTGlS.js";import"./popup.CdCAhVM2.js";import"./dom.DTPLKm7E.js";import"./browser.z0e42_13.js";class r{constructor(){this.topicSearchId="search-topic-input",this.onDOMLoaded=this.onDOMLoaded.bind(this),this.init=this.init.bind(this),this.filterTopicNodes=this.filterTopicNodes.bind(this)}get topicSearchEl(){return document.getElementById(this.topicSearchId)}filterTopicNodes(i){const e=i.target.value.trim().toLowerCase();if(!e){document.querySelectorAll("[data-topic]").forEach(t=>t.classList.remove("hidden"));return}document.querySelectorAll("[data-topic]").forEach(t=>t.classList.add("hidden")),document.querySelectorAll(`[data-topic*="${e}"]`).forEach(t=>t.classList.remove("hidden"))}onDOMLoaded(){this.topicSearchEl&&this.topicSearchEl.addEventListener("keyup",this.filterTopicNodes)}init(){window.addEventListener("DOMContentLoaded",this.onDOMLoaded)}}const c=new r;c.init();document.querySelectorAll("[faq-question]").forEach(o=>{o.addEventListener("click",()=>{document.querySelectorAll("[faq-answer]").forEach(e=>{e.classList.add("hidden")});const i=o.nextElementSibling;i&&i.classList.remove("hidden")})});
