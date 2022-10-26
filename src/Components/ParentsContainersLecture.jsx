import React from 'react'
import Nav from './Nav';
import Dashboard from './Dashboard';
import Lecture from './Lecture';


export default function ParentsContainersLecture() {
  return (
    <div>
       <Nav/>
       <Dashboard/>
       <Lecture/>
    </div>
  )
}
