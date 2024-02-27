
import React, { useState, useEffect } from "react";
import Button from "./Button";



const Timing = () => {

  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (

    <>



      <div className="flex flex-wrap justify-center p-10 m-16 ">
        <div>
          <img
            src="./images/discount.jpg.webp"
            alt="Your Image"
            className=" w-full h-full object-cover"
          />
        </div>


        <div className="bg-gray-200 w-[80vh] flex flex-col justify-center items-center ">

          <div>
            <img
              src="./images/screen2.png"
              alt="Your Image"
              className=" object-contain rounded-full"
            />
          </div>

          <div className="mt-6 text-red-700 text-5xl ">
            {currentTime}
          </div>
          <Button />

        </div>

      </div>
    </>





  )
}

export default Timing
