import React from 'react'
import { Link } from 'react-router';

import { locust } from '../../assets/assets';
import { elohozino } from '../../assets/assets';

const CardRow = () => {
  return (
    <div>
      <div>
        <img src={locust} alt="blog-image" />
      </div>
      <div className='font-inter'>
        <div className="flex flex-col gap-5">
          <h1 className="text-rich-black font-bold text-md md:text-4xl">
            Ethiopia's Battle Against the Locust Invation
          </h1>
          <p className="">
            RAISSAT has embarked on an inspiring journey to empower smallholder
            farmers by providing them with extensive training in sustainable
            soil management techniques and effective water conservation
            practices. Over the past few<Link className='font-semibold text-rich-black' to="">...Read More</Link>
          </p>
        </div>
        <div className='flex justify-end'>
          <div className='flex gap-3'>
            <img className='rounded-full size-12' src={elohozino} alt="Publisher-profile" />
            <span>
              <h2 className='font-semibold'>By Elohozino O. Benneth</h2>
              <p className='text-xs'>June 10, 2024</p>
            </span>
          </div>
          {/* <Link to="">...read More</Link> */}
        </div>
      </div>
    </div>
  );
}

export default CardRow