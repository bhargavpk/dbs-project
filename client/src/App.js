import React, { useState, useEffect } from 'react'
import logo from './logo.svg';
import './App.css';

function App() {

        const [studentList, makeStudentList] = useState([])
        const [requestStatus, changeRequestStatus] = useState(false)

        const makeRequest = async function(){
                const res = await fetch('http://localhost:5000/student_names', {
                        method: 'GET'
                })
                const data = await res.json()
                const newStudentList = data.studentNames
                makeStudentList(newStudentList)
                changeRequestStatus(true)
        }

        useEffect(() => {
                console.log(studentList)
                if(requestStatus === false)
                        makeRequest()
        })
        return (
        <div className="App">
                <ul>
                        {
                                studentList.map(studentName => (
                                        <li> {studentName} </li>
                                ))
                        }
                </ul>
        </div>
        );
}

export default App;
