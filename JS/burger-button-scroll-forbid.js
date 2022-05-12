let headerInput = document.querySelector("input#burger-button");
headerInput.addEventListener("click",scrollForbid);

function scrollForbid(){
    if(this.checked){
        document.documentElement.style.overflow="hidden";
        window.scrollTo(0,0);
    }
    if(!this.checked){
        document.documentElement.style.overflow="visible";
    }
}

