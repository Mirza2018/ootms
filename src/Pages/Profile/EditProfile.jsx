"";
import {
  Button,
  ConfigProvider,
  Form,
  Input,
  Select,
  Upload,
  DatePicker,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import dayjs from "dayjs";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";

const countryCodes = [
  { label: "+1", value: "US", flag: "https://flagcdn.com/w320/us.png" },
  { label: "+1", value: "CA", flag: "https://flagcdn.com/w320/ca.png" },
  { label: "+7", value: "RU", flag: "https://flagcdn.com/w320/ru.png" },
  { label: "+20", value: "EG", flag: "https://flagcdn.com/w320/eg.png" },
  { label: "+27", value: "ZA", flag: "https://flagcdn.com/w320/za.png" },
  { label: "+30", value: "GR", flag: "https://flagcdn.com/w320/gr.png" },
  { label: "+31", value: "NL", flag: "https://flagcdn.com/w320/nl.png" },
  { label: "+32", value: "BE", flag: "https://flagcdn.com/w320/be.png" },
  { label: "+33", value: "FR", flag: "https://flagcdn.com/w320/fr.png" },
  { label: "+34", value: "ES", flag: "https://flagcdn.com/w320/es.png" },
  { label: "+36", value: "HU", flag: "https://flagcdn.com/w320/hu.png" },
  { label: "+39", value: "IT", flag: "https://flagcdn.com/w320/it.png" },
  { label: "+40", value: "RO", flag: "https://flagcdn.com/w320/ro.png" },
  { label: "+41", value: "CH", flag: "https://flagcdn.com/w320/ch.png" },
  { label: "+44", value: "GB", flag: "https://flagcdn.com/w320/gb.png" },
  { label: "+45", value: "DK", flag: "https://flagcdn.com/w320/dk.png" },
  { label: "+46", value: "SE", flag: "https://flagcdn.com/w320/se.png" },
  { label: "+47", value: "NO", flag: "https://flagcdn.com/w320/no.png" },
  { label: "+48", value: "PL", flag: "https://flagcdn.com/w320/pl.png" },
  { label: "+49", value: "DE", flag: "https://flagcdn.com/w320/de.png" },
  { label: "+51", value: "PE", flag: "https://flagcdn.com/w320/pe.png" },
  { label: "+52", value: "MX", flag: "https://flagcdn.com/w320/mx.png" },
  { label: "+53", value: "CU", flag: "https://flagcdn.com/w320/cu.png" },
  { label: "+54", value: "AR", flag: "https://flagcdn.com/w320/ar.png" },
  { label: "+55", value: "BR", flag: "https://flagcdn.com/w320/br.png" },
  { label: "+56", value: "CL", flag: "https://flagcdn.com/w320/cl.png" },
  { label: "+57", value: "CO", flag: "https://flagcdn.com/w320/co.png" },
  { label: "+58", value: "VE", flag: "https://flagcdn.com/w320/ve.png" },
  { label: "+60", value: "MY", flag: "https://flagcdn.com/w320/my.png" },
  { label: "+61", value: "AU", flag: "https://flagcdn.com/w320/au.png" },
  { label: "+62", value: "ID", flag: "https://flagcdn.com/w320/id.png" },
  { label: "+63", value: "PH", flag: "https://flagcdn.com/w320/ph.png" },
  { label: "+64", value: "NZ", flag: "https://flagcdn.com/w320/nz.png" },
  { label: "+65", value: "SG", flag: "https://flagcdn.com/w320/sg.png" },
  { label: "+66", value: "TH", flag: "https://flagcdn.com/w320/th.png" },
  { label: "+81", value: "JP", flag: "https://flagcdn.com/w320/jp.png" },
  { label: "+82", value: "KR", flag: "https://flagcdn.com/w320/kr.png" },
  { label: "+84", value: "VN", flag: "https://flagcdn.com/w320/vn.png" },
  { label: "+86", value: "CN", flag: "https://flagcdn.com/w320/cn.png" },
  { label: "+90", value: "TR", flag: "https://flagcdn.com/w320/tr.png" },
  { label: "+91", value: "IN", flag: "https://flagcdn.com/w320/in.png" },
  { label: "+92", value: "PK", flag: "https://flagcdn.com/w320/pk.png" },
  { label: "+93", value: "AF", flag: "https://flagcdn.com/w320/af.png" },
  { label: "+94", value: "LK", flag: "https://flagcdn.com/w320/lk.png" },
  { label: "+95", value: "MM", flag: "https://flagcdn.com/w320/mm.png" },
  { label: "+98", value: "IR", flag: "https://flagcdn.com/w320/ir.png" },
  { label: "+211", value: "SS", flag: "https://flagcdn.com/w320/ss.png" },
  { label: "+212", value: "MA", flag: "https://flagcdn.com/w320/ma.png" },
  { label: "+213", value: "DZ", flag: "https://flagcdn.com/w320/dz.png" },
  { label: "+216", value: "TN", flag: "https://flagcdn.com/w320/tn.png" },
  { label: "+218", value: "LY", flag: "https://flagcdn.com/w320/ly.png" },
  { label: "+220", value: "GM", flag: "https://flagcdn.com/w320/gm.png" },
  { label: "+221", value: "SN", flag: "https://flagcdn.com/w320/sn.png" },
  { label: "+222", value: "MR", flag: "https://flagcdn.com/w320/mr.png" },
  { label: "+223", value: "ML", flag: "https://flagcdn.com/w320/ml.png" },
  { label: "+224", value: "GN", flag: "https://flagcdn.com/w320/gn.png" },
  { label: "+225", value: "CI", flag: "https://flagcdn.com/w320/ci.png" },
  { label: "+226", value: "BF", flag: "https://flagcdn.com/w320/bf.png" },
  { label: "+227", value: "NE", flag: "https://flagcdn.com/w320/ne.png" },
  { label: "+228", value: "TG", flag: "https://flagcdn.com/w320/tg.png" },
  { label: "+229", value: "BJ", flag: "https://flagcdn.com/w320/bj.png" },
  { label: "+230", value: "MU", flag: "https://flagcdn.com/w320/mu.png" },
  { label: "+231", value: "LR", flag: "https://flagcdn.com/w320/lr.png" },
  { label: "+232", value: "SL", flag: "https://flagcdn.com/w320/sl.png" },
  { label: "+233", value: "GH", flag: "https://flagcdn.com/w320/gh.png" },
  { label: "+234", value: "NG", flag: "https://flagcdn.com/w320/ng.png" },
  { label: "+235", value: "TD", flag: "https://flagcdn.com/w320/td.png" },
  { label: "+236", value: "CF", flag: "https://flagcdn.com/w320/cf.png" },
  { label: "+237", value: "CM", flag: "https://flagcdn.com/w320/cm.png" },
  { label: "+238", value: "CV", flag: "https://flagcdn.com/w320/cv.png" },
  { label: "+239", value: "ST", flag: "https://flagcdn.com/w320/st.png" },
  { label: "+240", value: "GQ", flag: "https://flagcdn.com/w320/gq.png" },
  { label: "+241", value: "GA", flag: "https://flagcdn.com/w320/ga.png" },
  { label: "+242", value: "CG", flag: "https://flagcdn.com/w320/cg.png" },
  { label: "+243", value: "CD", flag: "https://flagcdn.com/w320/cd.png" },
  { label: "+244", value: "AO", flag: "https://flagcdn.com/w320/ao.png" },
  { label: "+248", value: "SC", flag: "https://flagcdn.com/w320/sc.png" },
  { label: "+249", value: "SD", flag: "https://flagcdn.com/w320/sd.png" },
  { label: "+250", value: "RW", flag: "https://flagcdn.com/w320/rw.png" },
  { label: "+251", value: "ET", flag: "https://flagcdn.com/w320/et.png" },
  { label: "+252", value: "SO", flag: "https://flagcdn.com/w320/so.png" },
  { label: "+253", value: "DJ", flag: "https://flagcdn.com/w320/dj.png" },
  { label: "+254", value: "KE", flag: "https://flagcdn.com/w320/ke.png" },
  { label: "+255", value: "TZ", flag: "https://flagcdn.com/w320/tz.png" },
  { label: "+256", value: "UG", flag: "https://flagcdn.com/w320/ug.png" },
  { label: "+260", value: "ZM", flag: "https://flagcdn.com/w320/zm.png" },
  { label: "+263", value: "ZW", flag: "https://flagcdn.com/w320/zw.png" },
  { label: "+264", value: "NA", flag: "https://flagcdn.com/w320/na.png" },
  { label: "+265", value: "MW", flag: "https://flagcdn.com/w320/mw.png" },
];


const EditProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const profileData = location.state?.profileData
 

  const [form] = Form.useForm();
  const initialValues = {
    fullName: profileData?.fullName,
    email: profileData?.email,
    phoneCode: profileData?.phoneCode,
    phoneNumber: profileData?.phoneNumber,
    birthday: profileData?.birthday ? dayjs(profileData.birthday) : null,
    picture:profileData?.img
    
  }; 
  
  const [imageUrl,setImageUrl]=useState(initialValues.picture)

  const onFinish = (values) => {
    // Ensure dates are formatted as strings for backend compatibility
    const formattedValues = {
      ...values,
      birthday: values.birthday
        ? values.birthday.format("YYYY-MM-DD")
        : undefined,
    };
    console.log("Form Values:", formattedValues);
    navigate("/profile");
  };
  const handleImageUpload = (info)=> {
     if (info.file.status === "removed") {
       setImageUrl(initialValues.picture);
     } else {
       const file = info.file.originFileObj || info.file;
       if (file) {
         setImageUrl(URL.createObjectURL(file));
       } else {
         console.error("No file selected or file object missing");
       }
     }
   };

  return (
    <div className="p-4 lg:p-8 min-h-screen">
      <div className="flex justify-between items-center mb-8 ">
        <div className="flex items-center">
          <LeftOutlined
            className="text-black text-xl mr-4 cursor-pointer"
            onClick={() => navigate(-1)}
          />
          <h2 className="text-black text-2xl font-semibold">Edit Profile</h2>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 px-20">
        <ConfigProvider>
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            initialValues={initialValues}
          >
 <div className="relative w-fit">
 <img src={imageUrl} alt="" className="w-40 h-40 rounded-full object-cover object-top border border-secondary-color" />
 <Form.Item name="picture" className="mb-8 ">
              <Upload 
               maxCount={1}
                      listType="text"
                      beforeUpload={() => false}
                      accept="image/*"
                      multiple={false}
                      onChange={handleImageUpload}
                      className="absolute -top-7  text-end"
                      style={{
                        width: "100%",
                        height: "100%",
                        opacity: 0,
                        cursor: "pointer",
                      }}
              >
                {/* <img src="" alt="" />
                <FaUser className="text-6xl"/> */}
                
                <div className="w-fit p-2 border-2 border-white absolute left-28 top-0 bg-secondary-color rounded-full">
                <AiOutlineEdit className="text-primary-color " />
                </div>
              </Upload>
            </Form.Item>
 </div>
            <Form.Item
              label="Full Name"
              name="fullName"
              className=""
              rules={[
                { required: true, message: "Please input your full name!" },
              ]}
            >
              <Input placeholder="Enter Full Name" />
            </Form.Item>
            
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { type: "email", message: "Please enter a valid email!" },
              ]}
            >
              <Input placeholder="Enter Email" />
            </Form.Item>
            <Form.Item label="Phone Number" name="phoneCode">
              <div className="flex gap-2">
                <Select
                  options={countryCodes.map((country) => ({
                    label: (
                      <div className="flex items-center">
                        <img
                          src={country.flag}
                          alt={`${country.value} Flag`}
                          className="w-5 h-3 inline-block mr-2"
                        />
                        {country.label}
                      </div>
                    ),
                    value: country.value,
                  }))}
                />
                <Form.Item
                  name="phoneNumber"
                  noStyle
                  rules={[
                    {
                      required: true,
                      message: "Please input your phone number!",
                    },
                  ]}
                >
                  <Input placeholder="Enter Phone Number" />
                </Form.Item>
              </div>
            </Form.Item>
            <Form.Item label="Date of Birth" name="birthday">
              <DatePicker format="YYYY-MM-DD" />
            </Form.Item>

            <Button type="primary" block htmlType="submit" className="mt-4">
              Save Changes
            </Button>
          </Form>
        </ConfigProvider>
      </div>
    </div>
  );
};

export default EditProfile;
