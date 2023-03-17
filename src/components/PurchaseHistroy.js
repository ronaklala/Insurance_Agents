import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar/Sidebar";

const PurchaseHistroy = (props) => {
  const [loading, setLoading] = useState(true);

  const [txn, setTxn] = useState();

  useEffect(() => {
    axios
      .get("https://embarrassed-jewelry.cyclic.app/agent/get_txn/" + props._id)
      .then((res) => {
        setTxn(res.data);
        setLoading(false);
      });
  }, [props._id]);

  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div
          className="card-wrapper row"
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div className="px-4 md:px-10 mx-auto w-full py-24">
            <div className="flex flex-wrap">
              {loading === true ? (
                <>
                  <h2>Loading Data....</h2>
                </>
              ) : (
                <>
                  {txn.map((t, i) => (
                    <>
                      {" "}
                      <div className="w-full xl:w-4/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                            <div className="flex flex-wrap items-center">
                              <div className="relative w-full max-w-full flex-grow flex-1">
                                <h2 className="text-blueGray-700 py-2 text-xl font-semibold">
                                  {t.plan}
                                </h2>

                                <h6 className="text-blueGray-700 py-2 font-semibold">
                                  Purchase ID: {t.aid}
                                </h6>

                                <h6 className="text-blueGray-700 py-2 font-semibold">
                                  {moment(t.createdAt).format("LL")}&nbsp;
                                  {moment(t.createdAt).fromNow()}
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistroy;
