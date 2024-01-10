let menu=document.querryselector('#menu-icon');
let navabar=document.querryselector('.navbar');
menu.onclick = () => {
    menu.classlist.toggle('bx-x');
    navbar.classlist.toggle('active');
}
window.onscroll = () => {
    menu.classlist.remove('bx-x');
    navbar.classlist.remove('active');
}

