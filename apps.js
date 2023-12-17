let menu = new MenuMain([
    new MenuItem("/","Brand","bi bi-boombox"),
    new MenuItem("tel:+123456789","+123456789","bi bi-telephone"),
    new MenuItem("/our-services","Services",""),
    new MenuItem("/our-team","Team",""), 
    new MenuItem("/our-contacts","Contacts","bi bi-person-lines-fill"),
])
let headerTop = document.querySelector('.top')
headerTop.innerHTML = menu.render()
/* <i class="bi bi-boombox"></i>
<i class="bi bi-telephone"></i>
<i class="bi bi-person-lines-fill"></i> */
