import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import img from "../../assets/banner/banner3.jpg";
import bkashImg from "../../assets/icons/bkash.png";
import bkashImg1 from "../../assets/icons/bkash1.png";
import Cover from '../../components/Cover/Cover';
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { darkContext } from '../../context/darkmode/DarkContext';

const Payment = () => {
    const [oneCourse, setOneCourse] = useState([])
    const { user } = useContext(AuthContext)
    const { id } = useParams()
    const { darkmode } = useContext(darkContext)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/course/${id}`)
            .then(res => {
                setOneCourse(res.data.course)
                // console.log(res.data.course)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    // Form Submit;
    const handlePaymentSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const optional_email = form.optional_email.value;
        const phone = form.phone.value;
        const comments = form.comments.value;
        const course_id = form.course_id.value;
        const transaction_id = form.transaction_id.value;
        const price = form.price.value;

        const paymentInfo = {
            name,
            email,
            optional_email,
            phone,
            comments,
            course_id,
            transaction_id,
            price
        }
        console.log(paymentInfo)
    }

    return (
        <div className=''>
            <PageTitle title={`Payment Details`} />
            <Cover title={`Complete Your Payment`} img={img} />
            <div className={`px-5 lg:px-24 py-12 md:flex md:justify-center  ${darkmode ? 'dark' : 'light1 '}`}>
                <div>
                    <form onSubmit={handlePaymentSubmit}>
                        <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-16'>
                            {/* Left Div */}
                            <div>
                                <div>
                                    <p>Name: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="name"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>optional_email: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        defaultValue={user.email}
                                        name="email"
                                        disabled
                                    />
                                </div>
                                <div>
                                    <p>Optional Email: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="email"
                                        name="optional_email"
                                        placeholder='If previous email is wrong.'
                                    />
                                </div>
                                <div>
                                    <p>Phone: </p>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="phone"
                                        placeholder="Enter your phone number +88016XXXXX"
                                        required
                                    />
                                </div>
                                <div>
                                    <p>Comments: </p>
                                    <textarea
                                        rows={3}
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="comments"
                                        placeholder="You can share your thoughts-"
                                        required
                                    />
                                </div>
                            </div>
                            {/* Right Div */}
                            <div>

                                <div className='space-y-2 pt-4'>
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="course_id"
                                        defaultValue={oneCourse.id}
                                        hidden
                                    />
                                    <input
                                        className="login-input p-2 w-full md:w-[400px]"
                                        type="text"
                                        name="price"
                                        defaultValue={oneCourse.price}
                                        hidden
                                    />
                                    <div>
                                        <h3 className='text-2xl font-bold'>Title: <span className='text-red-500'>{oneCourse.title}</span></h3>
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-bold'>Price: <span className='text-green-500'>{oneCourse.price} BDT</span></h3>
                                    </div>
                                    {/* Bkash Payment */}

                                    <div className='border-2 border-slate-200 p-4'>
                                        <div className='space-y-3'>
                                            <h3 className='text-2xl font-bold'>Payment Method: </h3>
                                            <div>
                                                {
                                                    darkmode ? <><img src={bkashImg1} className='w-[200px]' alt="" /></> : <><img src={bkashImg} className='w-[200px]' alt="" /></>
                                                }
                                            </div>
                                            <div>
                                                <p>Transaction ID: </p>
                                                <input
                                                    className="login-input p-2 w-full md:w-[400px]"
                                                    type="text"
                                                    name="transaction_id"
                                                    placeholder="Provide correct TrxID"
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* Button for submitting the form */}
                        <div className='grid justify-center mt-4'>
                            <div>
                                <button className='btn btn-accent w-[200px]'>Complete Payment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Payment;
