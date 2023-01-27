let icons = document.getElementsByClassName("icons")[0];
let startMenu = document.getElementsByClassName("startmenu")[0]
icons.addEventListener("click", function(){
    
    if(startMenu.style.bottom == '50px'){
        startMenu.style.bottom = '-650px'
    }
    else{
        startMenu.style.bottom = '50px';
    }
})