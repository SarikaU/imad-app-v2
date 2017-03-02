console.log('Loaded!');

// to change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'Welcome to the WebApp';

//to make the image madi move when clicked

var img = document.getElementById('madi');
var marginLeft=0;

function moveRight(){
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
    
}

img.onclick = function(){
    var interval=setInterval(moveRight,100); // to move madi gradually,interval is set
  
};