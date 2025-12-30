import { useEffect, useState } from "react";

const ClockBody = () => {
  const [timee, setTimee] = useState(new Date());

  useEffect(() => {
    const iid = setInterval(() => {
      setTimee(new Date());
    }, 1000);

    return () => {
      clearInterval(iid);
      console.log("Interval Cleared");
    };
  }, []);
  return (
    <div className="clock-body">
      <p>{timee.toLocaleTimeString()}</p>
    </div>
  );
};

export default ClockBody;
