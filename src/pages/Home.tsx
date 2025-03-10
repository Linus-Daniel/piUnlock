import { useState } from 'react';
import { useNavigate } from 'react-router';// Ensure correct import

function Home() {
  const [username, setUserName] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    if (username.trim() === "") {
      setError(true);
    } else {
      navigate("/duration");
    }
  };

  return (
    <main className="bg-slate-100 h- flex justify-center items-center">
      <div className="flex flex-col items-center w-full max-w-full px-6">
        <p className="font-bold text-teal-600 mb-6 text-3xl text-center">
          Unlock Pi Coins
        </p>

        <div className="flex flex-col w-full">
          <p className="text-xl text-center">Enter Pi username</p>
          <input
            onChange={(e) => {
              setUserName(e.target.value);
              setError(false);
            }}
            className="border border-gray-300 w-full mt-2 mb-2 p-3 rounded-full text-center"
            type="text"
            placeholder="Username"
          />
          {error && <p className="text-red-500 text-sm text-center">Username cannot be empty</p>}
        </div>

        <button
          onClick={handleNext}
          className="bg-teal-500 hover:bg-teal-600 text-white font-semibold p-3 rounded-full w-full mt-4 transition duration-300"
        >
          Next
        </button>
      </div>
    </main>
  );
}

export default Home;
