import { useState } from 'react'
import './Home.css'
import './HomeResp.css'
import Chart from '../Graph/Chart.jsx'
import StatsPie from '../Graph/StatsPie.jsx'

function Dashboard() {
    return (
      <>
        <div className='dashboardContainer'>
          <div className='content'>
            <p>Career Tracker</p>
            <p>Welcome to Career Tracker, your ultimate platform for career success!</p>
          </div>
          <div className='stats'>
            <Chart />
            <StatsPie />
          </div>
        </div>
      </>
    )
}

export default Dashboard
