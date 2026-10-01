/* Enquiry form.
   Set FORM_ENDPOINT to a form service URL (for example a Formspree endpoint) to send enquiries without an email app.
   While it is empty, the form opens the visitor's email app with the enquiry filled in. */
(function(){
  var FORM_ENDPOINT='';
  var EMAIL='info@mikia.co.nz';
  var form=document.getElementById('enquiry'),status=document.getElementById('status');
  if(!form)return;
  function say(msg,bad){status.textContent=msg;status.className='status'+(bad?' bad':' ok');}
  form.addEventListener('submit',function(e){
    e.preventDefault();
    var f=form.elements;
    if(f.company.value){return;}
    var name=f.name.value.trim(),email=f.email.value.trim(),msg=f.message.value.trim();
    if(!name||!msg||!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)){say('Please add your name, a valid email and a few words about your project.',true);return;}
    var data={name:name,email:email,phone:f.phone.value.trim(),type:f.type.value,site:f.site.value.trim(),message:msg};
    if(FORM_ENDPOINT){
      say('Sending...');
      fetch(FORM_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify(data)})
        .then(function(r){if(!r.ok)throw new Error();form.reset();say('Thank you. We have your enquiry and will be in touch soon.');})
        .catch(function(){say('Sorry, that did not send. Please email '+EMAIL+' or call us.',true);});
      return;
    }
    var body='Name: '+data.name+'\nEmail: '+data.email+'\nPhone: '+data.phone+'\nProject type: '+data.type+'\nSite address: '+data.site+'\n\n'+data.message;
    window.location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Website enquiry from '+data.name)+'&body='+encodeURIComponent(body);
    say('Your email app should open with your enquiry ready to send. If it does not, email '+EMAIL+'.');
  });
})();
