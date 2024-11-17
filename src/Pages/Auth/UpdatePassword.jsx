import { Button, Form, Input } from "antd";

import { IoLockClosedOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { AllImages } from "../../../images/AllImages";
import { GoArrowLeft } from "react-icons/go";

const ChangePassword = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1); // Goes back to the previous page
  };
  const onFinish = (values) => {
    console.log("Success:", values);
    navigate("/signin");
  };

  return (
    <div className="text-base-color sm:bg-[#DCDCF0] bg-white h-[100vh] flex justify-center items-center ">
      <div className="items-center justify-items-center  bg-white rounded-md md:px-[143px] px-8 py-[98px]">
        <div className="md:mx-[61px]">
          <img
            loading="lazy"
            src={AllImages.logo}
            alt="logo"
            className=" w-[245px] mx-auto"
          />
        </div>
        <div className="mx-auto mt-[1px]"></div>
        <div className="flex flex-col ">
          {/* -------- update Password Page Header ------------ */}
          <div className="mb-2">
            <div className="flex items-center gap-2 my-2">
              <GoArrowLeft onClick={handleBack} className="cursor-pointer" />
              <h1 className="text-[24px] font-medium text-start">
                Set a new password
              </h1>
            </div>
            <p className="text-[16px] mb-[24px] ">
              Your password must be 8-10 character long.
            </p>
          </div>
          {/* -------- Form Start ------------ */}
          <Form
            layout="vertical"
            className="bg-transparent w-full"
            onFinish={onFinish}
          >
            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
            Password
          </Typography.Title> */}
            <Form.Item
              rules={[
                {
                  required: true,
                  min: 8,
                },
              ]}
              name="password"
              className="text-base-color"
            >
              <Input.Password
                prefix={<IoLockClosedOutline className="mr-2" />}
                placeholder="Set your password"
                className="py-2 px-1 text-xl bg-site-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color !rounded-none"
              />
            </Form.Item>
            {/* <Typography.Title level={4} style={{ color: "#222222" }}>
            Confirm Password
          </Typography.Title> */}
            <Form.Item
              name="confirmPassword"
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The two passwords that you entered do not match!"
                      )
                    );
                  },
                }),
              ]}
              className="text-base-color"
            >
              <Input.Password
                prefix={<IoLockClosedOutline className="mr-2" />}
                placeholder="Re-enter password"
                className="py-2 px-1 text-xl bg-site-color !border-x-0 !border-t-0 !border-b-2 !border-b-[#1D242D] !ring-0 text-base-color hover:bg-transparent hover:border-secoundary-color focus:bg-transparent focus:border-secoundary-color !rounded-none"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                className="w-full mt-[24px] py-6 border !border-secondary-color  text-[18px] text-primary-color !bg-secondary-color  rounded-2xl "
                htmlType="submit"
              >
                Update Password
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
