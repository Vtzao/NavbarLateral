const list = document.querySelectorAll('.list');
function activeLink(){
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink))

let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active');
}
