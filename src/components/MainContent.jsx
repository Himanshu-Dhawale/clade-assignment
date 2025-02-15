import React from "react";
const MainContent = () => {
  return (
    <main className="w-auto max-w-[1319px]">
      <div className="w-auto h-auto  pt-[36px] pl-[100px]">
        <div className="w-auto h-auto max-w-[662px] flex gap-6 pb-6 items-center">
          <h1 className="font-bold text-[35px] leading-[52.5px]">
            Senior Product Designer
          </h1>
          <p className="font-normal text-sm leading-5">posted 2 days ago</p>
        </div>
        <div className="w-auto h-auto max-w-[379px] max-h-[30px] flex gap-4">
          <div className="w-auto h-auto max-w-[175px] max-h-[30px] flex gap-2 mt-1 items-center">
            <img
              src="marker-pin-01.png"
              alt="location"
              className="w-6 h-6"
            />
            <h2 className="font-normal text-xl leading-[30px]">
              Delaware, USA
            </h2>
          </div>
          <div className="w-auto max-w-[168px] h-auto max-h-[30px] flex gap-3 items-center">
            <img
              src="coins-stacked-03.png"
              alt="coins"
              className="w-6 h-6"
            />
            <h2 className="font-normal text-xl leading-[30px]">$300k-$400k</h2>
          </div>
        </div>
        <div className="w-auto max-w-[872px] h-auto flex gap-16 mt-16">
          <div className="w-auto max-w-[170px] h-auto max-h-[123px] flex gap-[8px] flex-col">
            <h2 className="font-normal text-sm">Skills Required</h2>
            <div className="w-auto max-w-[131px] h-auto max-h-[94px] flex gap-2 flex-col">
              <div className="w-auto max-w-[70px] h-auto max-h-[26px] rounded-md border-[1px] px-1 py-[6px] flex gap-[3px] items-center">
                <img
                  src="image 1.png"
                  alt="Figma"
                  className="w-4 h-4"
                />
                <p className="font-normal text-xs leading-[18px]">Figma</p>
              </div>
              <div className="w-auto max-w-[131px] h-auto max-h-[26px] rounded-md border-[1px] px-1 py-[6px] flex gap-[3px] items-center">
                <img
                  src="image 2.png"
                  alt="Figma"
                  className="w-4 h-4"
                />
                <p className="font-normal text-xs leading-[18px]">
                  Adobe Illustrator
                </p>
              </div>
              <div className="w-auto max-w-[91px] h-auto max-h-[26px] rounded-md border-[1px] px-1 py-[6px] flex gap-[3px] items-center">
                <img
                  src="image 6.png"
                  alt="Figma"
                  className="w-4 h-4"
                />
                <p className="font-normal text-xs leading-[18px]">Adobe XD</p>
              </div>
            </div>
          </div>
          <div className="w-[170px] h-auto max-h-[51px] flex gap-2 flex-col">
            <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
              Preferred Language
            </h2>
            <h2 className="font-normal text-2xl leading-[24px]">English</h2>
          </div>
          <div className="w-[170px] h-auto max-h-[51px] flex gap-2 flex-col">
            <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
              Type
            </h2>
            <h2 className="font-normal text-2xl leading-[24px]">Full time</h2>
          </div>
          <div className="w-[170px] h-auto max-h-[51px] flex gap-2 flex-col">
            <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
              Years of Experience
            </h2>
            <h2 className="font-normal text-2xl leading-[24px]">
              3+ Years of Experience
            </h2>
          </div>
        </div>
        <div className="w-auto max-w-[526px] h-auto flex gap-2 mt-10 flex-col flex-wrap">
          <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
            About the job
          </h2>
          <p>
            1. Handle the UI/UX research design
            <br></br>
            2. Work on researching on latest web applications designs & trends
            <br></br>
            3. Work on conceptualizing and visualizing<br></br>
            4. Work on creating graphics content and other graphic related works
            <br></br>
            Benefits:<br></br>
            Health insurance<br></br>
            Provident Fund<br></br>
            Schedule:<br></br>
            Day shift<br></br>
            Supplemental pay types:<br></br>
            Performance bonus<br></br>
            Yearly bonus<br></br>
            Work Location: In person
          </p>
        </div>
        <div className=" h-auto flex gap-4 mt-10 pt-5 pb-6 border-t border-solid border-[#E7E7E7] flex-col">
          <div className="w-auto max-w-[144px] h-auto flex gap-[12px] items-center">
            <img
              src="Rectangle 43.png"
              alt="Atlassian"
              className="w-[40px] h-[40px] rounded-[4px]"
            />
            <h2 className="font-normal text-xl leading-[30px]">Atlassian</h2>
            <button className="bg-[#E0EBF9] w-[67px] h-[26px] ml-7 shadow-lg ">
              {" "}
              Follow
            </button>
          </div>

          <div className="w-[736px] h-auto flex gap-[48px]">
            <div className="w-[344px] h-auto max-h-[51] flex flex-col gap-2">
              <h2 className="text-[#6E6D6D] font-normal text-sm leading-[21px]">
                Company size
              </h2>
              <p className="w-[400px] text-sm leading-[21px]">
                1k - 2k Employees
              </p>
              <div className="w-[344px] h-[51px] flex flex-col gap-2">
                <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
                  Sector
                </h2>
                <p className="font-normal text-base leading-[24px]">
                  Information Technology, Infrastructure
                </p>
              </div>
              <div className="w-[344px] h-[51px] flex flex-col gap-2">
                <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
                  Founded In
                </h2>
                <p className="font-normal text-base leading-[24px]">2019</p>
              </div>
            </div>
            <div className="w-[344px] h-[51px] flex flex-col gap-2">
              <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
                Type
              </h2>
              <p className="font-normal text-base leading-[24px]">Private</p>
              <div className="w-[344px] h-[51px] flex flex-col gap-2">
                <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
                  Funding
                </h2>
                <p className="font-normal text-base leading-[24px]">
                  Bootstrapped
                </p>
              </div>
              <div className="w-[344px] h-[51px] flex flex-col gap-2">
                <h2 className="font-normal text-sm leading-[21px] text-[#6E6D6D]">
                  Founded By
                </h2>
                <p className="font-normal text-base leading-[24px]">
                  Scott Farquhar, Mike Cannon-Brookes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainContent;