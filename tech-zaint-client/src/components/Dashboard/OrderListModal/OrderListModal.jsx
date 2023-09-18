
const OrderListModal = ({ order }) => {
    return (
        <div className="text-left">
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg pb-2">Order Details</h3>
                    <hr />
                    <div>
                        <div>
                            <p className="py-2"><span className="font-bold">TrnXId:</span> {order?.transaction_id}</p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Invoice No:</span> {order?.invoice_no}</p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Email:</span><a className="underline link-primary" href={`mailto:${order?.email}`}> {order?.email}</a></p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Optional Mail:</span> <a className="underline link-primary" href={`mailto:${order?.optional_email}`}> {order?.optional_email}</a></p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Phone:</span> <a className="link-primary" href={`tel:${order?.phone}`}>{order?.phone}</a></p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Title:</span> {order?.title}</p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Price:</span> {order?.price} BDT</p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Name:</span> {order?.name}</p>
                            <hr />
                        </div>
                        <div>
                            <p className="py-2"><span className="font-bold">Comments:</span> {order?.comments}</p>
                            <hr />
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default OrderListModal;
