import React from 'react'
import { useForm } from 'react-hook-form'


function ProjectForm({handledata}) {

  const {register, handleSubmit, reset} = useForm()

  const handleForm = (data) =>{
    handledata(data);
    reset();
  }

  return (
    <div className='flex justify-center items-center'>
        <form className='flex gap-10'>
            <input {...register('theTask')} className='rounded-lg border-2 px-2 py-1 text-sm outline-none' type="text" placeholder='Enter your Task' />
            <input onClick={handleSubmit(handleForm)} className='bg-[#E69A8DFF] text-[#634e90] py-1 px-3 rounded-md font-semibold cursor-pointer' type="submit" />
        </form>
    </div>
  )
}

export default ProjectForm