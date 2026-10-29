(function(){var s="/api/enquiry",i=((window.MIKIA||{}).contact||{}).email||"info@mikia.co.nz",t=document.getElementById("enquiry"),r=document.getElementById("status");if(!t)return;try{var u=new URLSearchParams(location.search).get("design");u&&(t.elements.message.value="I would like to talk about this house design: "+u+`

`,t.elements.type.value="Residential subdivision")}catch{}function m(e){var n="Name: "+e.name+`
Email: `+e.email+`
Phone: `+e.phone+`
Project type: `+e.type+`
Site address: `+e.site+`

`+e.message;window.location.href="mailto:"+i+"?subject="+encodeURIComponent("Website enquiry from "+e.name)+"&body="+encodeURIComponent(n),a("Your email app should open with your enquiry ready to send. If it does not, email "+i+".")}function a(e,n){r.textContent=e,r.className="status"+(n?" bad":" ok")}t.addEventListener("submit",function(e){e.preventDefault();var n=t.elements;if(!n.company.value){var l=n.name.value.trim(),c=n.email.value.trim(),d=n.message.value.trim();if(!l||!d||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c)){a("Please add your name, a valid email and a few words about your project.",!0);return}var o={name:l,email:c,phone:n.phone.value.trim(),type:n.type.value,site:n.site.value.trim(),message:d};if(s){a("Sending..."),fetch(s,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).then(function(y){if(y.status===503){m(o);return}if(!y.ok)throw new Error;t.reset(),a("Thank you. We have your enquiry and will be in touch soon.")}).catch(function(){a("Sorry, that did not send. Please email "+i+" or call us.",!0)});return}m(o)}})})();
