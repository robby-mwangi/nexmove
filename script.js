(function(){
  var WA="254728549825", MAIL="pndonye08@gmail.com";
  var f=document.getElementById("quote"), err=document.getElementById("err");
  document.getElementById("yr").textContent=new Date().getFullYear();
  function val(id){return document.getElementById(id).value.trim();}
  function build(){
    return "Quote request - NexMove Logistics\n"+
      "Name: "+val("name")+"\nPhone: "+val("phone")+"\nPickup: "+val("from")+"\nDelivery: "+val("to")+
      "\nService: "+val("type")+"\nCargo/weight: "+val("weight")+(val("notes")?"\nNotes: "+val("notes"):"");
  }
  function ok(){
    var miss=[["name","your name"],["phone","your phone number"],["from","the pickup location"],["to","the delivery location"]]
      .filter(function(p){return !val(p[0]);});
    if(miss.length){err.textContent="Please add "+miss[0][1]+".";document.getElementById(miss[0][0]).focus();return false;}
    err.textContent="";return true;
  }
  f.addEventListener("submit",function(e){
    e.preventDefault();
    if(!ok())return;
    window.open("https://wa.me/"+WA+"?text="+encodeURIComponent(build()),"_blank","noopener");
  });
  document.getElementById("mailLink").addEventListener("click",function(e){
    e.preventDefault();
    if(!ok())return;
    window.location.href="mailto:"+MAIL+"?subject="+encodeURIComponent("Quote request")+"&body="+encodeURIComponent(build());
  });
})();
