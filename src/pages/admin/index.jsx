import React, { useState, useEffect } from 'react'
import getConfig from 'next/config'
import Index from './[id]'
const Admin = () => {
    const { publicRuntimeConfig } = getConfig()
    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    const [users, setUsers] = useState([])
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


                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (

                        <tr key={index}>

                            <td style={{backgroundColor:"yellow"}}>{user.name.substr(0, 15).toLowerCase() }</td>
                            <td style={{backgroundColor:"green"}}>{user.email }</td>
                            <td style={{backgroundColor:"red"}}>{user.number}</td>

                            {/* <td onSubmit={console.log(user)}>{user.number}</td> */}
                            <td style={{backgroundColor:"blueviolet"}}>{user.college}</td>


                        </tr>
                    ))}
                </tbody>
            </table>
            

        </>
    )
}

export default Admin