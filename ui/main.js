console.log('Loaded!');

var element=document.getElementById('main text');

element.innerHTML='New Value';
var marginLeft=0;
 var img=document.getElementById('madi');
 img.onclick=function()
{ 
    marginLeft=marginLeft+5; 
    var interval=setInterval(moveRight,50);
    img.style.marginLeft=marginLeft+'px';
}