(function(){var u="",r=((window.MIKIA||{}).contact||{}).email||"info@mikia.co.nz",t=document.getElementById("enquiry"),l=document.getElementById("status");if(!t)return;try{var m=new URLSearchParams(location.search).get("design");m&&(t.elements.message.value="I would like to talk about this house design: "+m+`

`,t.elements.type.value="Residential subdivision")}catch{}function a(e){return e.replace(/[A-Za-z]/g,function(n){var o=n.charCodeAt(0);return String.fromCodePoint(o<97?120276+o-65:120302+o-97)})}function c(e){var n=a("Name")+": "+e.name+`
`+a("Email")+": "+e.email+`
`+a("Phone")+": "+e.phone+`
`+a("Project type")+": "+e.type+`
`+a("Site address")+": "+e.site+`

`+a("About your project")+`:
`+e.message+`

If you made a house design on the website, please attach the image you downloaded.`;window.location.href="mailto:"+r+"?subject="+encodeURIComponent("Website enquiry from "+e.name)+"&body="+encodeURIComponent(n),i("Your email app is opening with your enquiry filled in. Please press Send in your email app to complete your enquiry. If it does not open, email "+r+".")}function i(e,n){l.textContent=e,l.className="status"+(n?" bad":" ok")}t.addEventListener("submit",function(e){e.preventDefault();var n=t.elements;if(!n.company.value){var o=n.name.value.trim(),d=n.email.value.trim(),y=n.message.value.trim();if(!o||!y||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(d)){i("Please add your name, a valid email and a few words about your project.",!0);return}var s={name:o,email:d,phone:n.phone.value.trim(),type:n.type.value,site:n.site.value.trim(),message:y};if(u){i("Sending..."),fetch(u,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)}).then(function(p){if(p.status===503){c(s);return}if(!p.ok)throw new Error;t.reset(),i("Thank you. We have your enquiry and will be in touch soon.")}).catch(function(){i("Sorry, that did not send. Please email "+r+" or call us.",!0)});return}c(s)}})})();
