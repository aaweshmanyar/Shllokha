import React from 'react';
import svg1 from '../assets/yoga-svgrepo-com (1).svg';
import svg2 from '../assets/yoga-svgrepo-com (2).svg';
import svg3 from '../assets/yoga-svgrepo-com (3).svg';
import svg4 from '../assets/yoga-svgrepo-com (4).svg';
import svg5 from '../assets/yoga-svgrepo-com (5).svg';

const CenteredSVGComponent = () => {
  return (
    <div className="flex w-full justify-center items-center overflow-x-auto space-x-6 p-4 bg-[#ebc8ab]">
      {/* SVG Images in a Single Row */}
      <div className="flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[180px]">
        <img src={svg1} alt="Yoga Pose 1" className="w-full h-full object-contain" />
      </div>
      <div className="flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[180px]">
        <img src={svg2} alt="Yoga Pose 2" className="w-full h-full object-contain" />
      </div>
      <div className="flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[180px]">
        <img src={svg3} alt="Yoga Pose 3" className="w-full h-full object-contain" />
      </div>
      <div className="flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[180px]">
        <img src={svg4} alt="Yoga Pose 4" className="w-full h-full object-contain" />
      </div>
      <div className="flex-shrink-0 w-[150px] sm:w-[200px] lg:w-[250px] h-[120px] sm:h-[150px] lg:h-[180px]">
        <img src={svg5} alt="Yoga Pose 4" className="w-full h-full object-contain" />
      </div>
    </div>
  );
};

export default CenteredSVGComponent;
