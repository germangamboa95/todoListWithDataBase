let taskManager = {
  todo : {},
  newKey: (task) => {
    let arr = task.split('');
    return  arr.map(item => item.charCodeAt(item)).reduce((acc, cur) => acc + cur);;
  },
  addTask : (task) =>{
    console.log(taskManager.todo);
    taskManager.todo[taskManager.newKey(task)] =  task;
  },
  render : () =>{
    for(let key in taskManager.todo){
      console.log(key,": ",taskManager.todo[key]);
      let task = taskManager.todo[key];
      taskManager.incRender(task);
    }
  },
  incRender : (task) => {
    let  el = document.createElement('li');
    el.classList.add('list-group-item','d-flex','justify-content-between');
    el.setAttribute("value", taskManager.newKey(task));
    el.innerHTML =  `<span class="mr-5">${task}</span> <a href="" class="badge">Delete</a>`;
    taskBox.appendChild(el);
  },
  itemDelete : (e) => {
    let choice = e.target.innerHTML;
    let key = e.target.parentElement.value;
    if(choice === 'Delete'){
      e.target.parentElement.outerHTML = '';
      delete taskManager.todo[key];
      console.log(e);
    }
  },
  saveToLocal: () => {
    let storage = window.localStorage;
    let jstring = JSON.stringify(taskManager.todo);
    storage.setItem('todo', jstring);
  }
}




// Globals for event Listeners
let submit = document.getElementById('form');
let taskBox = document.getElementById('task-box');

window.onload = (e) => {

  console.log('Document loaded');
  let storage = window.localStorage;
  let todoString = storage.getItem('todo');
  if(todoString != null){
    let todo = JSON.parse(todoString);
    taskManager.todo = todo;
    taskManager.render();
  }

}
//Event listeners
submit.addEventListener('submit', e =>{
  e.preventDefault();
  let task = e.target[0].value;
  if(task != ''){
    e.target[0].value = '';
    taskManager.addTask(task);
    taskManager.incRender(task);
    taskManager.saveToLocal();
  }
});

taskBox.addEventListener('click', e =>{
  e.preventDefault();
  taskManager.itemDelete(e);
  taskManager.saveToLocal();
});
