let form = document.querySelector("form")
let ul = document.querySelector("ul")
let input = document.querySelector("input")
let li = document.querySelector("li")
let im = document.querySelector("img")

console.log(im)

const saveTodo = (e)=>{
  e.preventDefault()
 let newli = document.createElement("li")
 newli.innerText = input.value
 newli.className ="list-group-item"
 let det = document.createElement("button")
 det.className ="btn btn-danger float-end  rounded-0"
 det.innerText = "delete"
 newli.className ="mt-4"
 newli.className = "list-group-item"


 
 console.log(det)
 ul.appendChild(newli)
 newli.appendChild(det)

 form.reset()
 


}
 form.addEventListener("submit", saveTodo)

 const deleteTodo = (e)=>{
  e.preventDefault()
  if(  e.target.className.includes("btn-danger")){
    let li = e.target.parentElement
    ul.removeChild(li)
  }
  

 }
 ul.addEventListener("click",deleteTodo)

// function changebg  (e){
//   e.preventDefault()
//   let margin = document.querySelectorAll("container")
//   form.className =   "bg-danger"
  

// }
// ul.addEventListener("mouseover",changebg)



 