import FooterSmall from "components/Footers/FooterSmall";
import React from "react";

const Rejected = () => {
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
                          src="https://upload.wikimedia.org/wikipedia/commons/4/4d/Animated_numbers_0_to_100_slow.gif"
                          style={{ height: "250px" }}
                          alt="Error"
                        />
                        <h1 style={{ fontSize: "1.2rem" }}>
                          Sorry Dear, We are sad to say that Your Profile has
                          been rejected by one of our Admins, If you think there
                          is a mistake by our admin please Register again or
                          contact us contact@project.com
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

export default Rejected;
