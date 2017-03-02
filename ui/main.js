console.log('Loaded!');

// to change the text of main-text div

var element = document.getElementById('main-text');
element.innerHTML = 'Welcome to the WebApp';

//to make the image madi move when clicked

var img = documenn.getElementById('madi');
img.onclick = function(){
    img.style.marginleft='100px';
};