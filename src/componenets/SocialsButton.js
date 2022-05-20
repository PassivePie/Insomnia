import React from 'react';

const SocialsButton = ({href, directName, socialsImage}) => {
  return <a className="resize-none justify-left py-4 px-7 font-medium text-white bg-black rounded-2xl hover:opacity-75 w-40" href={href}>
  <div className="flex flex-row">
  <img className="object-contain h-8 w-8" alt="socialsImage" src={socialsImage}></img>
  <h1 className="pt-1 pl-2">{directName}</h1>
  </div>
</a>;
};

export default SocialsButton;
