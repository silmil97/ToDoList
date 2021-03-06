import './TaskList.css'

export function TaskList(props) {
    const handleDelete = props.delete
    const tasks = props.tasks

    return (

        <div className='tasks'>
            {tasks.map(taskObj => (
                <div
                    className='task'
                    key={taskObj.key}
                >
                    <p>
                        {taskObj.task}
                    </p>
                    <button type='button' onClick={() => handleDelete(taskObj.key)}>x</button>
                </div>)
            )
            }
        </div>
    )
}

