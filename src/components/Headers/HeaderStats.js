import React, { useEffect, useState } from "react";

// components

import CardStats from "components/Cards/CardStats.js";
import axios from "axios";

export default function HeaderStats() {
  const [stats, setStats] = useState();

  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("agent") === null) {
      window.location.href = "/login";
    } else {
      getData(JSON.parse(localStorage.getItem("agent"))._id);
    }
  }, []);

  /**
   * It gets the data from the database and sets the state of the component
   */
  const getData = (id) => {
    axios
      .get("https://insurance-api-five.vercel.app/agent/get_headers/" + id)
      .then((res) => {
        setStats(res.data);
        setDataLoading(false);
      });
  };

  return (
    <>
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {dataLoading === true ? (
              <></>
            ) : (
              <>
                {/* Card stats */}
                <div className="flex flex-wrap">
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="TOTAL CREDITS"
                      statTitle={stats.credits}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="TOTAL CONTACT REQUESTS APPEARED"
                      statTitle={stats.tca}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="TOTAL CONTACT REQUESTS COMPLETED"
                      statTitle={stats.tcd}
                    />
                  </div>
                  <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <CardStats
                      statSubtitle="NUMBER OF PAYMENTS"
                      statTitle={stats.nop}
                    />
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Header */}
    </>
  );
}
