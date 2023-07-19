"use strict"

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");


todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


function addTodo(e) {
   e.preventDefault();
   let val = todoInput.value;

   const todoDiv = document.createElement("div");
   todoDiv.classList.add("todo");
   
   const newTodo = document.createElement("li");
   
   newTodo.innerText = val;
   newTodo.classList.add("todo-item");
   todoDiv.appendChild(newTodo);


   const completedButton = document.createElement("button");
   completedButton.innerHTML = `<i class="fas fa-check"></i>`;
   completedButton.classList.add("complete-btn");
   todoDiv.appendChild(completedButton);


     const trashButton = document.createElement("button");
   trashButton.innerHTML = `<i class="fas fa-trash"></i>`;
   trashButton.classList.add("trash-btn");
   todoDiv.appendChild(trashButton);


   todoList.appendChild(todoDiv);

   todoInput.value = "";
}

function deleteCheck(e) {
   const item = e.target;

   if (item.classList[0] === "trash-btn") {
      const todo = item.parentElement;
      todo.classList.add("fall");
      todo.addEventListener("transitionend", function () {
         todo.remove();
      });
   }


      if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
   }
}


function filterTodo(e) {
   const todoist = todoList.childNodes;
   for(let i = 0; i < todoist.length; i++) {
      let todo = todoist[i];
      switch (e.target.value) {
         case "all":
            todo.style.display = "flex";
            break;
         case "completed":
            if(todo.classList.contains("completed")) {
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
            break;
         case "uncompleted":
            todo.style.display = "flex";
            break;
         case "completed":
            if(!todo.classList.contains("completed")) {
               todo.style.display = "flex";
            } else {
               todo.style.display = "none";
            }
            break;
      }
   }
}