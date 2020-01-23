import * as React from 'react';
import { FunctionComponent, useState, useContext } from 'react';

const TodoForm: FunctionComponent = () => {
    const [ taskNameInputValue, taskNameInputValueSet ]: any = useState<string>('');
    const [ taskList, taskListSet ]: any = useState<string[]>([]);

    const taskNameInputHandler = (event: any) => {
        taskNameInputValueSet(event.target.value);
    };

    const taskNameButtonHandler = (event: any) => {
        taskListSet([
            ...taskList,
            taskNameInputValue
        ]);

        taskNameInputValueSet('');
    };

    return(
        <div>
            <label>Write the task you want to add!</label> : 
            <input placeholder="task name" value={taskNameInputValue} onChange={taskNameInputHandler} />
            <button onClick={taskNameButtonHandler}>Add task</button>
            <br />
            <ul>
                {
                    taskList.map((ele, key) => <li>{ele}</li>)
                }
            </ul>
        </div>
    )
};

export default TodoForm;