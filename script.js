var icon = document.querySelector("#ic");
var menupage = document.querySelector("#menupage");
var flag = 0;

icon.addEventListener("click", function() {
    if(flag == 0) {
        menupage.style.width = "100vw";
        flag = 1;
    } else {
        menupage.style.width = "0vw";
        flag = 0;
    }
});