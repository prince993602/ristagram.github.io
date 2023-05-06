let searchClick = document.getElementById('search-click');
let searchBox = document.querySelector(".search-div");
let header = document.querySelector(".header");
searchClick.onclick = function(){
    // alert()
    searchBox.style.zIndex = "5";
    header.style.zIndex = "-1";
    document.querySelector(".profile-status").style.zIndex = "-1"
    document.querySelector(".user-profile").style.zIndex = "-1";
}

let home = document.getElementById('home');
home.onclick = function(){
    searchBox.style.zIndex = "-1";
    header.style.zIndex = "3";
    document.querySelector(".profile-status").style.zIndex = "2";
    document.querySelector(".user-profile").style.zIndex = "-1";
};

let userPr = document.querySelector(".user-pr");
userPr.onclick = function(){
    document.querySelector(".user-profile").style.zIndex = "12";
    header.style.zIndex = "-1";
    document.querySelector(".profile-status").style.zIndex = "-1"
  
}

let threeBars = document.getElementById('three-bars');

threeBars.onclick = function(){
document.querySelector(".setting").style.zIndex = '13';
}

let back = document.getElementById('back');
back.onclick = function(){
document.querySelector(".setting").style.zIndex = '-3';

}
let userName = document.getElementById('userName').innerHTML;

document.getElementById('user-name').innerHTML = userName



