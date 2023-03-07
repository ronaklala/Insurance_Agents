import React from "react";
import HeaderStats from "./Headers/HeaderStats";
import Sidebar from "./Sidebar/Sidebar";
import AdminNavbar from "../components/Navbars/AdminNavbar";

const PlanProduct = (props) => (
  <>
    <Sidebar />
    <div className="relative md:ml-64 bg-blueGray-100">
      <div className="card-wrapper row">
        <AdminNavbar />
        <HeaderStats />

        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <div className="flex flex-wrap">
            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h2 className="text-blueGray-700 py-2 text-xl font-semibold">
                        Standard Plan
                      </h2>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Includes 20 Credits
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Can Purchase More Credits Anytime
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Credits Last 3 years
                      </h6>

                      <div className="row">
                        <form
                          action={
                            "https://insurance-api-five.vercel.app/create-checkout-session/price_1MiFhDSBUj7Zk1FJqA6cOjNY/standard/" +
                            props.id
                          }
                          method="POST"
                        >
                          <button
                            type="submit"
                            className="bg-lightBlue-400 text-white p-4 outline-none focus:outline-none w-100"
                          >
                            Select This Plan
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h2 className="text-blueGray-700 py-2 text-xl font-semibold">
                        Gold Plan
                      </h2>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Includes 50 Credits
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Can Purchase More Credits Anytime
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Credits Last 3 years
                      </h6>

                      <div className="row">
                        <form
                          action={
                            "https://insurance-api-five.vercel.app/create-checkout-session/price_1MiFhDSBUj7Zk1FJqA6cOjNY/Gold/" +
                            props.id
                          }
                          method="POST"
                        >
                          <button
                            type="submit"
                            className="bg-lightBlue-400 text-white p-4 outline-none focus:outline-none w-100"
                          >
                            Select This Plan
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full xl:w-4/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
                  <div className="flex flex-wrap items-center">
                    <div className="relative w-full max-w-full flex-grow flex-1">
                      <h2 className="text-blueGray-700 py-2 text-xl font-semibold">
                        Platinum Plan
                      </h2>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Includes 100 Credits
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Can Purchase More Credits Anytime
                      </h6>

                      <h6 className="text-blueGray-700 py-2 font-semibold">
                        Credits Last 3 years
                      </h6>

                      <div className="row">
                        <form
                          action={
                            "https://insurance-api-five.vercel.app/create-checkout-session/price_1MiFhDSBUj7Zk1FJqA6cOjNY/Platinum/" +
                            props.id
                          }
                          method="POST"
                        >
                          <button
                            type="submit"
                            className="bg-lightBlue-400 text-white p-4 outline-none focus:outline-none w-100"
                          >
                            Select This Plan
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default PlanProduct;
