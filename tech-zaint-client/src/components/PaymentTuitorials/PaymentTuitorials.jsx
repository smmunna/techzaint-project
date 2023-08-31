import { Link } from "react-router-dom";

const PaymentTuitorials = () => {
  return (
    <div>
      <div className="border-2 p-4">
        <h3>
          How to pay through Online ?{" "}
          <Link to={`#`} className="link-primary underline">
            Watch Now
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default PaymentTuitorials;
