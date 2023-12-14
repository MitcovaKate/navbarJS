let menu = new Menu([
    new MenuItem("Brand","/"),
    new MenuItem("+123456789","tel:+123456789"),
    new MenuItem("Services","/our-services"),
    new MenuItem("Team","/our-team"), 
    new MenuItem("Contacts","/our-contacts"),
])
let headerTop = document.querySelector('.top')
headerTop.innerHTML = menu.render()