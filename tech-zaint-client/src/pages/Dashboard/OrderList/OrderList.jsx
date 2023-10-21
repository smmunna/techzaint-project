import React, { useEffect, useState } from 'react';
import img from "../../../assets/banner/banner2.jpg"
import Cover from '../../../components/Cover/Cover';
import PageTitle from '../../../components/PageTitle/PageTitle';
import axios from 'axios';
import Spinner1 from '../../../components/Spinner/Spinner1';
import moment from 'moment';
import OrderListModal from '../../../components/Dashboard/OrderListModal/OrderListModal';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false)
    const [orderModal, setOrderModal] = useState([])
    const [statusChange, setStatusChange] = useState('')
    const [orderId, setOrderId] = useState('')

    const getOrderList = () => {
        axios.get(`http://localhost:8000/api/order-list`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                setOrderList(res.data.orderList)
                setHasLoaded(true)
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getOrderList();
    }, [])

    // getting orderlist by id;
    const orderListByIdModal = (id) => {
        axios.get(`http://localhost:8000/api/order-list/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('access-token')}`
            }
        })
            .then(res => {
                res.data.map(mydata => {
                    setOrderModal(mydata)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    // approve or pending;
    const handleStatusChange = (e) => {
        setStatusChange(e.target.value)
    }

    const handleStatusSubmit = (e) => {
        e.preventDefault();
        const status = {
            status: statusChange
        }

        axios.put(`http://localhost:8000/api/order-status/${orderId}`, status)
            .then(res => {
                if (res.data.status == 'ok') {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Status changed successfully..',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    getOrderList();
                }
            })
            .catch(err => {
                console.log(err)
            })
    }



    return (
        <div>
            <PageTitle title={`Order List`} />
            <Cover title={`Check Order List`} img={img} />


            <div className={`px-0 lg:px-24 pb-12`}>
                <div className="flex justify-center">

                    {
                        !hasLoaded ? <>
                            <div className='py-16'>
                                <Spinner1 />
                            </div>
                        </> :

                            orderList.length > 0 ?
                                <>
                                    <div className="w-[350px] md:w-[650px] lg:w-full overflow-x-auto">
                                        <table className="table">
                                            {/* head */}
                                            <thead>
                                                <tr className="bg-slate-950 text-white text-center">
                                                    <th>#</th>
                                                    <th>Title</th>
                                                    <th>Status</th>
                                                    <th>Order Time</th>
                                                    <th>View Details</th>
                                                    <th colSpan={2}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    orderList.map((order, index) => <React.Fragment key={index + 1}>
                                                        <tr className='text-center'>
                                                            <td>{index + 1}</td>
                                                            <td>{order?.title}</td>
                                                            <td>{order.status == 'pending' ? <><span className='text-lg font-bold text-red-500'>Pending</span></> : <><span className='text-lg font-bold text-green-500'>Approved</span></>}</td>
                                                            <td>{moment(order.created_at).format("YYYY-MM-DD HH:mm:ss")}</td>
                                                            <td className='text-center'><Link onClick={() => orderListByIdModal(order?.id)}><button className='btn btn-neutral' onClick={() => document.getElementById('my_modal_3').showModal()}>View</button></Link></td>
                                                            <td>
                                                                <div className='flex justify-center items-center gap-2'>
                                                                    <Link onClick={() => setOrderId(order?.id)}><button className='btn btn-accent' onClick={() => document.getElementById('my_modal_4').showModal()}>Permission</button></Link>
                                                                    <button className='btn btn-error'>X</button>
                                                                </div>
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

            <OrderListModal order={orderModal} />
            {/* Modal for Update approve or reject order */}
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Order Status</h3>
                    <hr />
                    <div className='py-4'>
                        <form onSubmit={handleStatusSubmit}>
                            <div className='space-y-3'>

                                <select className=" login-input h-12 w-full" value={statusChange} onChange={handleStatusChange}>
                                    <option>Select Status</option>
                                    <option value={`pending`}>Pending</option>
                                    <option value={`approved`}>Approved</option>
                                </select>
                            </div>
                            <div className='mt-3'>
                                <button type='submit' className='btn btn-primary'>Change</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>

        </div>
    );
}

export default OrderList;
