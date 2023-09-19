import { useContext } from "react";
import { darkContext } from "../../context/darkmode/DarkContext";

const PaymentInstructionModal = () => {
    const{darkmode} = useContext(darkContext)

    return (
        <div>
            <dialog id="my_modal_1" className="modal">
                <div className={` modal-box ${darkmode?'dark':'light'}`}>
                    <div>
                        <div>
                            <h3 className="font-bold pb-3">Pay through the Bkash</h3>
                            <hr />
                        </div>
                        <div>
                            <h3><span className="font-bold">Step 1: </span> *247#</h3>
                            <h3><span className="font-bold">Step 2: </span> Send Money</h3>
                            <h3><span className="font-bold">Step 3: </span> Enter receiver Account No. <span className="text-pink-600 font-bold">01611765966</span></h3>
                            <h3><span className="font-bold">Step 4: </span> Enter Amount</h3>
                            <h3><span className="font-bold">Step 4: </span> Enter Reference (eg. your_name)</h3>
                            <h3><span className="font-bold">Step 5: </span> Enter PIN</h3>
                            <h3><span className="font-bold">Step 6: </span> Copy the Transaction Id and Paste here for the enrollment confirmation.</h3>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
}

export default PaymentInstructionModal;
