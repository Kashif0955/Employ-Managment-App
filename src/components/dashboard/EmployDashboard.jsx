import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployDashboard = () => {
  return (
    <>

      <div className='bg-[#1C1C1C] p-10 h-screen '>
        <Header />
        <TaskListNumber/>
        <TaskList/>
       
   </div>
  
    </>
  )
}

export default EmployDashboard