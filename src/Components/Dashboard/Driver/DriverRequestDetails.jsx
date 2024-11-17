import { Button } from "antd";
import { useParams, useLocation } from "react-router-dom";

const DriverDetails = () => {
  const { id } = useParams(); // Get `id` from the URL
  const location = useLocation();
  const request = location.state; // Access the request data from state

  if (!request) return <p>No driver data available for ID: {id}</p>;

  return (
    <div className="p-8 bg-white rounded-xl">
      <div className=" flex  mb-4">
        <div className="flex justify-center items-center">
          <img src="/images/userDemo.png" className="me-2" alt="" />
        </div>

        <div>
          <span className="text-xl font-bold text-[#013564] cursor-pointer">
            {request.driverName}
          </span>
          <p className="text-gray-600">Truck: {request.truckNumber}</p>
          <p className="text-gray-600">Phone: {request.phone}</p>
          <div className="mt-4">
            <Button
              className={`px-5 py-1 rounded-lg mr-2 border ${
                request.accepted
                  ? "bg-green-600 font-bold text-white border-green-600"
                  : "bg-[#013564] text-white border-[#013564] "
              }`}
              disabled={request.accepted}
            >
              {request.accepted ? "Accepted" : "Accept"}
            </Button>
            <Button className="bg-white text-[#013564] px-5 py-1 rounded-lg border border-[#013564]">
              Delete
            </Button>
          </div>
        </div>
      </div>

      <h1 className="text-lg font-semibold mb-[18px]">Personal Information</h1>
      <div className="sm:flex gap-1">
        <div className="font-bold">Title:</div>
        <div>{request?.role}</div>
      </div>
      <div className="sm:flex gap-1">
        <div className="font-bold">Name:</div>
        <div>{request?.driverName}</div>
      </div>
      <div className="sm:flex gap-1">
        <div className="font-bold">Gender:</div>
        <div>{request?.gender}</div>
      </div>

      <div className="sm:flex gap-1">
        <div className="font-bold">Email:</div>
        <div>{request?.email}</div>
      </div>

      <div className="sm:flex gap-1">
        <div className="font-bold">Phone:</div>
        <div>{request?.phone}</div>
      </div>

      <div className="sm:flex gap-1">
        <div className="font-bold">Date of Birth:</div>
        <div>{request?.dateOfBirth}</div>
      </div>

      {/* <div className="sm:flex gap-1">
                <div className="font-bold">Address:</div>
                <div>{currentRecord?.address}</div>
              </div> */}
      <div className="sm:flex gap-1">
        <div className="font-bold">Truck Number:</div>
        <div>{request?.truckNumber}</div>
      </div>
      <h1 className="text-lg font-semibold my-[18px]">Documents</h1>

      <div className="flex gap-3">
        <div className="bg-[#DCDCF0] w-fit h-fit p-2 rounded-lg">
          <div className="bg-[#2b4257] rounded-full  w-fit h-fit py-5 px-6">
            <img src="/images/pdf.png" className="w-8 h-auto" alt="" />
          </div>
          <p className="text-center mt-1">Resume.pdf</p>
        </div>

        <div className="bg-[#DCDCF0] w-fit h-fit p-2 rounded-lg">
          <div className="bg-[#2b4257] rounded-full  w-fit h-fit py-5 px-6">
            <img src="/images/pdf.png" className="w-8 h-auto" alt="" />
          </div>
          <p className="text-center mt-1">Certificate.pdf</p>
        </div>
      </div>
    </div>
  );
};

export default DriverDetails;
