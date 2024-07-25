var input=document.getElementById("input")
var message=document.getElementById("message")
function add(){
    var list=document.createElement("li")
    list.innerHTML=input.value+"<button onclick='remove(event)'>delete</button>"+"<button onclick='change(this)'>edit</button>"
    message.append(list)
    input.value=""
}
function remove(event){
    event.target.parentElement.remove()
}
var currentItem=null
function change(event){
    currentItem=event.parentElement
    var popup=document.getElementById("popup")
    popup.style.display="block"
}
function update2(event){
    var input2=document.getElementById("input2")
    var inputValue=input2.value
    currentItem.innerHTML=inputValue+"<button onClick='remove(event)'>delete</button>"+"<button onClick='change(this)'>edit</button>"
    popup.style.display="none"
    input2.value=' '
}
