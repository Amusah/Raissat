import React from 'react'
import { rightArrow } from '../../assets/assets'

const Card = ({name, role, img, profile}) => {
  return (
    <div className="bg-white p-3 rounded-xl shadow-2xl">
      <div className="text-center mb-3">
        <img className="w-full" src={img} alt="profile" />
      </div>
      <div className="text-center mb-3">
        <h3 className="font-semibold">{name}</h3>
        <span className="text-sm">{role}</span>
      </div>
      <p className="text-sm leading-6">
        {profile}
      </p>
      <div className="flex justify-end my-5">
        <img className="size-8 cursor-pointer" src={rightArrow} alt="arrow" />
      </div>
    </div>
  );
}

export default Card