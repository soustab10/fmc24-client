import React, { useState, useEffect, use } from 'react'
import getConfig from 'next/config'
import Index from './[id]'
import jsonData from './combined_data.json';
import Router from 'next/router';
const Admin = () => {
    const { publicRuntimeConfig } = getConfig()
    const backendURL = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    const secret = publicRuntimeConfig.secret
    const [users, setUsers] = useState([])
    const [events, setEvents] = useState([])
    const [token, setToken] = useState("")
    const [email, setEmail] = useState("")


    useEffect(() => {
        fetch(`${backendURL}/api/alluser`)
            .then(res => res.json())
            .then(data => setUsers(data.data))
    }, [])
    console.log(users)
    useEffect(() => {
        const token1 = sessionStorage.getItem("token")
        console.log(token1)
        setToken(token1)
    }, [])
    const getDetails = async () => {
        const info = await fetch("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + token)
        console.log("info", info)
        const data = await info.json();
        console.log(data)
        const email1 = await data.email
        setEmail(email1)
        console.log(email)
        if (email !== "shubham.kumar.min21@itbhu.ac.in")
            return <h1>Not Authorized</h1>
    }
    getDetails()

    const verify = (id, email) => {

    }
    const handleVerify = async (event, userId, userEmail,name) => {
        event.preventDefault();
        console.log(userId, userEmail);
        const id = event.target[0].value;
        const numId = parseInt(id)
        console.log(id);
        const res = await fetch(`${backendURL}/api/events/addVerified`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "secret": secret
            },
            body: JSON.stringify({
                email: userEmail,
                toAppend: numId,
                secure: secret
            })
        });
        const data = await res.json();
        console.log(data);
        const evName=getEventName(numId)

        const res1 = await fetch("/api/confirmation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": userEmail,
                "item": evName,
                "name": name,
            })
        })
        const data1 = await res1.json();
        console.log(data1);

    };

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
            {email === "shubham.kumar.min21@itbhu.ac.in" || email === "fmcweekendtech@gmail.com" || email === "asundeep.chowdary.mat21@itbhu.ac.in" || email === "a.bhattacharya.cd.eee21@itbhu.ac.in" || email==="mahi.bansal.eee21@itbhu.ac.in" || email==="jayesh.dewangan.eee20@itbhu.ac.in"? (<table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>College</th>
                        <th>unverified</th>
                        <th>Verify</th>
                        <th>verified</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            {user.userRegisteredEvents.registeredEvents.length > 0 ?
                                <>
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
                                                    {e}:{getEventName(e)}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    <td style={{ backgroundColor: "orange" }}>
                                        <form style={{ display: "flex", margin: "2px" }} onSubmit={(event) => {
                                            handleVerify(event, index, user.email,user.name);
                                        }}
                                        >
                                            <input type='text' placeholder='Enter Id to verify' />
                                            <button type='submit' style={{ backgroundColor: "red", borderRadius: "5px" }}>Verify</button>
                                        </form>
                                    </td>
                                    <td>
                                        <select>
                                            <option value="0">Select</option>
                                            {user.userRegisteredEvents.ver.map((e, i) => (
                                                <option key={i} value={e} style={{ backgroundColor: "green" }}>
                                                    {e}:{getEventName(e)}
                                                </option>
                                            ))}
                                        </select>
                                    </td></>
                                : null}
                        </tr>
                    ))}
                </tbody>
            </table>) : (<button style={{ margin: "auto" }} onClick={() => Router.push("/login")}>UnAuthorised Access</button>)}

        </>
    );

}

export default Admin