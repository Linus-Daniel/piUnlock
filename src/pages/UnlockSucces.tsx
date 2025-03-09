import { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";
import { useLocation } from "react-router"; // Ensure correct import

function UnlockSuccess() {
  const [isExploding, setIsExploding] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/success") {
      setIsExploding(true);
      
      // Stop explosion after 3 seconds to avoid infinite re-renders
      setTimeout(() => {
        setIsExploding(false);
      }, 3000);
    }
  }, [location.pathname]);

  return (
    <div className="flex justify-center   gap-3 items-center">
        <div className="flex flex-col items-center ">

      <h1 className="text-3xl my-10 font-bold text-teal-600">Congratulations</h1>
      <p className="text-teal-400">
        Pi coins have been successfully Unlocked!!!
      </p>
        </div>
      {isExploding && (
        <ConfettiExplosion
          force={0.8} // Controls explosion strength
          duration={5000} // How long it runs (ms)
          particleCount={200} // Number of particles
          width={1600} // Spread area
        />
      )}

    </div>
  );
}

export default UnlockSuccess;
