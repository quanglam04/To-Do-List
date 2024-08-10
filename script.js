const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        let span = document.createElement("span");
        // biểu tượng hình chữ thập :v  nói thẳng là dấu x
        span.innerHTML = "\u00d7";
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        li.appendChild(span);

    }
    inputBox.value = '';
    saveData();
}

listContainer.addEventListener("click", (e) =>{
    if(e.target.tagName === 'LI')
    {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

    
},false)
// hàm này để lưu dữ liệu mỗi khi tải lại trang web
function saveData() {
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();