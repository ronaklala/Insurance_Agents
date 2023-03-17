import React, { useEffect, useState } from "react";
import "./component.css";
import { toast, Toaster } from "react-hot-toast";
import axios from "axios";

const Profile = () => {
  const [agent, setAgent] = useState();
  const [loading, setLoading] = useState(true);

  const [fileloading, setFileLoading] = useState(false);

  useEffect(() => {
    setAgent(JSON.parse(localStorage.getItem("agent")));
    setLoading(false);
  }, []);

  const handleImage = async (e) => {
    setFileLoading(true);
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "wn1odvyy");

    const dataFile = await fetch(
      "https://api.cloudinary.com/v1_1/dfhginrxj/image/upload",
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((r) => r.json())
      .catch((err) => {
        toast.error("Internval Server Error");
      });
    if (dataFile.secure_url !== null) {
      let data = {
        image: dataFile.secure_url,
        agent_id: agent._id,
      };

      axios
        .post("https://insurance-api-five.vercel.app/update/agent/", data)
        .then((res) => {
          toast.success("Uploaded Successfully");
          agent.profile_img = dataFile.secure_url;
          setFileLoading(false);
        });
    }
  };

  return (
    <>
      {loading === true ? (
        <>
          <h1>Loading Data....</h1>
        </>
      ) : (
        <>
          <main className="profile-page">
            <section className="relative block h-500-px">
              <div
                className="absolute top-0 w-full h-full bg-center bg-cover"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
                }}
              >
                <span
                  id="blackOverlay"
                  className="w-full h-full absolute opacity-50 bg-black"
                ></span>
              </div>
            </section>
            <section className="relative py-16 bg-blueGray-200">
              <div className="container mx-auto px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                  <div className="px-6">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                        <div className="relative inputbg">
                          {fileloading === true ? (
                            <>
                              <h3>Uploading Image.....</h3>
                            </>
                          ) : (
                            <></>
                          )}
                          {agent.profile_img === "" ? (
                            <>
                              <label for="file-input">
                                <img
                                  alt="Profile"
                                  src="https://i.ibb.co/LhVypFg/image-removebg-preview.png"
                                  className="shadow-xl rounded-full h-auto align-middle border-none "
                                />
                              </label>
                              <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                              />
                            </>
                          ) : (
                            <>
                              <label for="file-input">
                                <img
                                  src={agent.profile_img}
                                  alt={agent.profile_img}
                                  className="shadow-xl rounded-full h-auto align-middle border-none "
                                />
                              </label>
                              <input
                                id="file-input"
                                type="file"
                                accept="image/*"
                                onChange={handleImage}
                              />
                            </>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="text-center mt-0">
                      <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                        {agent.name}
                      </h3>
                      <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>{" "}
                        {agent.city}
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-10">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        {agent.category} - {agent.type}
                      </div>
                      <div className="mb-2 text-blueGray-600 mt-0">
                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                        {agent.is_verified === 1 ? (
                          <>Verified Agent</>
                        ) : (
                          <>
                            {agent.is_verified === 2 ? (
                              <>Not Verified</>
                            ) : (
                              <>Verification Pending</>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                    <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                      <div className="flex flex-wrap justify-center">
                        <div className="w-full lg:w-9/12 px-4">
                          <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                            An artist of considerable range, Jenna the name
                            taken by Melbourne-raised, Brooklyn-based Nick
                            Murphy writes, performs and records all of his own
                            music, giving it a warm, intimate feel with a solid
                            groove structure. An artist of considerable range.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>
          <Toaster />
        </>
      )}
    </>
  );
};

export default Profile;
