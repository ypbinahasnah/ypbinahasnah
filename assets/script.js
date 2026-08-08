
let i=0;
const slides=document.querySelectorAll('.slide');
const dots=document.querySelectorAll('.dot');
function show(n){if(!slides.length)return;i=(n+slides.length)%slides.length;slides.forEach((s,k)=>s.style.display=k===i?'flex':'none');dots.forEach((d,k)=>d.classList.toggle('active',k===i))}
show(0);setInterval(()=>show(i+1),5000);
