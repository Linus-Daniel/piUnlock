import  { useState } from "react";
import { useNavigate } from "react-router";



export function Confirmation() {
  const [selectedOption, setSelectedOption] = useState<string>();
    const navigate = useNavigate()
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 h-screen">
      <h2 className="text-2xl font-semibold text-teal-600 mb-2">
        Login Your Pi Wallet
      </h2>
      <p className="text-gray-600 mb-4 text-center">
        Do you want to unlock 🔒 your Pi Coins? If yes, then press "Yes" to login
        your Pi Wallet.
      </p>
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="login"
            value="yes"
            checked={selectedOption === "yes"}
            onChange={() => setSelectedOption("yes")}
          />
          Yes
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="login"
            value="no"
            checked={selectedOption === "no"}
            onChange={() => setSelectedOption("no")}
          />
          No
        </label>
      </div>
      <button
        className={`px-6 py-3 mt-4 rounded-full font-medium text-white ${
          selectedOption ? "bg-teal-400" : "bg-gray-400"
        }`}
        disabled={!selectedOption}
        onClick={()=>{
            if (selectedOption === "yes"){
                navigate("/auth")
            }
            else{
                navigate("/")
            }
        }}
      >
        Next →
      </button>
      <button className="mt-2 text-gray-500">Back</button>
    </div>
  );
}