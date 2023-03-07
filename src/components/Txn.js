import React, { useEffect, useState } from "react";
import PurchaseHistroy from "./PurchaseHistroy";

const Txn = () => {
  const [loading, setLoading] = useState(true);

  let [user, setUser] = useState();

  useEffect(() => {
    if (localStorage.getItem("agent") === null) {
      window.location.href = "/login";
    } else {
      setUser(JSON.parse(localStorage.getItem("agent")));
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading === true ? (
        <></>
      ) : (
        <>
          <PurchaseHistroy
            type={user.type}
            category={user.category}
            name={user.name}
            _id={user._id}
            city={user.city}
          />
        </>
      )}
    </>
  );
};

export default Txn;
