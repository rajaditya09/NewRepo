let todoApp = {
    todos: [], // store task in this array, to use todos array inside below functions use this.todos
    count: 1, // you can use it to get unique id for each task, feel free to use your own unique identifier implementation. You can simply use this.count value as id for any task and increment it and use its incremented value for some other task

    addTask(task){
    // use this.todos to access above declared array inside functions
    // this method adds task
       this.todos.push(task);
       console.log(`the task new added is ${task}`);
       
    },

    deleteTask(id) {
    //this method deletes task
      if(this.todos.length===0){
       console.log("Plese Add task there is No tasks added!");
      }
      else if(this.todos.length<id){
        console.log(`Please Enter correct Id Number. ${id} is inncorrect one.`)
      }
       else{
           let aarcount = this.todos.length;
           let arr = this.todos.splice(0,id);
           console.log(arr);
           let brr = this.todos.splice(id+1,aarcount);
           console.log(brr);
           this.todos=arr.concat(brr);
          console.log(`Task Deleted with ther Reference ${id}. And Updated Todos Array is ${this.todos}`); 
        }
     
    },

    updateTaskText(id, text) {
    // this method updates task’s text
    if(this.todos.length===0){
        console.log("Plese Add task there is No tasks added!");
       }
       else if(this.todos.length<id){
         console.log(`Please Enter correct Id Number. ${id} is inncorrect one.`)
       }
        else{
            this.todos[id]=text;
            console.log(`The new Task updated for the ID: ${id} is ${text}`);
         }
   
    },

    updateTaskAsDone(id) {
    //this method updates task as done
    if(this.todos.length===0){
        console.log("Plese Add task there is No tasks added!");
       }
       else if(this.todos.length<id){
         console.log(`Please Enter correct Id Number. ${id} is inncorrect one.`)
       }
        else{
            this.todos[id]='DONE';
            console.log(`The new Task  for the ID: ${id} is COmpleted And Marked As a DONE`);
         }
   
    },

    getAllTasks(){
    //this method prints all tasks
    if(this.todos.length===0){
       console.log("No tasks added!");
    }
    else {
       console.log(this.todos);
    }
  }
}

todoApp.getAllTasks();
todoApp.addTask("This is task 0");
todoApp.addTask("This is task 1");
todoApp.addTask("This is task 2");
todoApp.addTask("This is task 3");
todoApp.addTask("This is task 4");
todoApp.addTask("This is task 5");
todoApp.addTask("This is task 6");
todoApp.addTask("This is task 7");
todoApp.deleteTask(5);
todoApp.getAllTasks();
