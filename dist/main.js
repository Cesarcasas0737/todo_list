(()=>{"use strict";const t=function(){const t=document.getElementById("main");t.textContent="",t.appendChild(function(){const t=document.createElement("div");return t.classList.add("inbox"),t}())};function e(t){document.querySelectorAll(".button-nav").forEach((t=>{t!==this&&t.classList.remove("active")})),t.classList.add("active")}!function(){const n=document.getElementById("content");n.appendChild(function(){const t=document.createElement("header");t.classList.add("header");const e=document.createElement("h1");return e.classList.add("website-name"),e.textContent="To-Do",t.appendChild(e),t}()),n.appendChild(function(){const n=document.createElement("div");return n.classList.add("main-wrapper"),n.appendChild(function(){const n=document.createElement("nav"),c=document.createElement("div");c.classList.add("deafult-projects"),n.appendChild(c);const d=document.createElement("button");d.classList.add("button-nav"),d.textContent="Inbox",d.addEventListener("click",(n=>{n.target.classList.contains("active")||(e(d),t())}));const a=document.createElement("div");return a.classList.add("users-projects"),n.appendChild(a),c.appendChild(d),n}()),n.appendChild(function(){const t=document.createElement("main");return t.classList.add("main"),t.setAttribute("id","main"),t}()),n}()),n.appendChild(function(){const t=document.createElement("footer");return t.classList.add("footer"),t}()),e(document.querySelector(".button-nav")),t()}()})();