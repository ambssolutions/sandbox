(function(){var s="",i=((window.MIKIA||{}).contact||{}).email||"info@mikia.co.nz",n=document.getElementById("enquiry"),r=document.getElementById("status");if(!n)return;try{var u=new URLSearchParams(location.search).get("design");u&&(n.elements.message.value="I would like to talk about this house design: "+u+`

`,n.elements.type.value="Residential subdivision")}catch{}function a(o,e){r.textContent=o,r.className="status"+(e?" bad":" ok")}n.addEventListener("submit",function(o){o.preventDefault();var e=n.elements;if(!e.company.value){var m=e.name.value.trim(),l=e.email.value.trim(),d=e.message.value.trim();if(!m||!d||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(l)){a("Please add your name, a valid email and a few words about your project.",!0);return}var t={name:m,email:l,phone:e.phone.value.trim(),type:e.type.value,site:e.site.value.trim(),message:d};if(s){a("Sending..."),fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(t)}).then(function(y){if(!y.ok)throw new Error;n.reset(),a("Thank you. We have your enquiry and will be in touch soon.")}).catch(function(){a("Sorry, that did not send. Please email "+i+" or call us.",!0)});return}var c="Name: "+t.name+`
Email: `+t.email+`
Phone: `+t.phone+`
Project type: `+t.type+`
Site address: `+t.site+`

`+t.message;window.location.href="mailto:"+i+"?subject="+encodeURIComponent("Website enquiry from "+t.name)+"&body="+encodeURIComponent(c),a("Your email app should open with your enquiry ready to send. If it does not, email "+i+".")}})})();
