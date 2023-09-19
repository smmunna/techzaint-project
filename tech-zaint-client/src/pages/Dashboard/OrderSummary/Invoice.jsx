import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import logo from "../../../assets/brand/brand.png";
import { useReactToPrint } from "react-to-print";
import Spinner1 from "../../../components/Spinner/Spinner1";

const Invoice = () => {
    const [invoiceItem, setInvoiceItem] = useState([])
    const { id } = useParams();
    const accessToken = localStorage.getItem('access-token')
    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Months are zero-based, so add 1
    const currentDay = currentDate.getDate();

    const componentRef = useRef();
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    useEffect(() => {
        axios.get(`https://app1.techzaint.com/api/invoice-item/${id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        })
            .then(res => {
                res.data.invoice_no.map(invoicedata => {
                    setInvoiceItem(invoicedata)
                })
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>
            <div className="px-5 lg:px-24 my-24">
                {
                    invoiceItem == 0 ? <>
                        <div>
                            <Spinner1 />
                        </div>
                    </>
                        :
                        <>
                            <div className="border-2 border-slate-200 p-2 py-6 relative" ref={componentRef}>
                                <div className="md:flex md:justify-between">
                                    <div>
                                        <div className="flex items-center gap-5">
                                            <div>
                                                <img src={logo} width={50} alt="" />
                                            </div>
                                            <div>
                                                <h3 className="text-3xl font-serif font-semibold">TechZaint</h3>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="bg-slate-800 p-2 md:p-4 md:w-52">
                                        <h3 className="md:text-3xl font-bold text-white">Invoice</h3>
                                    </div>
                                </div>

                                <div>
                                    <div className="md:pl-5">
                                        <div className="space-y-1 py-2">
                                            <h3><span className="font-bold">Invoice No:</span> TechZaint-{invoiceItem?.invoice_no}</h3>
                                            <h3><span className="font-bold">Date:</span> {currentDay}/{currentMonth}/{currentYear}</h3>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="md:pl-5">
                                        <h3 className="text-lg font-bold underline">Information:</h3>
                                        <div className="space-y-1 py-2">
                                            <h3><span className="font-bold">Name:</span> {invoiceItem?.name}</h3>
                                            <h3><span className="font-bold">Email:</span> {invoiceItem?.email}</h3>
                                            <h3><span className="font-bold">Phone:</span> {invoiceItem?.phone}</h3>
                                            <h3><span className="font-bold">TrxID:</span> {invoiceItem?.transaction_id}</h3>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="md:pl-5 text-right pr-4">
                                        <h3 className="text-lg font-bold underline">Items Info:</h3>
                                        <div className="space-y-1 py-2">
                                            <h3 className="text-2xl  font-bold">{invoiceItem?.title}</h3>
                                            <h3 className="text-2xl  font-bold"> {invoiceItem?.price} BDT.</h3>
                                        </div>
                                        {/* <hr /> */}
                                    </div>
                                </div>


                                {/* Approved or Pending */}

                                <div>
                                    {
                                        invoiceItem.status == 'pending' ?
                                            <>
                                                <div className="absolute top-44 left-48 lg:top-32 lg:left-72">
                                                    <h3 className=" text-3xl lg:text-[80px] font-semibold text-red-200 -rotate-45">Pending</h3>
                                                </div>
                                            </>
                                            :
                                            <>
                                                <div className="absolute top-44 left-48 lg:top-44 lg:left-60">
                                                    <h3 className="text-3xl lg:text-[80px] font-semibold text-green-200 -rotate-45">Approved</h3>
                                                </div>
                                            </>
                                    }
                                </div>

                            </div>

                            {/* Handle Print Button */}
                            <div className="flex justify-center py-4">
                                <div>
                                    <button className="btn btn-accent" onClick={handlePrint}>Print Invoice</button>
                                </div>
                            </div>
                        </>
                }


            </div>
        </div>
    );
}

export default Invoice;
