import { Button, Form, Input } from "antd";

import { useNavigate } from "react-router-dom";
import { AllImages } from "../../../images/AllImages";
import { IoMailOpenOutline } from "react-icons/io5";
import { GoArrowLeft } from "react-icons/go";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/verify-otp");
  };
  return (
    <div className="text-base-color sm:bg-[#DCDCF0] bg-white  flex justify-center items-center h-[100vh]">
      <div className="items-center justify-items-center  bg-white rounded-md md:px-[143px] px-8 py-[98px]">
        <div className=" flex justify-center items-center">
          <img
            src={AllImages.logo}
            alt="forgot_Password_Img"
            className="w-[245px] "
          />
        </div>
        {/* <div className="h-[80vh] w-[2px] bg-[#F5382C] hidden lg:block"></div> */}
        <div className="">
          <div className="">
            <div className="">
              <h1 className="text-2xl sm:text-3xl font-medium text-start mb-6 mt-9 whitespace-nowrap flex gap-2">
                <p>
                  <GoArrowLeft
                    onClick={handleBack}
                    className="cursor-pointer"
                  />
                </p>
                <p> Forgot password</p>
              </h1>
              <p className="text-[16px] mb-[24px] font-medium">
                Please enter your email address to reset your password
              </p>
            </div>

            <Form
              layout="vertical"
              className="bg-transparent w-full"
              onFinish={onFinish}
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Email is Required",
                  },
                ]}
                name="email"
                className="text-base-color text-center"
              >
                <Input
                  prefix={<IoMailOpenOutline className="mr-2" />}
                  placeholder="Enter your email"
                  type="email"
                  className="py-2 px-1 text-xl bg-site-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color !rounded-none"
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  className="w-full py-6 border border-secondary-color hover:border-secondary-color text-xl text-primary-color bg-secondary-color hover:!bg-secondary-color text-[18px] rounded-2xl "
                  htmlType="submit"
                >
                  Send OTP
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ForgotPassword;
