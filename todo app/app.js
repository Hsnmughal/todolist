var list = document.getElementById("ul")
function addTodo() {
    var todo_item = document.getElementById("todo");
    // creating li
    var li = document.createElement("li");
    li.setAttribute("class","list-group-item my-4 rounded-pill col-sm-12 col-md-12 col-lg-12");
    var textNode = document.createTextNode(todo_item.value);
    li.appendChild(textNode);
    list.appendChild(li);
    todo_item.value= "";
    // creating btn
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-outline-warning button rounded-pill");
    btn.setAttribute("onclick","editBtn(this)");
    var text = document.createTextNode("Edit");
    btn.appendChild(text)
    list.appendChild(btn)   
    var btn = document.createElement("button");
    btn.setAttribute("class","btn btn-outline-danger rounded-pill mx-1");
    btn.setAttribute("onclick","deletebtn(this)");
    var text = document.createTextNode("Delete");
    btn.appendChild(text)
    list.appendChild(btn)   
}
function deleteAll() {
    list.innerHTML = ""

}
function deletebtn(e) {
    e.previousSibling.previousSibling.remove();
    e.previousSibling.remove();
    e.remove();
}
function editBtn(e) {
    var newVal = prompt("Input Here...",e.previousSibling.firstChild.nodeValue)
    e.previousSibling.firstChild.nodeValue = newVal
}