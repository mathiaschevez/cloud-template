import React from 'react'
import "./dashboard.css"
import Ultimate from '../../components/ultimate/Ultimate'
import { task, gear, suitCase, dollar, browser } from './imports'

const Dashboard = () => {
  return (
    <div className='cloud__dashboard'>
      <div className='cloud__dashboard-title'>
        <h1>Ultimate features in one dashboard</h1>  
        <p>The most intuitive design toolbox to use when creating your next project.</p>
        <p>From ideation to deployment</p>
      </div>
      <div className="cloud__dashboard-ultimates">
        <Ultimate image={task} title="Task Manager" color="#7A41F8" />
        <Ultimate image={gear} title="Create & adjust" color="#ff8083" />
        <Ultimate image={suitCase} title="Website Optimizer" color="#fbce8d" />
        <Ultimate image={dollar} title="Budget Tracker" color="#bfa1f9" />
      </div>
      <div className="cloud__dashboard-image">
        <img src={browser} alt="browser" />
      </div>
    </div>
  )
}

export default Dashboard