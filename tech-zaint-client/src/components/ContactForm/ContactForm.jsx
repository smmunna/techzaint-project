import { useContext } from "react";
import {darkContext} from "../../context/darkmode/DarkContext"

const ContactForm = () => {
    const {darkmode}=useContext(darkContext)
  return (
    <div className={`flex justify-center border-2 border-blue-950 p-5 ${darkmode?'dark':'light'}`}>
      <form action="#">
        <div>
          <p>Name:</p>
          <input
            className="login-input p-2 w-full md:w-[400px]"
            type="text"
            name="name"
            placeholder="Enter your Full Name"
            required
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            className="login-input p-2 w-full md:w-[400px]"
            type="email"
            name="email"
            placeholder="Enter your valid email address"
            required
          />
        </div>
        <div>
          <p>Phone:</p>
          <input
            className="login-input p-2 w-full md:w-[400px]"
            type="number"
            name="phone"
            placeholder="Enter your valid phone number"
            required
          />
        </div>
        <div>
          <p>Subject:</p>
          <input
            className="login-input p-2 w-full md:w-[400px]"
            type="number"
            name="phone"
            placeholder="Use Action word only, not details"
            required
          />
        </div>
        <div>
          <p>Message:</p>
          <textarea cols={50} rows={5}
            className="login-input p-2 w-full md:w-[400px]"
            type="number"
            name="phone"
            placeholder="Tell me details about your query"
            required
          />
        </div>
        <div className="mt-4">
            <button className="btn btn-accent w-[150px]" disabled>Send</button>
        </div>
        <p className=" mt-4">** <i>For urgent, send use email: <a className="text-red-500" href="mailto:info@techzaint.com">info@techzaint.com</a></i></p>
      </form>
    </div>
  );
};

export default ContactForm;
