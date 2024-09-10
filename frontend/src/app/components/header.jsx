const Header = ({ user, logOut }) => {
  console.log(user);
  return (
    <div className="flex justify-between items-center container m-auto p-4">
      <div className="flex gap-6 items-center justify-center">
        <img src="/image/Frame 3logo.jpg" alt="" />
        <a
          href="/dashboard"
          className="text-sm text-[#0F172A] hover:font-extrabold"
        >
          Dashboard
        </a>
        <a
          href="/records"
          className="text-sm text-[#0F172A] hover:font-extrabold"
        >
          Records
        </a>
      </div>
      <div className="flex gap-6 items-center justify-center">
        <button className="btn bg-[#0166FF] text-white">+ Record</button>
        <button className="btn bg-[#0166FF] text-white" onClick={logOut}>
          Log out
        </button>
        <img src={user?.profile_image} alt="photo1" />
        <p className="text-sm text-[#0F172A] hover:font-extrabold">
          {user?.name}
        </p>
      </div>
    </div>
  );
};
export default Header;
