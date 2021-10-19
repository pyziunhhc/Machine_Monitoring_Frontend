// import React, { useState, useEffect, useReducer } from "react";
// import { useCookies } from "react-cookie";
// import { doFetch } from "helpers/fetchers";
// import LoginScreen from "views/LoginScreen/LoginScreen";
// import Main from "views/Main/Main";
// import PropTypes from "prop-types";
// import Login from "views/LoginScreen/LoginScreen";
// const reducer = (state, action) => {
//   const { type } = action;
//   switch (type) {
//     case "SET USER":
//       state.user = action.value;
//       return state;
//     case "SET TOKEN":
//       state.token = action.value;
//       return state;
//     default:
//       return state;
//   }
// };
// const initialUserState = {
//   user: "",
//   token: "",
// };
// export const UsersContext = React.createContext({
//   user: "",
//   token: "",
//   page: null,
//   signIn: () => {},
//   signOut: () => {},
//   //   checkUserIsLogged: () => {},
// });
// const UsersProvider = ({ children }) => {
//   const [userData, dispatch] = useReducer(reducer, initialUserState);
//   const [cookies, setCookie, removeCookie] = useCookies(["user"]);
//   const signIn = async (login, token) => {
//     try {
//       setCookie("login", login, { path: "/" });
//       setCookie("token", token, { path: "/" });
//       setPage(<Main login={login} signOut={signOut} />);
//     } catch (error) {}
//   };
//   const signOut = async () => {
//     try {
//       removeCookie("login");
//       removeCookie("token");
//       setPage(<LoginScreen signIn={signIn} />);
//     } catch (error) {}
//   };
//   const [page, setPage] = useState(<LoginScreen signIn={signIn} />);
//   const checkUserIsLogged = async () => {
//     try {
//       if (cookies.hasOwnProperty("token")) {
//         const url = `/auth/check`,
//           method = "GET",
//           { success } = await doFetch(url, method);

//         if (success) {
//           setPage(<Main login={cookies.login} signOut={signOut} />);
//         } else {
//           removeCookie("login");
//           removeCookie("token");
//           setPage(<LoginScreen signIn={signIn} />);
//         }
//       } else {
//         setPage(<LoginScreen signIn={signIn} />);
//       }
//     } catch (error) {
//       console.log(`Check user is logged error ${error}`);
//     }
//   };
//   useEffect(() => {
//     checkUserIsLogged();
//     return () => {};
//   }, []);
//   return (
//     <UsersContext.Provider
//       value={{
//         user: userData.user,
//         token: userData.token,
//         page,
//         signIn,
//         signOut,
//         // checkUserIsLogged,
//       }}>
//       {children}
//     </UsersContext.Provider>
//   );
// };

// UsersProvider.propTypes = {};

// export default UsersProvider;
