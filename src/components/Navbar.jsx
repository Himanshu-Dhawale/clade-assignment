import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white">
      <div className="w-full pr-4 pl-5 h-[116px] flex items-center justify-between md:pl-10">
        {/* <div className="absolute top-[24px] left-[40px] h-[65px]  flex items-center justify-between"> */}
        <div className="w-full h-[65px]  flex items-center justify-between">
          <div className="w-[100px] h-[61px] px-[9px] py-[28px] bg-[#E7E7E7] flex items-center justify-center">
            <h1 className="font-bold text-xl leading-[30px] text-[#DC4A2D]">
              Logo
            </h1>
          </div>
          <div className="flex gap-4 max-w-[683px] h-[78.85px]">
            <button className="w-[109px] h-[58px] flex items-center justify-center self-center gap-2 bg-[#DC4A2D] rounded-[49px]">
              <img
                src="briefcase-02.png"
                alt="briefcase"
                className="w-6 h-6"
              />
              <span className="font-normal text-xl text-[#FFFFFF]"> Jobs</span>
            </button>
            <div className="max-h-[74px] px-6 flex gap-10 justify-center items-center border-[0.5px] border-[#D1D1D1] rounded-[36px] shadow-[0px_4px_4px_0px_#00000040_inset] sm:px-10 md:px-[104px]">
              <div className="flex gap-2 items-center text-[#B0B0B0]">
                <img src="message-square-01.png" alt="messages" />
                <span>Messages</span>
              </div>
              <div className="flex gap-6">
                <div className="flex gap-2 items-center text-[#B0B0B0]">
                  <img src="coins-hand.png" alt="coins" />
                  <span>Payments</span>
                </div>
                <div className="flex gap-2 items-center text-[#B0B0B0]">
                  <img src="users-01.png" alt="users" />
                  <span>Application</span>
                </div>
              </div>
            </div>
          </div>
          {/* right side */}
          <div className="flex gap-4 items-center">
            <img src="bell-02.png" alt="bell" className="w-[23.3px] h-[25.33px]"/>
            <div className="flex items-center gap-[6px]">
              <img src="Rectangle 5 (1).png" alt="profile" className="w-[40px] h-[40px]"/>
              <img src="chevron-down.png" alt="arrow" className="w-[20px] h-[20px]"/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;