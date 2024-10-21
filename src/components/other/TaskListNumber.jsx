import React from 'react'

const TaskListNumber = () => {
    return (
        <>
            <div className='flex screen mt-10 justify-between gap-5 '>
                <div className='bg-red-400 h-40 w-[45%] rounded-xl py-9 px-9 '>
                    <h2 className='text-3xl font-semibold'>1</h2>
                    <h3 className='text-xl font-medium'>New Task</h3>
                </div>
                <div className='bg-blue-400 h-40 w-[45%] rounded-xl py-9 px-9 '>
                    <h2 className='text-3xl font-semibold'>3</h2>
                    <h3 className='text-xl font-medium'>Complete Task</h3>
                </div>
                <div className='bg-green-400 h-40 w-[45%] rounded-xl py-9 px-9 '>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>Accepted Task</h3>
                </div>
                <div className='bg-purple-400 h-40 w-[45%] rounded-xl py-9 px-9 '>
                    <h2 className='text-3xl font-semibold'>0</h2>
                    <h3 className='text-xl font-medium'>Failed Task</h3>
                </div>


            </div>
        </>
    )
}

export default TaskListNumber