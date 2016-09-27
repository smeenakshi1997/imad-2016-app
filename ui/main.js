var button=document.getElementById('counter');
var counter=0;
button.onclick=function(){
    
    
    var request=new XMLRequest();
    request.onreadystatechange=function(){
        
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                counter=counter+1;
               var span=document.getElementById('çount');
              span.innerHTML=counter.toString();
        }
        }
    };
    
    request.open('GET','http://smeenakshi1997.imad.hasura-app.io/',true);
    request.send(null);
};