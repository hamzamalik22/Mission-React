import React from 'react'
import { useForm } from 'react-hook-form'

function FormProject_Form({handleData}) {

   const {register, handleSubmit, reset} =  useForm()

    const handleSubmitData = data => {
        handleData(data);
        reset();
    }

  return (
    <div className='bg-gray-200 flex justify-center items-center'>
        <form className='flex gap-10' onSubmit={handleSubmit(handleSubmitData)}>
            <input {...register('image')} className='border-2 rounded-md text-md px-3 py-1' type="text" placeholder='Image Url' />
            <input {...register('name')} className='border-2 rounded-md text-md px-3 py-1' type="text" placeholder='Name' />
            <input {...register('email')} className='border-2 rounded-md text-md px-3 py-1' type="text" placeholder='Email' />
            <input className='px-4 py-1 bg-green-400 font-semibold text-white text-xs rounded-lg' type="submit" />
        </form>
    </div>
  )
}

export default FormProject_Form