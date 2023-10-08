/* eslint-disable react/react-in-jsx-scope */
import { Fragment, useContext, useEffect, useState } from 'react';
import Classes from "./dashboard.module.css"
import Button from './Button/Button';
import Router from 'next/router';
import getConfig from 'next/config';
import Loader from "../loading"
import jwt_decode from 'jwt-decode';
import Image from 'next/image';

const DashBoard = () => {
    const { publicRuntimeConfig } = getConfig();
    const [profileImage, setProfileImage] = useState('');
    const NEXT_PUBLIC_REACT_APP_BACKEND_URI = publicRuntimeConfig.NEXT_PUBLIC_REACT_APP_BACKEND_URI;
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState({
        name: 'John Doe',
        email: 'foo@foo.com',
        college: 'Foo',
        phone: 'XXXXXXXXXX',
        year: '0',
        instaHandle: '_blah_',
        userType: '-1'
    });
    useEffect(() => {
        const storedImage = sessionStorage.getItem('img');
        if (storedImage) {
            setProfileImage(storedImage);
        }
    }, []);

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        if (!token) {
            Router.push('/');
            return;
        }
        const decodedToken = jwt_decode(token);
        const storedEmail = decodedToken.email;
        setIsLoading(true);

        const fetchUserData = async () => {
            try {
                const res = await fetch(NEXT_PUBLIC_REACT_APP_BACKEND_URI + '/api/user', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        email: storedEmail,
                    },
                });

                if (!res.ok) {
                    throw new Error('Failed to fetch user data');
                }

                const data = await res.json();
                const cartItems = data.user.userCart.cartItems
                // console.log(data.user.userCart.cartItems)
                const user = data.user.userID || data.user; // Adjust this based on your API response structure

                setUserData({
                    name: user.name,
                    email: user.email,
                    college: user.college,
                    phone: user.number,
                    year: user.yearOfStudy,
                    instaHandle: user.instaHandle,
                    userType: user.role,
                    refCode: user.ref_code,
                    timesReferred: user.norefcode,
                });

                setIsLoading(false);
            } catch (error) {
                console.error(error);
                alert('Error with authentication, please login again');
                Router.push('/');
            }
        };

        fetchUserData();
    }, []);

    const logOutHandler = () => {
        sessionStorage.clear();
        Router.push('/');
    };
    const reset = () => {
        Router.push("/register");
    }
    return (
        <div>
            {isLoading ? (
                <Loader />
            ) : (
                <>
                    <div>
                        <div className={Classes.container}>
                            <h1>Dashboard</h1>
                            <div className={`${Classes.section_accessible}`}>
                                {userData.userType == 0 && (
                                    <Fragment>
                                        <h1>
                                            <a href="#">Events</a>
                                        </h1>
                                        <br />
                                        <h1>
                                            <a href="#">Merchandise</a>
                                        </h1>
                                    </Fragment>
                                )}
                                {userData.userType == 1 && (
                                    <h1>
                                        <a href="#">Events</a>
                                    </h1>
                                )}
                            </div>
                        </div>

                        <div className={`${Classes.main} ${Classes.column_2}`}>
                            <h2>User Information</h2>
                            <div className={Classes.card}>
                                <div className={Classes.card_body}>
                                    {/* <i class="fa fa-pen fa-xs edit"></i> */}
                                    <table>
                                        <tbody>
                                            <tr>

                                                <center><td><Image src={profileImage} width={100} height={100} alt='dp' style={{ borderRadius: "100px" }} /></td></center>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Name</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.name}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Email</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.email}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>College/University</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.college}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>Phone</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.phone}</td>
                                            </tr>
                                            {/*No need because backend is not giving us yaer of study */}
                                            {/* <tr>
                                            <td>
                                                <strong>Year of Study</strong>
                                            </td>
                                            <td>:</td>
                                            <td>{userData.year}</td>
                                        </tr> */}
                                            <tr>
                                                <td>
                                                    <strong>Instagram Handle</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.instaHandle}</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <strong>User Type</strong>
                                                </td>
                                                <td>:</td>
                                                <td>{userData.userType == 2 ? 'Campus Ambassador' : 'Participant'}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className={Classes.logout} style={{ alignSelf: "start" }}>
                                <Button onClick={reset}>Edit Info</Button>
                            </div>
                            <div className={Classes.logout} style={{ alignSelf: "end" }}>
                                <Button onClick={logOutHandler}>Logout</Button>
                            </div>

                        </div>

                    </div>

                </>
            )}

        </div>
    );
}

export default DashBoard;

