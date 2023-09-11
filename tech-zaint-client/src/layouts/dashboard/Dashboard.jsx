import React, { useContext, useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Axios from '../../axios/Axios';
import ActivityList from '../../components/Dashboard/ActivityList/ActivityList';

const Dashboard = () => {
    const { user, logOut } = useContext(AuthContext)
    const [userRole, setUserRole] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        Axios.get(`/user/user-role?email=${user.email}`)
            .then(res => {
                setUserRole(res.data)
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
                    <label htmlFor="my-drawer" className="btn btn-primary drawer-button absolute top-5 left-5">Open drawer</label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}

                        {/* For Admin Activity */}
                        <div>
                            <div className={`bg-orange-200 p-4`}>
                                <h3 className='font-serif font-semibold text-2xl'>TechZaint | {userRole.role == 'admin' ? <span className='bg-red-500 p-2'>Admin</span> : <span className='bg-red-500 p-2'>User</span>} </h3>
                            </div>
                        </div>

                        {
                            userRole.role == 'admin' && <>
                                <div>
                                    <ActivityList name={`Home`} link={`/`} />
                                    <ActivityList name={`Dashboard Home`} link={`/dashboard`} />
                                    <ActivityList name={`Add Course`} link={`/dashboard/add-courses`} />
                                    <ActivityList name={`Add Project`} link={`/`} />
                                    <ActivityList name={`Users List`} link={`/`} />
                                    <ActivityList name={`Course List`} link={`/`} />
                                    <ActivityList name={`Orders List`} link={`/`} />
                                    <li className='border-b-4 border-b-yellow-400 p-2 bg-red-500 text-yellow-50' onClick={handleLogout}><h3>Logout</h3></li>
                                </div>
                            </>
                        }
                        {/* For user Activity */}

                        {
                            userRole.role == 'user' && <>
                                <div>
                                    <ActivityList name={`Home`} link={`/`} />
                                    <ActivityList name={`Dashboard Home`} link={`/dashboard`} />
                                    <ActivityList name={`Order Summary`} link={`/`} />
                                    <ActivityList name={`View Courses`} link={`/`} />
                                    <ActivityList name={`Send Message`} link={`/`} />
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
