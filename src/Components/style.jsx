import React from 'react';
import svg1 from '../assets/yoga-svgrepo-com (1).svg';
import svg2 from '../assets/yoga-svgrepo-com (2).svg';
import svg3 from '../assets/yoga-svgrepo-com (3).svg';
import svg4 from '../assets/yoga-svgrepo-com (4).svg';
import svg5 from '../assets/yoga-svgrepo-com (5).svg';

const CenteredSVGComponent = () => {
  return (
    <div className="flex w-full justify-center items-center p-6 bg-[#ebc8ab]">
      <div className="flex flex-nowrap justify-center w-full gap-4">
        {/* SVG Images in a Single Row with Circular Shape */}
        <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-square rounded-full overflow-hidden">
          <img src="https://www.onindianpath.com/wp-content/uploads/2024/05/1000088871-1-scaled.jpg" alt="Yoga Pose 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-square rounded-full overflow-hidden">
          <img src="https://dr7f10k1l6bnm.cloudfront.net/wp-content/uploads/2023/12/leh-ladakh.jpg" alt="Yoga Pose 2" className="w-full h-full object-cover" />
        </div>
        <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-square rounded-full overflow-hidden">
          <img src={svg3} alt="Yoga Pose 3" className="w-full h-full object-cover" />
        </div>
        <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-square rounded-full overflow-hidden">
          <img src="https://images.unsplash.com/photo-1598091383021-15ddea10925d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Yoga Pose 4" className="w-full h-full object-cover" />
        </div>
        <div className="w-[120px] sm:w-[140px] md:w-[160px] lg:w-[180px] aspect-square rounded-full overflow-hidden">
          <img src="https://www.lordshotels.com/blog/cnpopjuebuzhzmqeoztkxi/assets/img/post/image_2024-08-16-12-58-58_66bf4d12653eb.jpg" alt="Yoga Pose 5" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default CenteredSVGComponent;
