document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-toggle'); const nav=document.querySelector('.main-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'×':'☰';});}
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
});