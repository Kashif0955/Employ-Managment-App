import React from 'react'
import Header from '../other/Header'
import AllTasks from '../other/AllTasks'
import CreateTask from '../other/CreateTask'

const AdminDashboard = () => {
  return (
<>
<div className='h-screen w-full p-7'>
<Header/>
<CreateTask/>
<AllTasks/>
</div>

</>
  )
}

export default AdminDashboard