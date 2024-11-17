/* eslint-disable react/prop-types */
import { Modal } from "antd";
import { useEffect } from "react";

const ViewEarningModal = ({
  isViewModalVisible,
  handleCancel,
  currentRecord,
}) => {
  useEffect(() => {
    if (isViewModalVisible && currentRecord) {
      console.log("Current Record:", currentRecord);
    }
  }, [isViewModalVisible, currentRecord]);

  return (
    <Modal
      title={
        <div className="pt-5">
          <h2 className="text-secondary-color text-3xl mb-5">
            User payment details
          </h2>
        </div>
      }
      open={isViewModalVisible}
      onCancel={handleCancel}
      footer={null}
      centered
      className="lg:min-w-[600px]"
    >
      {currentRecord && (
        <div>
          <div className="rounded-xl bg-[#F5F9FE] p-5">
            <div className="flex justify-start items-center gap-2 mt-3 mb-5">
              <img
                src={currentRecord.avatar || "../../../images/userImage.png"}
                alt="avatar"
                className="w-32 h-32 rounded-lg mr-2"
              />
              <div>
                <h1 className="sm:text-lg lg:text-2xl font-medium">
                  {currentRecord.userName}
                </h1>
                <p className="text-sm sm:text-base lg:text-lg text-[#4E4E4E]">
                  {currentRecord.role}
                </p>
              </div>
            </div>
            <div>
              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  User Serial:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.id}
                </p>
              </div>

              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  Email:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.email}
                </p>
              </div>
              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  User name:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.userName}
                </p>
              </div>
              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  User Account:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.accNumber}
                </p>
              </div>
              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  Time & Date:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.date}
                </p>
              </div>
              <div className="flex gap-2 mb-3 ">
                <p className="text-sm sm:text-base lg:text-lg  font-semibold">
                  Amount:
                </p>
                <p className="text-sm sm:text-base lg:text-lg ">
                  {currentRecord.amount}
                </p>
              </div>

              <div className="flex gap-2 mb-3">
                <p className="text-sm sm:text-base lg:text-lg font-semibold">
                  Payment Method:
                </p>
                <p className="text-sm sm:text-base lg:text-lg  ">
                  {currentRecord.paymentMethod}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default ViewEarningModal;
