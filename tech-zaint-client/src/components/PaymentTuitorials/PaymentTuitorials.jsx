import { Link } from "react-router-dom";
import PaymentInstruction from "../../components/PaymentInstructionModal/PaymentInstructionModal"

const PaymentTuitorials = () => {
  return (
    <div>
      <div className="border-2 p-4">
        <h3>
          How to pay through Online ?{" "}
          <Link to={`#`} onClick={() => document.getElementById('my_modal_1').showModal()} className="link-primary underline">
            Watch Now
          </Link>
        </h3>
      </div>
      <PaymentInstruction/>
    </div>
  );
};

export default PaymentTuitorials;
