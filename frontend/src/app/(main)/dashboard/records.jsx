import Recordcard from "./recordlist";
const RecordList = () => {
  return (
    <div className="container m-auto bg-white h-[450px] overflow-scroll">
      <div className="border-b-2 px-6 py-4">
        <h1 className="font-bold">Last Records</h1>
      </div>
      <Recordcard />
    </div>
  );
};
export default RecordList;
