const tabsBtns =  document.querySelectorAll(".tabs-nav button"); 
const tabsitems = document.querySelectorAll(".tabs-item");

function hideTabs(){
    tabsitems.forEach(item => item.classList.add("hide"));
    tabsBtns.forEach(item => item.classList.remove("active"));
}

function showTab(index){
    tabsitems[index].classList.remove("hide");
    tabsBtns[index].classList.add("active");
}

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () =>{
    hideTabs();
    showTab(index);
}));



const anchors = document.querySelectorAll(".header-nav a");

anchors.forEach(anc => {
  anc.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);


    window.scroll({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});