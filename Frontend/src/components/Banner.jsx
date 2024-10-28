import React from "react";
import banner from "../../public/Banner.png";
import WhatsappCommunityBrn from "./WhatsappCommunityBtn";
import WhatsappCommunityBtn from "./WhatsappCommunityBtn";
function Banner() {
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row  my-[-20px] mb-10">
        <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-[#37b350]">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
            Find helpful student notes to support your studies. Our collection is designed to make learning easier and help you do your best in every subject.


            </p>
            {/* <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label> */}
          </div>
          <div className="flex gap-7">
          <a href="/course" className="btn mt-6 btn-secondary bg-[#692f95] border-none">
  Get Started
</a> 
<WhatsappCommunityBtn />
</div>

        </div>
        <div className=" order-1 w-full mt-20 md:w-1/2">
          <img
            src={banner}
            className="md:w-[430px] md:h-[400px] pl-3 md:ml-12"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Banner;
