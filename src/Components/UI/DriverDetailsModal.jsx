/* eslint-disable react/prop-types */
import { Modal } from "antd";

const DriverDetailsModal = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
  handleBlock,
}) => {
  return (
    <Modal
      title={
        <div className="pt-7">
          <h2 className="text-secondary-color text-4xl ">Driver Details</h2>
        </div>
      }
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      style={{ textAlign: "center" }}
      className="lg:min-w-[800px]"
    >
      <div className="p-10">
        <div className="">
          <div className="flex justify-start items-center p-4 ">
            {/* Avatar */}
            <img
              src='/public/images/userDemo.png'
              alt={currentRecord?.driverName}
              className="w-14 h-14 sm:w-20  sm:h-20 rounded-lg mr-4"
            />
            <div className="text-xl sm:text-3xl font-bold">
              {currentRecord?.driverName}
            </div>
          </div>

          <div className="mt-5">
            <div className=" text-start text-lg">
            <h1 className="text-lg font-semibold mb-[18px]">Personal Information</h1>
              <div className="sm:flex gap-1">
                <div className="font-bold">Title:</div>
                <div>{currentRecord?.role}</div>
              </div>
              <div className="sm:flex gap-1">
                <div className="font-bold">Name:</div>
                <div>{currentRecord?.driverName}</div>
              </div>
              <div className="sm:flex gap-1">
                <div className="font-bold">Gender:</div>
                <div>{currentRecord?.gender}</div>
              </div>

              <div className="sm:flex gap-1">
                <div className="font-bold">Email:</div>
                <div>{currentRecord?.email}</div>
              </div>

              <div className="sm:flex gap-1">
                <div className="font-bold">Phone:</div>
                <div>{currentRecord?.phone}</div>
              </div>
            
              <div className="sm:flex gap-1">
                <div className="font-bold">Date of Birth:</div>
                <div>{currentRecord?.dateOfBirth}</div>
              </div>
             
              {/* <div className="sm:flex gap-1">
                <div className="font-bold">Address:</div>
                <div>{currentRecord?.address}</div>
              </div> */}
              <div className="sm:flex gap-1">
                <div className="font-bold">Truck Number:</div>
                <div>{currentRecord?.truckNumber}</div>
              </div>
              <h1 className="text-lg font-semibold my-[18px]">Documents</h1>
             
             <div className="flex gap-3">

                <div className="bg-[#DCDCF0] w-fit h-fit p-2 rounded-lg">
                  <div className="bg-[#2b4257] rounded-full  w-fit h-fit py-5 px-6">
                    <img src="/public/images/pdf.png" className="w-8 h-auto" alt="" />
                  </div>
                  <p className="text-center mt-1">Resume.pdf</p>
                </div>

                <div className="bg-[#DCDCF0] w-fit h-fit p-2 rounded-lg">
                  <div className="bg-[#2b4257] rounded-full  w-fit h-fit py-5 px-6">
                    <img src="/public/images/pdf.png" className="w-8 h-auto" alt="" />
                  </div>
                  <p className="text-center mt-1">Certificate.pdf</p>
                </div>

              </div>
             

              
            </div>
          </div>
        </div>
        {/* <div className="text-start">
      <button
          onClick={() => handleBlock(currentRecord)}
          className="bg-secondary-color text-primary-color py-3 text-lg font-semibold rounded-lg mt-8  px-4"
        >
          Block
        </button>    
        </div> */}
        
      </div>
    </Modal>
  );
};

export default DriverDetailsModal;
