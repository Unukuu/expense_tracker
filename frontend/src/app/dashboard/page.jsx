const Dashboard = () => {
  return (
    <>
      <div className="flex justify-between items-center container m-auto">
        <div className="flex gap-6 items-center justify-center">
          <img src="/image/Frame 3logo.jpg" alt="" />
          <h1 className="text-sm text-[#0F172A]">Dashboard</h1>
          <p className="text-sm font-extrabold text-[#0F172A]">Records</p>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <button>+ Record</button>
          <img src="/image/profile.png" alt="photo1" />
        </div>
      </div>
    </>
  );
};
export default Dashboard;
