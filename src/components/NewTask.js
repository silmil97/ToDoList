import { useState } from "react";

const Tasks = []
const counter = 0
export function NewTask() {
    const [input, setInput] = useState('')
    
    const handleChange = (e) => {
        setInput(e.target.value)
    }

    function createTask(task) {
        console.log(task)
        Tasks.push(<p key={counter}>{counter}{task}</p>)
        counter=+1
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        createTask(input)
        console.log(Tasks)
        
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <p>{input} kas</p>
                <input
                    type="text"
                    value={input}
                    placeholder="Add Task"
                    onChange={handleChange}
                    name="text"
                />
                <button>
                    Add Task
                </button>

            </form>
            <div>
                {Tasks}
            </div>
            <p>hi</p>
        </>
    )
}
