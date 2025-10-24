import React from 'react'

const MediaCard = () => {
  return (
    <div className="w-full  p-3 bg-white rounded-2xl">
      <div>
        <iframe className='w-full h-80'
          // width="560"
          // height="315"
          src="https://www.youtube.com/embed/kOlHtRyFaCE?si=CeSbTAe4bMLvqy5T"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className='py-4'>
        <h1 className="font-inter text-3xl text-midnight-green font-bold">
          "Facing the Heat: Climate Change Challenges in Africa"
        </h1>
        <p className="font-inter text-midnight-green leading-6 text-md md:text-lg mt-6">
          Climate change poses significant challenges to agriculture in East
          Africa, impacting food security and livelihoods. Rising temperatures
          and unpredictable rainfall patterns threaten crop yields, making it
          harder for farmers to grow staple foods. Droughts and floods have
          become more frequent, leading to soil degradation and loss of arable
          land.
        </p>
      </div>
    </div>
  );
}

export default MediaCard