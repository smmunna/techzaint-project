import React from 'react';
import loadingGif from "../../assets/animation/loading.gif"

const Spinner1 = () => {
    return (
        <div>
             <>
              <div className="text-center pb-12">
                <div>
                  <img src={loadingGif} className='w-[130px]' alt="" />
                  {/* <span className="loading loading-spinner h-16 w-16 text-secondary"></span> */}
                </div>
              </div>
            </>
        </div>
    );
}

export default Spinner1;
