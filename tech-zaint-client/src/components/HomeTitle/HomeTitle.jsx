const HomeTitle = ({ title }) => {
  return (
    <div>
      <div className="flex gap-4 pb-8">
        <div className={` border-b-8 border-b-slate-400 w-24 `}></div>
        <div>
          <h3 className="text-4xl font-serif font-bold leading-[1.5]">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default HomeTitle;
