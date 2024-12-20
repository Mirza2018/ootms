import { useState } from "react";
import { Input, Button, Form, ConfigProvider, Select } from "antd";
import {
  CalendarOutlined,
  EditOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const countryCodes = [
  { label: "+1", value: "US", flag: "https://flagcdn.com/w320/us.png" },
  { label: "+44", value: "UK", flag: "https://flagcdn.com/w320/gb.png" },
  { label: "+91", value: "IN", flag: "https://flagcdn.com/w320/in.png" },
  { label: "+880", value: "BD", flag: "https://flagcdn.com/w320/bd.png" }, // Bangladesh
  { label: "+92", value: "PK", flag: "https://flagcdn.com/w320/pk.png" }, // Pakistan
  { label: "+54", value: "AR", flag: "https://flagcdn.com/w320/ar.png" }, // Argentina
  { label: "+90", value: "TR", flag: "https://flagcdn.com/w320/tr.png" }, // Turkey
];

const Profile = () => {
  // eslint-disable-next-line no-unused-vars
  const [profileData, setProfileData] = useState({
    fullName: "Mr Ramandeep Singh",
    lastName: "",
    email: "mr.singh@example.com",
    phoneCode: "BD",
    phoneNumber: "01846875456",
    birthday: "2000-01-01",
    img: "/images/userDemo.png",
  });
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/edit-profile", { state: { profileData } });
  };

  return (
    <div className="p-4 lg:p-8 min-h-screen">
      <div className="flex justify-between items-center mb-8 xl:mx-40">
        <div className="flex items-center">
          <LeftOutlined
            className="text-black text-xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h2 className="text-black text-2xl font-semibold">
            Profile Information
          </h2>
        </div>
        <Button
          icon={<EditOutlined />}
          onClick={handleEditClick}
          className="bg-[#013564] text-white h-10"
        >
          Edit Profile
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 xl:mx-40">
        <div className="flex items-center gap-20 mx-48">
          <div className="flex flex-col items-center">
            <img src={profileData.img} className="w-48" alt="user" />

            <h3 className="xl:text-2xl font-bold mt-2">Admin</h3>
            <h2 className="text-xl lg:text-3xl font-medium">
              {profileData.fullName}{" "}
            </h2>
          </div>
          <div className="flex-1">
            <ConfigProvider
              theme={{
                components: {
                  Input: {
                    colorTextPlaceholder: "rgba(255,255,255,0.7)",
                    hoverBg: "#E8E8F5",
                    activeBg: "#E8E8F5",
                  },
                },
              }}
            >
              <Form layout="vertical">
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      First Name
                    </label>
                  }
                >
                  <Input
                    className="bg-[#E8E8F5] rounded-lg h-10 font-semibold w-96"
                    value={profileData.fullName}
                    readOnly
                  />
                </Form.Item>

                <Form.Item
                  label={
                    <label
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Email
                    </label>
                  }
                >
                  <Input
                    className=" bg-[#E8E8F5] rounded-lg h-10 font-semibold w-96"
                    value={profileData.email}
                    readOnly
                  />
                </Form.Item>
                <div className="flex flex-col">
                  <Form.Item
                    label={
                      <label
                        style={{
                          color: "black",
                          fontWeight: "bold",
                          fontSize: "18px",
                        }}
                      >
                        Phone Number
                      </label>
                    }
                  >
                    <div className="flex gap-2">
                      <Select
                        defaultValue={profileData.phoneCode}
                        className="h-10"
                        style={{ width: 150 }}
                        open={false}
                      >
                        {countryCodes.map((country) => (
                          <Select.Option
                            key={country.value}
                            value={country.value}
                          >
                            <img
                              src={country.flag}
                              alt={`${country.value} Flag`}
                              className="w-5 h-3 inline-block mr-2"
                            />
                            {country.label}
                          </Select.Option>
                        ))}
                      </Select>

                      <Input
                        className="bg-[#E8E8F5] rounded-lg h-10 font-semibold w-56"
                        value={profileData.phoneNumber}
                        readOnly
                      />
                    </div>
                  </Form.Item>
                </div>
                <Form.Item
                  label={
                    <label
                      style={{
                        color: "black",
                        fontWeight: "bold",
                        fontSize: "18px",
                      }}
                    >
                      Date of Birth
                    </label>
                  }
                >
                  <Input
                    className="bg-[#E8E8F5] rounded-lg h-10 font-semibold w-96"
                    value={profileData.birthday}
                    prefix={
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <CalendarOutlined />
                        <span style={{ marginLeft: "8px" }}></span>
                      </div>
                    }
                    readOnly
                  />
                </Form.Item>
              </Form>
            </ConfigProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
