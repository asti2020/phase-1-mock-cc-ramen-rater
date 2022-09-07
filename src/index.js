// write your code here
fetch("http://localhost:3000/ramens")
.then((res) => res.json())
.then((json) =>  json.forEach((nood) => oneRam(nood)))
// console.log(`i ma here`)
// function newNood(nood){
// let menu = document.querySelector(`#ramen-menu`)
function oneRam(nood){
    let menu = document.querySelector(`#ramen-menu`)
    let divName = document.createElement(`div`)
divName.className = "noodles"
let image = document.createElement(`image`)
image.src = nood.image
let tex = document.createElement(`p`)
tex.innerHTML = nood.name
let ret = document.createElement(`h4`)
ret.innerHTML = nood.rating
let comment = document.createElement(`div`)
comment.className = "comment"
comment.innerHTML = nood.comment
let button = document.createElement(`button`)
button.innerHTML = "Submit"
button.addEventListener(`click`, creatnew)
function creatnew() {
    e.preventDefult()
   let newNood= {
       name:e.target.name.value,
       image:e.target.image.value,
       tex : e.target.rating.value,
       comment:e.target.comment.value
    }
    creatnew(newNood)
    addNew(newNood)
    console.log(creatnew(newNood))
}
let id = document.createElement(`id`)
id.id = "id"
id.innerHTML = nood.id
divName.append(id, image, tex, ret, comment)
// menu.append(image, names, restaurant)
function addNew(newNood){
fetch("http://localhost:3000/ramens")
.then ((e) => e.json(e))
.them((e) =>console.log())
}
}