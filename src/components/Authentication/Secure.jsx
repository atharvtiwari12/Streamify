// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Cookies from "js-cookie";
// import MainPage from "../MainPage";

// export default function Secure() {
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState({});

//   const getUserDetails = async (accessToken) => {
//     const response = await fetch(
//       `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
//     );
//     const data = await response.json();
//     setUserDetails(data);
//   };

//   useEffect(() => {
//     const accessToken = Cookies.get("access_token");

//     if (!accessToken) {
//       navigate("/");
//     }

//     getUserDetails(accessToken);
//   }, [navigate]);

//   return (
//     <>
//       {userDetails ? (

//         <MainPage></MainPage>
//       ) : (
//         <div>
//           <h1>Loading...</h1>
//         </div>
//       )}
//     </>
//   );
// }

// Secure.js

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import MainPage from "../MainPage";
import NavbarComp from "../Navbar/NavbarComp";

export default function Secure() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);

  const getUserDetails = async (accessToken) => {
    const response = await fetch(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${accessToken}`
    );
    const data = await response.json();
    setUserDetails(data);
  };

  useEffect(() => {
    const accessToken = Cookies.get("access_token");

    if (!accessToken) {
      navigate("/");
    }

    getUserDetails(accessToken);
  }, [navigate]);

  return (
    <>
      {userDetails ? (
        <>
          <NavbarComp userDetails={userDetails} />
          <MainPage />
        </>
      ) : (
        <div>
          <h1>Loading...</h1>
        </div>
      )}
    </>
  );
}
