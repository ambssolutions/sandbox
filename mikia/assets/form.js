(function(){var r="",i=((window.MIKIA||{}).contact||{}).email||"info@mikia.co.nz",t=document.getElementById("enquiry"),s=document.getElementById("status");if(!t)return;try{var u=new URLSearchParams(location.search).get("design");u&&(t.elements.message.value="I would like to talk about this house design: "+u+`

`,t.elements.type.value="Residential subdivision")}catch{}function l(e){var n="Name: "+e.name+`
Email: `+e.email+`
Phone: `+e.phone+`
Project type: `+e.type+`
Site address: `+e.site+`

About your project:
`+e.message;window.location.href="mailto:"+i+"?subject="+encodeURIComponent("Website enquiry from "+e.name)+"&body="+encodeURIComponent(n),a("Your email app is opening with your enquiry filled in. Please press Send in your email app to complete your enquiry. If it does not open, email "+i+".")}function a(e,n){s.textContent=e,s.className="status"+(n?" bad":" ok")}t.addEventListener("submit",function(e){e.preventDefault();var n=t.elements;if(!n.company.value){var m=n.name.value.trim(),c=n.email.value.trim(),d=n.message.value.trim();if(!m||!d||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(c)){a("Please add your name, a valid email and a few words about your project.",!0);return}var o={name:m,email:c,phone:n.phone.value.trim(),type:n.type.value,site:n.site.value.trim(),message:d};if(r){a("Sending..."),fetch(r,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(o)}).then(function(y){if(y.status===503){l(o);return}if(!y.ok)throw new Error;t.reset(),a("Thank you. We have your enquiry and will be in touch soon.")}).catch(function(){a("Sorry, that did not send. Please email "+i+" or call us.",!0)});return}l(o)}})})();
