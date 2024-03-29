import FooterSmall from "components/Footers/FooterSmall";
import React from "react";

const UnverVerification = () => {
  return (
    <>
      <main>
        <section className="relative w-full h-full py-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
            style={{
              backgroundImage:
                "url(" + require("assets/img/register_bg_2.png").default + ")",
            }}
          ></div>
          <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
              <div className="w-full lg:w-10/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-blueGray-400 text-center mb-3 font-bold justify-center w-full">
                      <center>
                        <img
                          src="https://cdn.pixabay.com/animation/2022/07/29/03/42/03-42-11-849_512.gif"
                          style={{ height: "250px" }}
                          alt="Error"
                        />
                        <h1 style={{ fontSize: "1.2rem" }}>
                          Please Wait While the Administrators Approve Your
                          Application. This process usually takes around 10-12
                          Hours.
                        </h1>
                      </center>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
};

export default UnverVerification;
