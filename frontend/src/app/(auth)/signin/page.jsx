const SignIn = () => {
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center gap-5 w-1/2 h-full bg-white">
          <h1 className="text-xl font-extrabold">GELD</h1>
          <h1 className="text-2xl font-semibold">Welcome Back</h1>
          <p>Welcome back, Please enter your details</p>
          <input className="border" type="email" placeholder="Email" />
          <input className="border" type="email" placeholder="Password" />
          <button className="bg-[#0166FF] text-white text-xl rounded-2xl p-3">
            Log In
          </button>
          <p>
            Don’t have account?
            <a className="text-primary" href="/signup">
              Sign up
            </a>
          </p>
        </div>
        <div className="w-1/2 h-full bg-[#0166FF]"></div>
      </div>
    </>
  );
};
export default SignIn;
