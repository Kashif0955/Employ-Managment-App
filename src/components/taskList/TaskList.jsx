import React from 'react';

const TaskList = () => {
    return (
        <>
            <div id='tasklist' className='h-[300px] w-full overflow-x-auto  py-5 mt-10 flex items-center justify-start flex-nowrap gap-5'>
                <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
                    <div className='flex items-center justify-between' >
                        <h3 className='text-sm bg-red-600 rounded px-3 py-1'>High</h3>
                        <h4 className='text-sm'>21 Sep 2024</h4>
                    </div>
                    <h2 className=' mt-5 text-xl font-semibold'>Create a Facebook Clone</h2>
                    <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque laudantium aliquid molestias repellendus nam!</p>
                </div>
                <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400  rounded-xl'>
                    <div className='flex items-center justify-between' >
                        <h3 className='text-sm bg-red-600 rounded px-3 py-1'>High</h3>
                        <h4 className='text-sm'>21 Sep 2024</h4>
                    </div>
                    <h2 className=' mt-5 text-xl font-semibold'>Create a Facebook Clone</h2>
                    <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque laudantium aliquid molestias repellendus nam!</p>
                </div>
                <div className='flex-shrink-0 h-full w-[300px] p-5 bg-green-400 rounded-xl'>
                    <div className='flex items-center justify-between' >
                        <h3 className='text-sm bg-red-600 rounded px-3 py-1'>High</h3>
                        <h4 className='text-sm'>21 Sep 2024</h4>
                    </div>
                    <h2 className=' mt-5 text-xl font-semibold'>Create a Facebook Clone</h2>
                    <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque laudantium aliquid molestias repellendus nam!</p>
                </div>
                <div className='flex-shrink-0 h-full w-[300px] p-5 bg-purple-400 rounded-xl'>
                    <div className='flex items-center justify-between' >
                        <h3 className='text-sm bg-red-600 rounded px-3 py-1'>High</h3>
                        <h4 className='text-sm'>21 Sep 2024</h4>
                    </div>
                    <h2 className=' mt-5 text-xl font-semibold'>Create a Facebook Clone</h2>
                    <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque laudantium aliquid molestias repellendus nam!</p>
                </div>
                <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl'>
                    <div className='flex items-center justify-between' >
                        <h3 className='text-sm bg-red-600 rounded px-3 py-1'>High</h3>
                        <h4 className='text-sm'>21 Sep 2024</h4>
                    </div>
                    <h2 className=' mt-5 text-xl font-semibold'>Create a Facebook Clone</h2>
                    <p className='text-sm mt-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut itaque laudantium aliquid molestias repellendus nam!</p>
                </div>
            </div>
        </>
    );
}

export default TaskList;
