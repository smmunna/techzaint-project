
const Spinner = ({item}) => {
    return (
        <div>
            {item.length <= 0 && (
            <>
              <div className="text-center pb-12">
                <div>
                  <span className="loading loading-spinner h-16 w-16 text-secondary"></span>
                </div>
              </div>
            </>
          )}
        </div>
    );
}

export default Spinner;
