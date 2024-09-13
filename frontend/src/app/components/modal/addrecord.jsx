import { CategoryContext } from "@/app/context/category-context";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { apiUrl } from "../../../../utils/util";
import { toast } from "react-toastify";
import { ChartdataContext } from "@/app/context/chartdata-context";

const AddRecord = ({ user }) => {
  const { category, fetchCategoryData } = useContext(CategoryContext);
  const { reFetch, setReFetch } = useContext(ChartdataContext);
  useEffect(() => {
    fetchCategoryData();
  }, []);
  console.log("first", category);
  const handleselect = (e) => {
    setCreateRecord({ ...createRecord, cid: e.target.value });
  };
  const [createRecord, setCreateRecord] = useState({
    uid: "",
    cid: "",
    name: "",
    amount: 0,
    transactionType: "",
    description: "",
  });
  console.log(createRecord);
  const postRecord = async () => {
    const { uid, cid, name, amount, transactionType, description } =
      createRecord;
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${apiUrl}/records`,
        {
          uid,
          cid,
          name,
          amount,
          transactionType,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Амжилттай нэмэгдлээ", { autoClose: 1000 });
      setReFetch(!reFetch);
    } catch (error) {
      console.log(error);
      toast.error("Алдаа гарлаа");
    }
  };

  return (
    <dialog id="my_modal_1" className="rounded-2xl">
      <div className="bg-white  w-[792px] rounded-2xl">
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <p className="text-xl font-bold ">ADD RECORD</p>
          <button className="btn btn-circle btn-outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="grid grid-cols-2 px-6 py-5 gap-12">
          <div className="flex flex-col justify-center gap-5">
            <div className="grid grid-cols-2 bg-base-300 rounded-3xl">
              <button
                onClick={() => {
                  setCreateRecord({
                    ...createRecord,
                    transactionType: "EXP",
                    uid: user?.id,
                  });
                }}
                className="text-center rounded-3xl w-full h-full p-2 hover:bg-[#0166FF] hover:text-white"
              >
                Expense
              </button>
              <button
                onClick={() => {
                  setCreateRecord({
                    ...createRecord,
                    transactionType: "INC",
                    uid: user?.id,
                  });
                }}
                className="text-center rounded-3xl w-full h-full p-2 hover:bg-green-600 hover:text-white"
              >
                Income
              </button>
            </div>
            <div>
              <input
                type="number"
                placeholder="$ 000.00"
                className="mt-1 input input-bordered h-[76px] w-full"
                value={createRecord.amount}
                onChange={(e) =>
                  setCreateRecord({ ...createRecord, amount: e.target.value })
                }
              />
            </div>
            <div>
              <p>Category</p>
              <select
                className="mt-1 select select-bordered w-full"
                onChange={handleselect}
              >
                <option disabled selected>
                  Find or choose category
                </option>
                {category?.map((data) => {
                  return <option value={data.id}>{data.name}</option>;
                })}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p>Date</p>
                <input
                  type="date"
                  className="mt-1 input input-bordered w-full"
                />
              </div>
              <div>
                <p>Time</p>
                <input
                  type="time"
                  className="mt-1 input input-bordered  w-full"
                />
              </div>
            </div>
            <button className="btn btn-success text-white" onClick={postRecord}>
              Add record
            </button>
          </div>
          <div>
            <div>
              <p>Payee</p>
              <input
                type="text"
                placeholder="Write here"
                className="mt-1 input input-bordered  w-full"
                value={createRecord.name}
                onChange={(e) =>
                  setCreateRecord({ ...createRecord, name: e.target.value })
                }
              />
            </div>
            <div className="h-72">
              <p>Note</p>
              <input
                type="text"
                placeholder="Write here"
                className="mt-1 input input-bordered  w-full h-full"
                value={createRecord.description}
                onChange={(e) =>
                  setCreateRecord({
                    ...createRecord,
                    description: e.target.value,
                  })
                }
              />
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};
export default AddRecord;
