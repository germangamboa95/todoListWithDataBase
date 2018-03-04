let taskManager = {
  todo : [],
  addTask : (task) =>{
    taskManager.todo.push(task);
  },
  render : () =>{
    taskManager.todo.forEach(item =>{
      taskBox.innerHTML += `<li class="list-group-item d-flex justify-content-between"><span class="mr-5">${item}</span> <a href="" class="badge">Delete</a></li>`;
    });
  },
  incRender : () => {
    let x = taskManager.todo.length;
    let item = taskManager.todo[x - 1];
    taskBox.innerHTML += `<li class="list-group-item d-flex justify-content-between"><span class="mr-5">${item}</span> <a href="" class="badge">Delete</a></li>`;
  },
  itemDelete : (e) => {
    let choice = e.target.innerHTML;
    if(choice === 'Delete'){ 
      e.target.parentElement.outerHTML = '';
      console.log(e);
    },
    printF: () => {
      console.log('Hello World')
    }
  }
}




// Globals for event Listeners
let submit = document.getElementById('form');
let taskBox = document.getElementById('task-box');


//Event listeners
submit.addEventListener('submit', e =>{
  e.preventDefault();
  var task = e.target[0].value;
  if(task != ''){
    e.target[0].value = '';
    taskManager.addTask(task);
    taskManager.incRender();
  }
});

taskBox.addEventListener('click', e =>{
  e.preventDefault();
  taskManager.itemDelete(e);
});
