import React,{useState} from 'react'
function ToDoList(){
    const [Tasks,setTasks]=useState(["Eat Breakfast","Drink water","sleep well"]);
    const [newTask,setNewTask]=useState("");

    function handleInputChange(event)
    {
        setNewTask(event.target.value)

    }
    function addTask()
    {
        setTasks((t)=>[...t,newTask])
        setNewTask("")
    }
    function deleteTask(index){
        setTasks(Tasks.filter((_,i)=>i!=index))

    }
    function moveTaskUp(index){
        
    }
    function moveTaskDown(index){

    }


    return(
            <div className='to-do-list'>
                <h1>To Do List</h1>
                <ol>
                    {
                        Tasks.map((t,index) => <div key={index}>
                        <li >{t}
                        <button onClick={()=>deleteTask(index)}>Delete</button>
                        <button onClick={moveTaskUp}>move up👆</button>
                        <button onClick={moveTaskDown}>move down👇</button>
                        </li>
                        </div>)}
                </ol>

                <div>
                    <input type='text' placeholder='Enter a task....' value={newTask} onChange={handleInputChange}/>
                    <button className='add-button' onClick={addTask}>
                        add
                    </button>
                    
                    
                   



                </div>



            </div>


    );
}
export default ToDoList