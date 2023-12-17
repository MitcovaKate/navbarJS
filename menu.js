class MenuItem{
    constructor (url,title,icon){
        if(url.match(/^[a-z#-/\:0-9]+$/) !==null){this.url=url}
        else{console.error("ERROR:This url has wrong format!")}
       
        this.title=title
         if(icon.match(/\bbi-\w+/) !==null ){this.icon=icon} 
        else{console.error("ERROR:This icon has wrong format!")} 
     }
render(){
    return `
    <a class="nav-link" href="${this.url}">${this.title}<i class="${this.icon}"></i></a>
    `
}
}
class MenuMain{
    constructor(items){
        this.items = items
    }
    render(){
    //     let html=`<nav>`
    //     for(let i=0;i<=this.items.length;i++){
    //         html+=this.items[i].render()
    //     }
    // html+=`</nav>`
    // return html

    return `<nav class="nav flex-column">` + this.items.map(item => item.render()).join("") + `</nav>`
    }

}
