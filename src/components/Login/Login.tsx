import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import eye from "../../assets/svg/eye.svg";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import { Link } from "react-router-dom";

export default function Login() {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      navigate("/", { replace: true });
    }

    window.history.pushState(null, "", window.location.href);
    window.onpopstate = () => {
      window.history.pushState(null, "", window.location.href);
    };

    return () => {
      window.onpopstate = null;
    };
  }, [navigate]);

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const savedData = localStorage.getItem("registrationData");
    if (savedData) {
      const { email: savedEmail, password: savedPassword } =
        JSON.parse(savedData);

      if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");
        alert("Login successful!");
        navigate("/", { replace: true });
      } else {
        setErrorMessage("Incorrect email or password.");
      }
    } else {
      setErrorMessage("No account found. Please sign up.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#000000] bg-opacity-5">
      <div className="w-[540px] rounded-[20px] bg-white px-[72px] py-[48px] shadow-lg">
        <p className="font-semibold text-3xl">Login to your account</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mt-8">
            <label
              htmlFor="email"
              className="text-base font-normal text-[#344054]"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full rounded-lg p-4 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col mt-6">
            <label
              htmlFor="password"
              className="text-base font-normal text-[#344054] flex justify-between"
            >
              Password
              <p className="text-base font-normal text-[#1570FF] cursor-pointer">
                Forgot？
              </p>
            </label>

            <div className="relative">
              <input
                type={isPasswordVisible ? "text" : "password"}
                id="password"
                placeholder="Enter your password"
                className="w-full rounded-lg p-4 border-[#98A2B3] border outline-[#D1E9FF] text-sm mt-3 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <img
                src={eye}
                alt="eye"
                className="absolute top-1/2 right-3 transform -translate-y-1/4 cursor-pointer"
                onClick={togglePasswordVisibility}
              />
            </div>
          </div>

          {errorMessage && (
            <p className="text-red-500 text-sm mt-4">{errorMessage}</p>
          )}

          <div className="mt-6">
            <ButtonPrimary text="Login now" />
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            <p className="text-base font-normal text-[#98A2B3]">
              Don't have an account?
            </p>
            <p className="text-base font-normal text-[#1570FF] cursor-pointer">
              <Link to={"/registration"}>Sign up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
