// get all values here
const button = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header-nav");
const disclosureBtn = document.querySelector(".sel-disclosure");
const itemsContainer = document.querySelector(".sel-itemsContainer");
const searchBtn = document.getElementById("searchbtn");
const search = document.getElementById("search");
const classSearch = document.querySelector(".search");
const searchClose = document.querySelector("button.search-close");
const msg = document.querySelector(".msg");
const body = document.querySelector("body");


// navbar toggle
button.addEventListener("click", () => {

    // if(headerNav.classList.contains("show-nav")){
    //     headerNav.classList.remove("show-nav");
    // }else{
    //     headerNav.classList.add("show-nav");
    // }

    headerNav.classList.toggle("show-nav");
});



// selbtn button toggle 
disclosureBtn.addEventListener("click", function(){

    itemsContainer.classList.toggle("showSet");
});


// search toggle here now

searchBtn.addEventListener("click", () => {
    search.classList.toggle("showSearch");
});


// search bar close here 
searchClose.addEventListener("click", () => {
   if(classSearch.classList.contains("showSearch")){
        classSearch.classList.remove("showSearch");
   }
});

window.onscroll = (e) => {
    const value = e.target.value;
    
    msg.innerHTML = `${value}`;
}

console.log(body.onscroll);