import React from 'react';

//This will show the task that is on our list
const ToDo = ({todo}) => {
   return (
       <div>
        <div className={todo.complete ? "strike" : ""}></div> 
           {todo.task}
       </div>
   );
}; // This is an optional function that will put a line through the completed task. 
 
export default ToDo;