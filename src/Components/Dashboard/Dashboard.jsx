import { ConfigProvider, Select } from "antd";
import Bar_Chart from "../Chart/BarChart";

import { AllIcons } from "../../../images/AllImages";
import { useEffect, useState } from "react";
import axios from "axios";
import UsersTable from "../Tables/UsersTable";

// import Line_Chart from "../Chart/LineChart";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/userData.json");
        const recentData = response.data?.slice(0, 5);

        setData(recentData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-full min-h-[90vh] px-1 sm:px-2 lg:px-2">
      <div>
        {/* Card Items */}
        <div className="flex flex-col sm:flex-row gap-1 lg:gap-5">
          <div className="flex gap-5 flex-wrap rounded-lg border-2 border-[#1D242D] py-2 px-1 lg:p-3  items-center justify-center flex-1">
            <div className="flex gap-2 xl:gap-4 items-center">
              <div className="p-3 rounded-full w-fit">
                <img src={AllIcons.coins} className="size-16" alt="" />
              </div>
              <div className="text-start">
                <p className="text-xs lg:text-base xl:text-2xl text-[#1D242D] mb-1">
                  Total Earning
                </p>
                <p className="text-sm lg:text-base xl:text-3xl font-semibold text-[#1D242D]">
                  $1500
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap rounded-lg border-2 border-[#1D242D] py-2 px-1 lg:p-3  items-center justify-center flex-1">
            <div className="flex gap-2 xl:gap-4 items-center">
              <div className="p-3 rounded-full w-fit">
                <img src={AllIcons.user} className="size-16" alt="" />
              </div>
              <div className="text-start">
                <p className="text-xs lg:text-sm xl:text-2xl text-[#1D242D] mb-1">
                  Total User
                </p>
                <p className="text-sm lg:text-base xl:text-3xl font-semibold text-[#1D242D]">
                  100
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-5 flex-wrap rounded-lg border-2 border-[#1D242D] py-2 px-1 lg:p-3 items-center justify-center flex-1">
            <div className="flex gap-2 xl:gap-4 items-center">
              <div className="p-3 rounded-full w-fit">
                <img src={AllIcons.driver} className="size-16" alt="" />
              </div>
              <div className="text-start">
                <p className="text-xs lg:text-sm xl:text-2xl text-[#1D242D] mb-1">
                  Total Driver
                </p>
                <p className="text-sm lg:text-base xl:text-3xl font-semibold text-[#1D242D]">
                  25
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-5 mt-8">
          <div
            className="w-full p-3 bg-[#FFFFFF] rounded-lg flex flex-col"
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          >
            <div className="flex justify-between text-base-color mt-4">
              <div>
                <p className="text-2xl sm:text-3xl font-bold">User Ratio</p>
                <div className="my-2">
                  <div>
                    <ul className="flex gap-10 ml-8 list-disc">
                      <li className="text-[#2B4257] text-2xl">
                        <span className="text-[#2B4257] text-xl font-semibold">
                          Users
                        </span>
                      </li>
                      <li className="text-[#989898] text-2xl">
                        <span className="text-[#989898] text-xl font-semibold">
                          Driver
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <ConfigProvider
                  theme={{
                    components: {
                      Select: {
                        fontSize: 16,
                        colorBorder: "#222222",
                      },
                    },
                  }}
                >
                  <Select
                    defaultValue="2024"
                    style={{ width: 80 }}
                    options={[
                      { value: "2024", label: "2024" },
                      { value: "2023", label: "2023" },
                      { value: "2022", label: "2022" },
                      { value: "2021", label: "2021" },
                    ]}
                  />
                </ConfigProvider>
              </div>
            </div>
            <hr />
            <div>
              <Bar_Chart />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 mt-5">
          <div
            className="bg-[#FFFFFF] rounded flex-1 p-3"
            style={{ boxShadow: "0px 0px 5px 2px #00000040" }}
          >
            <div className="flex justify-between items-center mx-3 py-2">
              <p className="text-2xl font-semibold text-base-color">
                Recent users
              </p>
              {/* <div>
                <Link to="/users">
                  <p className="text-lg text-base-color underline">view all</p>
                </Link>
              </div> */}
            </div>
            <UsersTable data={data} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
