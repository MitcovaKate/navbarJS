class MenuItem{
    constructor (title,url){
        this.title=title
        this.url=url
    }
render(){
    return `
    <a href="${this.url}">${this.title}</a>
    `
}
}
class Menu{
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

    return `<nav>` + this.items.map(item => item.render()).join("") + `</nav>`
    }

}