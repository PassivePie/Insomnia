import React from 'react';

const LargeButton = ({directName, href}) => {
  return <a className="flex justify-center items-center py-4 px-14 w-full font-medium bg-gradient-to-t from-indigo-400 to-indigo-500 rounded-full hover:opacity-75 md:w-auto" href={href}>
  {directName}
</a>
};

export default LargeButton;
