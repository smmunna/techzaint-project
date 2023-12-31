import React, { useContext, useEffect, useState } from 'react';
import { Outlet, ScrollRestoration, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import ActivityList from '../../components/Dashboard/ActivityList/ActivityList';
import Open from "../../assets/icons/open.png";
import axios from 'axios';
import Footer from "../../shared/footer/Footer"

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const [userRole, setUserRole] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const accessToken = localStorage.getItem('access-token');
        const headers = {
            Authorization: `Bearer ${accessToken}`, // Assuming it's a Bearer token
            'Content-Type': 'application/json',
            Accept: 'application/json'
        };

        axios.get(`http://localhost:8000/api/role/${user.email}`,{ //TODO: change url with live site;
            headers:headers
        })
            .then(res => {
                setUserRole(res.data.role)
                // console.log(res.data.role)
            })
    }, [])

    //Logout
    const handleLogout = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                navigate("/");
            })
            .catch((error) => {
                // An error happened.
                console.log(error);
            });
    };

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <Outlet />
                    <ScrollRestoration/>
                    <Footer/>
                    <label htmlFor="my-drawer" className="btn btn-accent drawer-button absolute top-5 left-5">Open <img src={Open} width={30} alt="" /></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {/* For Admin Activity */}
                        <div>
                            <div className={`bg-orange-200 p-4`}>
                                <h3 className='font-serif font-semibold text-2xl'>TechZaint | {userRole == 'admin' ? <span className='bg-red-500 p-2'>Admin</span> : <span className='bg-red-500 p-2'>User</span>} </h3>
                            </div>
                        </div>

                        {
                            userRole == 'admin' && <>
                                <div>
                                    <ActivityList name={`Home`} link={`/`} />
                                    <ActivityList name={`Dashboard Home`} link={`/dashboard`} />
                                    <ActivityList name={`Add Course`} link={`/dashboard/add-courses`} />
                                    <ActivityList name={`Course List`} link={`/dashboard/course-list`} />
                                    <ActivityList name={`Orders List`} link={`/dashboard/order-list`} />
                                    <ActivityList name={`Add Tuitorial`} link={`/dashboard/add-tuitorial`} />
                                    <ActivityList name={`Tuitorial List`} link={`/dashboard/tuitorial-list`} />
                                    <li className='border-b-4 border-b-yellow-400 p-2 bg-red-500 text-yellow-50' onClick={handleLogout}><h3>Logout</h3></li>
                                </div>
                            </>
                        }
                        {/* For user Activity */}

                        {
                            userRole == 'user' && <>
                                <div>
                                    <ActivityList name={`Home`} link={`/`} />
                                    <ActivityList name={`Dashboard Home`} link={`/dashboard`} />
                                    <ActivityList name={`Order Summary`} link={`/dashboard/order-summary`} />
                                    <ActivityList name={`Send Message`} link={`/dashboard/send-message`} />
                                    <li className='border-b-4 border-b-yellow-400 p-2 bg-red-500 text-yellow-50' onClick={handleLogout}><h3>Logout</h3></li>
                                </div>
                            </>
                        }

                    </ul>
                </div>
            </div>

        </div>
    );
}

export default Dashboard;
