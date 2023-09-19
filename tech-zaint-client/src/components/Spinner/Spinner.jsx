import loadingGif from "../../assets/animation/loading.gif"

const Spinner = ({ item }) => {
  return (
    <div>
      {item.length <= 0 && (
        <>
          <div className="flex justify-center py-12">
            <div>
              <img src={loadingGif} className='w-[130px]' alt="" />
              {/* <span className="loading loading-spinner h-16 w-16 text-secondary"></span> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Spinner;
