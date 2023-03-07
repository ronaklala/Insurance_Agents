import React, { useState, useEffect } from "react";
import PlanProduct from "./PlanProduct";

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Checkout() {
  const [message, setMessage] = useState("");

  let [user, setUser] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (localStorage.getItem("agent") === null) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(localStorage.getItem("agent")));
      setLoading(false);
    }

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return loading !== true ? (
    <>
      {message ? <Message message={message} /> : <PlanProduct id={user._id} />}
    </>
  ) : (
    <></>
  );
}
