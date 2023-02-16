import React from 'react';
import ToDo from './ToDo';
 
// This will map the ToDo List 
const ToDoList = ({toDoList}) => {
   return (
       <div>
           {toDoList.map(todo => {
               return (
                   <ToDo todo={todo} />
               )
           })}
       </div>
   );
};
 
export default ToDoList;