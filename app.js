const menu=document.querySelector(".menu"),nav=document.querySelector(".topbar nav");
menu?.addEventListener("click",()=>nav.classList.toggle("open"));
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
document.querySelector(".booking-strip button")?.addEventListener("click",()=>alert("Availability search will connect to your booking system when it is added."));