const HomeService = ({ img, title, des }) => {
  return (
    <div>
      <div className="px-12 h-full bg-slate-150 py-12 border-4 shadow-2xl border-b-red-600 space-y-4 transition-transform duration-500 ease-in-out hover:scale-110 ">
        <div>
          <img src={img} width={70} alt="" />
        </div>
        <div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        <div>
          <p>{des}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeService;
