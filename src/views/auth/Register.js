import axios from "axios";
import FooterSmall from "components/Footers/FooterSmall";
import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

export default function Register() {
  const [fileloading, setFileLoading] = useState(false);
  const [agent, setAgent] = useState({
    email: "",
    name: "",
    phone: "",
    city: "",
    password: "",
    document: "",
    category: "",
    brand: "",
    type: "",
    is_verified: 0,
    credit: 0,
    profile_img: "https://i.ibb.co/LhVypFg/image-removebg-preview.png",
  });

  const [doc, setDoc] = useState();

  const handleFileSubmit = async (e) => {
    setFileLoading(true);
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    formdata.append("upload_preset", "ivhaobec");

    const dataFile = await fetch(
      "https://api.cloudinary.com/v1_1/dfhginrxj/image/upload",
      {
        method: "POST",
        body: formdata,
      }
    )
      .then((r) => r.json())
      .catch((err) => {
        toast.error("Internal Server Error");
      });
    if (dataFile.secure_url !== null) {
      toast.success("Uploaded Successfully");
      setFileLoading(false);
      setDoc(dataFile.secure_url);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAgent((event) => {
      return {
        ...event,
        [name]: value,
      };
    });
  };

  const handleSubmit = () => {
    agent.document = doc;

    if (
      agent.category === "" ||
      agent.city === "" ||
      agent.document === "" ||
      agent.email === "" ||
      agent.name === "" ||
      agent.password === "" ||
      agent.phone === "" ||
      agent.type === ""
    ) {
      toast.error("Please Fill the whole Form to register");
    } else {
      axios
        .post(
          "https://embarrassed-jewelry.cyclic.app/agent/agent_register",
          agent
        )
        .then((res) => {
          if (res.status === 200) {
            toast.success("Registered Successfully, You can now Login");
            setTimeout(() => {
              window.location.href = "/under-verification";
            }, 500);
          }
        })
        .catch((err) => {
          if (err.response.status === 403) {
            toast.error("Email Address Already Exists");
          } else {
            toast.error("Internal Server Error");
          }
        });
    }
  };

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
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                  <div className="rounded-t mb-0 px-6 py-6"></div>
                  <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                    <div className="text-center mb-3">
                      <h6 className="text-blueGray-500 text-sm font-bold">
                        Sign in Now
                      </h6>
                    </div>
                    <div className="text-blueGray-400 text-center mb-3 font-bold"></div>
                    <form>
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Name
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Name"
                          name="name"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Password"
                          name="password"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone
                        </label>
                        <input
                          type="number"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="+1 454561312"
                          name="phone"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="AmsterDam"
                          name="city"
                          onChange={handleChange}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Insurance Category
                        </label>
                        <select name="category" onChange={handleChange}>
                          <option selected>----------------</option>
                          <option value="Life Insurance">Life</option>
                          <option value="Non-Life Insurance">Non-Life</option>
                        </select>
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Insurance Brand
                        </label>
                        <input
                          type="text"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Example"
                          name="brand"
                          onChange={handleChange}
                        />
                      </div>
                      {fileloading !== false ? (
                        <>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                              htmlFor="grid-password"
                            >
                              Uploading Document.....
                            </label>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Submit a Registration Document
                        </label>
                        <input
                          type="file"
                          accept=".pdf"
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          placeholder="Example"
                          name="document"
                          onChange={handleFileSubmit}
                        />
                      </div>

                      <div className="relative w-full mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Insurance Type
                        </label>
                        <select name="type" onChange={handleChange}>
                          <option selected>---------</option>
                          <option value="Health Insurance">
                            Health Insurance
                          </option>
                          <option value="Life Insurance">Life Insurance</option>
                          <option value="Car Insurance">Car Insurance</option>
                          <option value="House Insurance">
                            House Insurance
                          </option>
                          <option value="Business Insurance">
                            Business Insurance
                          </option>
                        </select>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                          type="button"
                          onClick={handleSubmit}
                        >
                          Create Account
                        </button>
                      </div>
                      <div className="w-1/2">
                        <Link to="/login">
                          <p>Login Here</p>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterSmall absolute />
        </section>
      </main>
      <Toaster />
    </>
  );
}
