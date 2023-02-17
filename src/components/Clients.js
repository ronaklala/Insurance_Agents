import React, { useEffect, useState } from "react";
import AdminNavbar from "../components/Navbars/AdminNavbar";
import Sidebar from "./Sidebar/Sidebar";
import HeaderStats from "components/Headers/HeaderStats.js";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import $ from "jquery";

const Clients = () => {
  const [clients, setClients] = useState();

  const [loading, setLoading] = useState(true);

  const [dataloading, setDataloading] = useState(true);

  let [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("agent") === null) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(localStorage.getItem("agent")));
      setLoading(false);
      axios
        .get("http://localhost:5000/agent/get_clients/")
        .then((res) => {
          setClients(res.data);
          setDataloading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  const StartWork = (id) => {
    axios
      .post("http://localhost:5000/agent/startWork/" + id)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Connected Successfully");
          $("#" + id).remove();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const RejecttWork = (id) => {};

  return (
    <>
      {" "}
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <div className="card-wrapper row">
          <AdminNavbar />
          <HeaderStats />

          <div className="px-4 md:px-10 mx-auto w-full -m-24">
            <div className="flex flex-wrap">
              {dataloading === true ? (
                <>
                  <div className="w-full xl:w-4/12 p-4">
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4">
                      <h2>Loading Data......</h2>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {clients.filter((item) => item.aid == user._id).length ==
                  0 ? (
                    <>
                      <div className="w-full xl:w-4/12 p-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded p-4">
                          <h2>No Data Found....</h2>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {clients.map((c, i) => (
                        <>
                          {c.aid === user._id ? (
                            <>
                              <div className="w-full xl:w-4/12 px-4" id={c._id}>
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                  <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                                    <div className="flex flex-wrap items-center">
                                      <div className="relative w-full max-w-full flex-grow flex-1">
                                        <h6 className="uppercase text-blueGray-400 mb-1 text-xs font-semibold">
                                          ID: {c.uid}
                                        </h6>
                                        <h2 className="text-blueGray-700 py-2 text-xl font-semibold">
                                          {c.user_details.map((u, i) => (
                                            <>{u.name}</>
                                          ))}
                                        </h2>

                                        <h6 className="text-blueGray-700 py-2 font-semibold">
                                          {c.user_details.map((u, i) => (
                                            <>Email: {u.email}</>
                                          ))}
                                        </h6>

                                        <h6 className="text-blueGray-700 py-2 font-semibold">
                                          {c.user_details.map((u, i) => (
                                            <>Phone Number: {u.phone}</>
                                          ))}
                                        </h6>

                                        <h6 className="text-blueGray-700 py-2 font-semibold">
                                          {c.user_details.map((u, i) => (
                                            <>City: {u.city}</>
                                          ))}
                                        </h6>

                                        <div className="row">
                                          <button
                                            className="bg-lightBlue-400 text-white p-4 outline-none focus:outline-none w-100"
                                            type="button"
                                            onClick={() => {
                                              StartWork(c._id);
                                            }}
                                          >
                                            Work with this Client
                                          </button>
                                          &nbsp;&nbsp;
                                          <button
                                            className="bg-red-400 text-white p-4 outline-none focus:outline-none w-100"
                                            type="button"
                                            onClick={() => {
                                              RejecttWork(c._id);
                                            }}
                                          >
                                            Reject Work
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )}
                        </>
                      ))}
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default Clients;
