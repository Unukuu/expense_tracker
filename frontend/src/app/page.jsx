"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl } from "../../utils/util";
export default function Home() {
  const router = useRouter();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const singin = async () => {
    const { email, password } = userData;
    try {
      const res = await axios.post(`${apiUrl}/auth/signin`, {
        email,
        password,
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("Амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = res.data;
        localStorage.setItem("token", token);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэхэд алдаа гарлаа");
    }
  };
  console.log("userdata", userData);
  return (
    <>
      <>
        <div className="flex h-screen">
          <div className="flex text-black flex-col justify-center items-center gap-5 w-1/2 h-full bg-white">
            <h1 className="text-xl font-extrabold">GELD</h1>
            <h1 className="text-2xl font-semibold">Welcome Back</h1>
            <p>Welcome back, Please enter your details</p>
            <input
              className="w-full bg-white max-w-xs input input-bordered"
              type="email"
              placeholder="Email"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <input
              className="w-full bg-white max-w-xs input input-bordered"
              type="password"
              placeholder="Password"
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <button
              className="bg-[#0166FF] w-full max-w-xs text-white text-xl btn"
              onClick={singin}
            >
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
    </>
  );
}
