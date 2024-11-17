import { Checkbox, Button, Input, Form } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AllImages } from "../../../images/AllImages";
import { IoLockClosedOutline, IoMailOpenOutline } from "react-icons/io5";

const SignIn = () => {
  const navigate = useNavigate(); // useNavigate hook for navigation

  const onFinish = (values) => {
    console.log("user:", values);

    navigate("/dashboard"); // Correct use of navigate function
  };
  return (
    <div className="text-base-color sm:bg-[#DCDCF0] bg-white h-[100vh] flex justify-center items-center ">
      <div className="items-center justify-items-center  bg-white rounded-md md:px-[143px] px-8 py-[98px]">
        <div className="md:mx-14">
          <img
            loading="lazy"
            src={AllImages.logo}
            alt="logo"
            className=" w-[245px] mx-auto"
          />
        </div>
        <div className=" mx-auto mt-[40px]">
          {/* -------- Sign In Page Header ------------ */}
          <div className="flex flex-col  ">
            <div className=" ">
              <h1 className="text-2xl sm:text-3xl font-medium text-start mb-6">
                Sign in to continue!
              </h1>
            </div>
          </div>
          {/* -------- Form Start ------------ */}

          <Form
            layout="vertical"
            className="bg-transparent w-full"
            onFinish={onFinish}
          >
            <Form.Item
              name="email"
              className="text-base-color text-base font-medium"
              rules={[
                {
                  required: true,
                  message: "Email is Required",
                },
              ]}
            >
              <Input
                prefix={<IoMailOpenOutline className="mr-2" />}
                placeholder="Enter your email"
                className="py-2 px-1 text-xl bg-site-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color !rounded-none"
              />
            </Form.Item>
            <Form.Item
              rules={[
                {
                  required: true,
                  message: "Password is Required",
                },
              ]}
              name="password"
              className="text-base-color   text-base font-medium"
            >
              <Input.Password
                prefix={<IoLockClosedOutline className="mr-2" />}
                placeholder="Enter your Password"
                className="py-2 px-1 text-xl bg-site-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color !rounded-none"
              />
            </Form.Item>
            <div className="flex justify-between items-center mt-6">
              <Checkbox className="text-[#2B4257] font-medium text-lg">
                Remember me
              </Checkbox>
              <Link
                to="/forgot-password"
                className="text-secondary-color font-medium text-lg"
              >
                Forgot Password?
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                className="w-full mt-6 py-6 border border-secondary-color hover:border-secondary-color text-[18px] text-primary-color bg-secondary-color hover:!bg-secondary-color rounded-2xl "
                htmlType="submit"
              >
                Sign In
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default SignIn;
