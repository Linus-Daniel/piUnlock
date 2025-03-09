import  { useState } from "react";
import { useNavigate } from "react-router";
import { LuMail } from "react-icons/lu";

function EmailInput() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-2xl font-semibold text-teal-600 flex items-center gap-1">
        Unlock <span className="text-yellow-500">🔓</span> Pi Coins
      </h1>

      <p className="mt-3 text-gray-600 text-lg">Entre Your Pi Network email?</p>

      {/* Email Input */}
      <div className="relative w-full max-w-md mt-4">
        <input
          type="email"
          className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <LuMail className="absolute left-3 top-3 text-gray-400" size={20} />
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-full max-w-md mt-6">
        <button
          className={`w-full py-2 rounded-full text-white font-medium transition ${
            email ? "bg-teal-500 hover:bg-teal-600" : "bg-gray-300 cursor-not-allowed"
          }`}
          disabled={!email}
          onClick={() => navigate("/confirm")}
        >
          Next →
        </button>

        <button
          className="w-full mt-3 py-2 rounded-full bg-transparent text-gray-700 font-medium hover:underline"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default EmailInput;
