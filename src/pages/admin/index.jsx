import React, { useState, useEffect } from 'react'
import getConfig from 'next/config'
import Index from './[id]'
import jsonData from './combined_data.json';
const Admin = () => {
    const { publicRuntimeConfig } = getConfig()
    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])


    useEffect(() => {
        fetch(`${backendURL}/api/alluser`)
            .then(res => res.json())
            .then(data => setUsers(data.data))
    }, [])
    console.log(users)
    useEffect(() => {
    const pass=prompt("Enter the password to view the details")
    if(pass!=="shubhamiitbhu") return <h1>Wrong Password</h1>
    }, [])
    const verify=(id)=>{
       // ask for password and then verify
         const pass=prompt("Enter the password to verify the user")
            if(pass!=="shubhamiitbhu") return alert("Wrong Password")
       

    }
    const getEventName = (id) => {
        for (let x in jsonData) {
            // console.log(x)
            // console.log(jsonData[x].id)
            // console.log(jsonData[x].Title)
            if (id === jsonData[x].id) {
                return jsonData[x].Title
            }

        }
    }
    // const pass=prompt("Enter the password to view the details")
    // if(pass!=="shubhamiitbhu") return <h1>Wrong Password</h1>
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>College</th>
                        <th>unverified</th>
                        <th>verified</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td style={{ backgroundColor: "yellow" }}>
                                {user.name.substr(0, 15).toLowerCase()}
                            </td>
                            <td style={{ backgroundColor: "green" }}>{user.email}</td>
                            <td style={{ backgroundColor: "red" }}>{user.number}</td>
                            <td style={{ backgroundColor: "blueviolet" }}>{user.college}</td>
                         <td>
                            <select >
                            <option value="0">Select</option>
                                {user.userRegisteredEvents.registeredEvents.map((e, i) => (
                                    <option key={i} value={e} style={{ backgroundColor: "red" }} >
                                        {getEventName(e)}
                                    </option>
                                ))}
                            </select>
                            </td>
                            <td>
                            <select>
                            <option value="0">Select</option>
                                {user.userRegisteredEvents.ver.map((e, i) => (
                                    <option key={i} value={e} style={{ backgroundColor: "green" }}>
                                        {getEventName(e)}
                                    </option>
                                ))}
                            </select>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

}

export default Admin