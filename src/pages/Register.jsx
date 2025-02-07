import { createUserWithEmailAndPassword } from "firebase/auth";
import FormInput from "../components/FormInput";
import FormLabel from "../components/FormLabel";
import { useState } from "react";
import auth from "../utils/firebase";
import { NavLink, useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [e_mail, setE_mail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleRegisterUser(event) {
    event.preventDefault();
    setError("");
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, e_mail, password);
      console.log("User Registered Successfully...", auth.currentUser);
      navigate("/login");
    } catch (error) {
      console.error(error.message);
      setError(error.message); // Display error message
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="flex flex-col w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] h-auto max-h-[85vh] bg-[#F6F5F5] items-center justify-center rounded-lg py-10 shadow-lg">
        <h2 className="text-2xl font-extrabold my-3">Register Yourself Here</h2>
        {error && <p className="text-red-600 mb-3">{error}</p>}
        <form
          className="flex flex-col items-center justify-center w-full px-6"
          onSubmit={handleRegisterUser}
        >
          <FormLabel htmlFor="name" className="font-bold my-2">
            Name
          </FormLabel>
          <FormInput
            type="text"
            name="name"
            id="name"
            placeholder="Enter your Full Name"
            className="my-3 h-10 w-full border-[1px] rounded-md px-3 text-stone-700"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <FormLabel htmlFor="e_mail" className="font-bold my-2">
            E-Mail
          </FormLabel>
          <FormInput
            type="text"
            name="e_mail"
            id="e_mail"
            placeholder="Enter your E-Mail"
            className="my-3 h-10 w-full border-[1px] rounded-md px-3 text-stone-700"
            value={e_mail}
            onChange={(event) => setE_mail(event.target.value)}
          />

          <FormLabel htmlFor="password" className="font-bold my-2">
            Password
          </FormLabel>
          <FormInput
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            className="my-3 h-10 w-full border-[1px] rounded-md px-3 text-stone-700"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            type="submit"
            className={`p-2 my-5 w-full rounded-md hover:bg-[#D4BDAC] ${
              loading ? "bg-gray-400" : "bg-[#DBD3D3]"
            }`}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register!"}
          </button>
        </form>
        <NavLink to="/login">
          <p className="text-1xl text-blue-600">
            Already registered go to login page...
          </p>
        </NavLink>
      </div>
    </div>
  );
}
