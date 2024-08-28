let input_data=document.getElementById("task-name");



function addtask(){
    if(input_data.value==""){
        
    }
    else{
        let todoul=document.getElementById("todo-itmes");
        const li=document.createElement("li");
        todoul.appendChild(li);
        const divtext=document.createElement("div");
        li.appendChild(divtext)
        divtext.className="text-data";
        divtext.textContent=input_data.value;
        const rmdiv=document.createElement("div");
        li.appendChild(rmdiv);
        rmdiv.className="remove-button";
       input_data.value="";



    }

}

document.getElementById("todo-itmes").addEventListener("click", function(e) {
    if (e.target && e.target.classList.contains("remove-button")) {
        const li = e.target.parentElement;
        li.remove();
    }
});