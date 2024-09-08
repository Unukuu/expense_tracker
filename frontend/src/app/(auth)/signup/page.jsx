"use client";
import { axios } from "axios";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { toast } from "react-toastify";
import { apiUrl } from "../../../../utils/util";
const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const signUp = async () => {
    const { name, email, password, repassword } = userData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, name, password }),
      });

      if (response.status === 201) {
        toast.success("Амжилттай бүртгэглээ", { autoClose: 1000 });
        router.push("/signin");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа дахин оролдно уу");
    }
  };
  console.log("input utga", userData);
  return (
    <>
      <div className="flex h-screen">
        <div className="flex text-black flex-col justify-center items-center gap-5 w-1/2 h-full bg-white">
          <h1 className="text-xl font-extrabold">GELD</h1>
          <h1 className="text-2xl font-semibold">Create Geld account</h1>
          <p>Sign up below to create your Wallet account</p>
          <input
            className="w-full bg-white max-w-xs input input-bordered"
            type="name"
            placeholder="Name"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            className="w-full bg-white max-w-xs input input-bordered"
            type="email"
            placeholder="Email"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-white max-w-xs input input-bordered"
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Re-Password"
            className="w-full bg-white max-w-xs input input-bordered"
            value={userData.repassword}
            onChange={(e) =>
              setUserData({ ...userData, repassword: e.target.value })
            }
          />
          <button
            className="bg-[#0166FF] max-w-xs w-full btn text-xl text-white"
            onClick={signUp}
          >
            Sign up
          </button>
          <p>
            Already have account?
            <a className="text-primary" href="/signin">
              Sign in
            </a>
          </p>
        </div>
        <div className="w-1/2 h-full bg-[#0166FF]"></div>
      </div>
    </>
  );
};
export default SignUp;
