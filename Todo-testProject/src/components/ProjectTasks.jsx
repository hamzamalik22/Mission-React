import React from 'react'
import TaskCard from './TaskCard'

function ProjectTasks({task,removeData}) {
  return (
    <div className='flex flex-col gap-5 justify-center items-center mt-10'>
            <TaskCard removeData={removeData} task={task} />
    </div>
  )
}

export default ProjectTasks