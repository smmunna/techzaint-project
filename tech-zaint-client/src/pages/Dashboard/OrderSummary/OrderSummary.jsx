import React, { useContext, useEffect, useState } from 'react';
import img from "../../../assets/banner/banner4.jpg";
import invoiceIcon from "../../../assets/icons/invoice-icon.png"
import PageTitle from '../../../components/PageTitle/PageTitle';
import Cover from '../../../components/Cover/Cover';
import { AuthContext } from '../../../provider/AuthProvider';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Spinner1 from '../../../components/Spinner/Spinner1';

const OrderSummary = () => {
    const [paymentInfo, setPaymentInfo] = useState([]);
    const { user } = useContext(AuthContext);
    const [hasLoaded, setHasLoaded] = useState(false)

    const accessToken = localStorage.getItem('access-token');
    const headers = {
        Authorization: `Bearer ${accessToken}`, // Assuming it's a Bearer token
        'Content-Type': 'application/json',
        Accept: 'application/json'
    };

    useEffect(() => {
        axios.get(`https://app1.techzaint.com/api/payment-info/${user.email}`, {
            headers: headers
        })
            .then(res => {
                setTimeout(() => {
                    setPaymentInfo(res.data.paymentinfo);
                    setHasLoaded(true)
                }, 100);
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <PageTitle title={`Order Summary`} />
            <Cover title={`Your Oder Summary`} img={img} />

            <div className='px-0 lg:px-24 pb-12 light1'>
                <div className="flex justify-center">

                    {
                        !hasLoaded ? <>
                            <div className='py-16'>
                                <Spinner1 />
                            </div>
                        </> :

                            paymentInfo.length > 0 ?
                                <>
                                    <div className="w-[350px] md:w-[500px] lg:w-full overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr className="bg-slate-950 text-white">
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Transaction ID</th>
                                                    <th>Phone</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Status</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    paymentInfo.map((payment, index) => <React.Fragment key={index + 1}>
                                                        <tr>
                                                            <td>{index + 1}</td>
                                                            <td>{payment.title}</td>
                                                            <td>{payment.transaction_id}</td>
                                                            <td>{payment.phone}</td>
                                                            <td>{payment.name}</td>
                                                            <td>{payment.price}</td>
                                                            <td>{payment.status == 'pending' ? <><span className='text-lg font-bold text-red-500'>Pending</span></> : <><Link to={`/dashboard/enrolled-item/${payment.course_id}`}><button className='btn btn-accent'>View Tuitorial</button></Link></>}</td>
                                                            <td>
                                                                <Link to={`/dashboard/invoice/${payment.invoice_no}`}>
                                                                    <button className='btn btn-square w-52'>
                                                                        <img src={invoiceIcon} width={30} alt="" /> Print Invoice
                                                                    </button>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </React.Fragment>)
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </>
                                :
                                <>
                                    <div>
                                        <h3 className='text-2xl font-semibold font-serif text-red-600 py-16'>No order hasbeen Found..!</h3>
                                    </div>
                                </>
                    }



                </div>
            </div>

        </div>
    );
}

export default OrderSummary;
