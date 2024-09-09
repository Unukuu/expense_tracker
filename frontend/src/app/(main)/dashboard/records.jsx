import Recordcard from "./recordlist";
const RecordList = () => {
  return (
    <div className="container m-auto bg-white ">
      <div className="border-b-2 px-6 py-4">
        <h1 className="font-bold">Last Records</h1>
      </div>
      <Recordcard />
      <Recordcard />
      <Recordcard />
    </div>
  );
};
export default RecordList;
