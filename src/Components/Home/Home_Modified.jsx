import { useState } from 'react'
import './Home.css'
import './HomeResp.css'
import Chart from '../Graphs/Chart.jsx'
import StatsPie from '../Graphs/StatsPie.jsx'

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
