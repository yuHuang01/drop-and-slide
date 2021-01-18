const navLink = document.getElementsByClassName("nav-link");

const visibleDropDown = function(e){
    document.getElementById(`drop-${e.target.id}`).classList.toggle("visible")
}
for(let i = 0; i < navLink.length; i++){
    navLink[i].addEventListener("mouseenter", visibleDropDown);
    navLink[i].addEventListener("mouseleave", visibleDropDown);
}

/*
    switch(e.target.id){
        case "drop-one":

            break;
        case "drop-two":
            break;
        case "drop-three":
            break;
        case "drop-four":
            break;
        case "drop-five":
            break;
    }
*/