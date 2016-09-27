var button=document.getElementbyId('counter');

button.onclick=function(){
    
    
    var request=new XMLRequest();
    request.onreadystatechange=function(){
        
        if(request.readyState===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
            
    
        var span=getElementbyId('çount');
        span.innerHTML=counter.toString();
        }
        }
    };
    
    request.open('GET','http://smeenakshi1997.imad.hasura-app.io/',true);
    request.send(null);
};