(function(){var u="",r=((window.MIKIA||{}).contact||{}).email||"info@mikia.co.nz",t=document.getElementById("enquiry"),l=document.getElementById("status");if(!t)return;try{var m=new URLSearchParams(location.search).get("design");m&&(t.elements.message.value="I would like to talk about this house design: "+m+`

`,t.elements.type.value="Residential subdivision")}catch{}function o(e){return e.replace(/[A-Za-z]/g,function(n){var a=n.charCodeAt(0);return String.fromCodePoint(a<97?120276+a-65:120302+a-97)})}function c(e){var n=o("Name")+": "+e.name+`
`+o("Email")+": "+e.email+`
`+o("Phone")+": "+e.phone+`
`+o("Project type")+": "+e.type+`
`+o("Site address")+": "+e.site+`

`+o("About your project")+`:
`+e.message;window.location.href="mailto:"+r+"?subject="+encodeURIComponent("Website enquiry from "+e.name)+"&body="+encodeURIComponent(n),i("Your email app is opening with your enquiry filled in. Please press Send in your email app to complete your enquiry. If it does not open, email "+r+".")}function i(e,n){l.textContent=e,l.className="status"+(n?" bad":" ok")}t.addEventListener("submit",function(e){e.preventDefault();var n=t.elements;if(!n.company.value){var a=n.name.value.trim(),d=n.email.value.trim(),p=n.message.value.trim();if(!a||!p||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d)){i("Please add your name, a valid email and a few words about your project.",!0);return}var s={name:a,email:d,phone:n.phone.value.trim(),type:n.type.value,site:n.site.value.trim(),message:p};if(u){i("Sending..."),fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)}).then(function(y){if(y.status===503){c(s);return}if(!y.ok)throw new Error;t.reset(),i("Thank you. We have your enquiry and will be in touch soon.")}).catch(function(){i("Sorry, that did not send. Please email "+r+" or call us.",!0)});return}c(s)}})})();
