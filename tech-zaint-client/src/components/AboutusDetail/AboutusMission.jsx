const AboutusMission = ({ img, title, des,title1,title2 }) => {
  return (
    <div>
      <div className="py-10 px-6 md:px-24 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="relative grid justify-center items-center border-green-500">
          <img src={img} className=" shadow-2xl" alt="" />
          <h3 className="text-3xl md:text-6xl font-bold text-slate-200 top-24 left-24 md:top-40 lg:top-48 md:left-32 lg:left-44 absolute">
            {title1}<span className="text-yellow-400">{title2}</span>
          </h3>
        </div>

        <div>
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold leading-[1.5] md:leading-[1.5]">
              {title}
            </h3>
            <p className="leading-[2]">{des}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutusMission;
