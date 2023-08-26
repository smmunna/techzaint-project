const CompanyStatus = ({ img, digit, title }) => {
  return (
    <div>
      <div className="border-b-2 pt-12 pb-4 md:border-b-0 h-full text-center">
        <div className="space-y-4">
          <div className="flex justify-center">
            <div>
              <img src={img} width={80} alt="" />
            </div>
          </div>
          <div>
            <h3 className="text-5xl font-bold">{digit}</h3>
          </div>
          <div>
            <h3 className="text-2xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStatus;
