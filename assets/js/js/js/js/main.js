document.addEventListener('DOMContentLoaded',()=>{
 const btn=document.querySelector('.menu-toggle'); const nav=document.querySelector('.main-nav');
 if(btn&&nav){btn.addEventListener('click',()=>{const open=nav.classList.toggle('open');btn.setAttribute('aria-expanded',String(open));btn.textContent=open?'×':'☰';});}
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());

 const params=new URLSearchParams(window.location.search);
 const estado=params.get('estado');
 const status=document.getElementById('form-status');
 if(status&&estado){
   if(estado==='enviado'){
     status.textContent='Gracias. Hemos recibido tu solicitud correctamente.';
     status.classList.add('show','success');
   }else if(estado==='error'){
     status.textContent='No se ha podido enviar el formulario. Puedes escribir directamente a info@clinicascherba.es o llamar al 922 209 262.';
     status.classList.add('show','error');
   }
 }
});
