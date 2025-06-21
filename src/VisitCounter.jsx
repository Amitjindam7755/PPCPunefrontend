import React, { useEffect, useState } from "react";

const VisitCounter = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    // Increase + fetch visit count
    fetch("http://localhost:8081/api/visit", {
      method: "POST"
    })
      .then(res => res.json())
      .then(data => {
        setVisits(data.totalVisits);
      })
      .catch(err => console.error("Error fetching visits:", err));
  }, []);

  return (
    <div className="bg-gray-800 text-white rounded px-4 py-2 mt-4">
      🔢 Total Visits: {visits}
    </div>
  );
};

export default VisitCounter;
