import Cover from "../../../components/Cover/Cover";
import PageTitle from "../../../components/PageTitle/PageTitle";
import img from "../../../assets/cover/cover5.jpg";

const SendMessage = () => {
    return (
        <div>
            <PageTitle title={`Send Message`} />
            <Cover title={`Contact with Authority`} img={img} />
            <div className="px-2 lg:px-24 light1">
                <div className="flex justify-center">
                    <div className="py-12">
                    <div>
                        <h3 className="pb-2 text-2xl">For any infomation or urgent, Email us</h3>
                        <hr />
                    </div>
                        <div className="pt-2">
                            <h3 className="space-x-2"><span className="font-bold">Info:</span><a className="link-primary underline" href={`mailto:info@techzaint.com`}> info@techzaint.com</a></h3>
                        </div>
                        <div>
                            <h3 className="space-x-2"><span className="font-bold">Admin:</span><a className="link-primary underline" href={`mailto:admin@techzaint.com`}> admin@techzaint.com</a></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SendMessage;
