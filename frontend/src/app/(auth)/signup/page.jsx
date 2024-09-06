import { axios } from "axios";
import { useRouter } from "next/router";
const SignUp = () => {
  const router = useRouter();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [image, setImage] = useState(null);

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col justify-center items-center gap-5 w-1/2 h-full bg-white">
          <h1 className="text-xl font-extrabold">GELD</h1>
          <h1 className="text-2xl font-semibold">Create Geld account</h1>
          <p>Sign up below to create your Wallet account</p>
          <input className="border" type="email" placeholder="Email" />
          <input className="border" type="email" placeholder="Password" />
          <button className="bg-[#0166FF] text-white text-xl rounded-2xl p-3">
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
