import  { useState } from "react";
import { useNavigate } from "react-router";

function Duration() {
    const navigate = useNavigate()
  const [selectedDuration, setSelectedDuration] = useState("");
 const [error,setError] =  useState<boolean>(false)
  const handleSelection = (event:any) => {
    setSelectedDuration(event.target.value);
  };

  const handleNext = () => {
    if (selectedDuration === "") {
      setError(true);
    } else {
      navigate("/email");
    }
  };
  return (
    <div className="p-4">
      <p className="text-lg font-semibold mb-4">Unlock Pi Durations</p>
      <div className="grid grid-cols-2 sm:grid-cols-1 gap-4">
        {[
          { label: "1 Week", value: "1week" },
          { label: "2 Weeks", value: "1month" },
          { label: "1 Months", value: "3months" },
          { label: "3 Months", value: "1year" },
          { label: "1 Year", value: "1year" },
          { label: "3 Year", value: "1year" },


        ].map((option) => (
          <div key={option.value} className="flex items-center gap-5 px-4 py-3 bg-slate-200 rounded-full shadow-sm">
            <label>{option.label}</label>
            <input 
              type="radio" 
              name="duration" 
              value={option.label} 
              checked={selectedDuration === option.label} 
              onChange={handleSelection} 
            />
          </div>
        ))}
      </div>

      {/* Display Selected Duration */}
      {selectedDuration && (
        <p className="mt-4 text-green-600 font-medium">Pi Coin will be unlocked after {selectedDuration}</p>
      )}

      <div>
      {
        error&&(
            <p>
                please select new lock limits
            </p>
        )
       }
      <button
      onClick={handleNext}
        className={`mt-5 px-6 w-full py-3 font-semibold rounded-full transition duration-300 ${
          selectedDuration
            ? "bg-green-500 text-white hover:bg-green-600"
            : "bg-gray-200 text-gray-700 cursor-not-allowed"
        }`}
        disabled={!selectedDuration}
      >
      
        Confirm Unlock
      </button>
        
      </div>
    </div>
  );
}

export default Duration;
