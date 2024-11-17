import { Button, Form } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OTPInput from "react-otp-input";
import { AllImages } from "../../../public/images/AllImages";
import { GoArrowLeft } from "react-icons/go";

const OtpPage = () => {
  const [otp, setOtp] = useState("");

  const navigate = useNavigate();

  const handleOTPSubmit = () => {
    console.log("OTP:", otp);
    navigate("/update-password");
  };

  return (
    <div className="text-base-color sm:bg-[#DCDCF0] bg-white  flex justify-center items-center h-[100vh]">
      <div className="items-center justify-items-center  bg-white rounded-md md:px-[143px] px-8 py-[98px]">
        <div className="flex justify-center items-center">
          <img
            src={AllImages.logo}
            alt="forgot_Password_Img"
            className="w-[245px]"
          />
        </div>
        <div className=" ">
          <div className="">
            <div className="">
              <h1 className="text-[24px] font-medium text-start mb-[24px] mt-[35px] whitespace-nowrap flex gap-2 justify-center items-center">
               <Link to={`/forgot-password`}><GoArrowLeft className="text-3xl" /> </Link>
               
               
               
               Enter verification code
              </h1>
              {/* <p className="text-[16px] mb-[24px] ">
                Please check your email. We have sent a code to contact
                @gmail.com
              </p> */}
            </div>

            <Form layout="vertical" className="bg-transparent w-full">
              <Form.Item className="">
                <div className="flex justify-center items-center">
                  <OTPInput
                    inputStyle="!w-14 h-11 !sm:w-[76px] sm:h-16 text-[20px] sm:text-[30px] bg-transparent border border-input-color
                      hover:border-input-color focus:bg-transparent focus:border-input-color rounded-lg mr-[10px] sm:mr-5 text-secondary-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 !rounded-none "
                    value={otp}
                    onChange={setOtp}
                    numInputs={6}
                    renderInput={(props) => <input {...props} required />}
                  />
                </div>
              </Form.Item>
              <div className="flex justify-between py-1">
                {/* <p>Didn’t receive code?</p> */}
                {/* <Link
                  href="/otp-verification"
                  className="!text-[#F5382C] !underline font-semibold"
                >
                  Resend
                </Link> */}
              </div>

              <Form.Item>
                <Button
                  type="primary"
                  className="w-full py-6 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color hover:!bg-secondary-color text-[18px] rounded-2xl "
                  onClick={handleOTPSubmit}
                >
                  Verify
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OtpPage;
