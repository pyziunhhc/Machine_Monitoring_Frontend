import React, { createContext, useContext } from "react";
import { useAuth } from "./useAuth";
const api = "api/v1";
const FetchContext = createContext({
  doFetch: () => {},
  getAllData: () => {},
  updateAllData: () => {},
  getChartJSData: () => {},
  getStatus: () => {},
  updateStatus: () => {},
  clearDataInSession: () => {},
});
const FetchProvider = ({ children }) => {
  const { setUser } = useAuth();
  const doFetch = async (url, method, data = null) => {
    try {
      const token = localStorage.getItem("token");
      const body = data ? JSON.stringify(data) : null;
      const options = {
        method,
        body,
        credentials: "include",
        headers: {
          Accept: "*",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      return fetch(`/${api}${url}`, options)
        .then(async (response) => {
          console.log(response);
          if (response) {
            switch (response.status) {
              case 401: {
                setUser(null);
                localStorage.removeItem("token");
                localStorage.removeItem("login");
                break;
              }
              case 403: {
                const { ...rest } = await response.json();
                return { message: rest.message };
              }
              case 200: {
                const result = await response.json();
                if (result) {
                  return { success: result.success, ...result };
                }
              }
              default:
                break;
            }
          }
        })
        .catch((error) => {
          console.log("dofetcherrror", error);
        });
    } catch (error) {
      throw new Error(error);
    }
  };
  const getAllData = async (name, type, from, to) => {
    try {
      const url = `/data/all/${name}?type=${type}&from=${from.toISOString()}&to=${to.toISOString()}`,
        method = "GET";
      const result = await doFetch(url, method);
      return result;
    } catch (error) {
      console.log(`MachineDetailsWindows error ${error}`);
    }
  };
  const updateAllData = async (name, from) => {
    try {
      const url = `/data/all`,
        body = {
          name,
          from,
        },
        method = "PUT";
      const result = await doFetch(url, method, body);
      return result;
    } catch (error) {
      console.log(`Update all data error ${error}`);
    }
  };
  const getChartJSData = async (machineName, type, from, to) => {
    try {
      const url = `/data/chartJS/${machineName}?type=${type}&from=${from.toISOString()}&to=${to.toISOString()}`,
        method = "GET";
      const result = await doFetch(url, method);
      return result;
    } catch (error) {
      console.log(`MachineDetailsWindows error ${error}`);
    }
  };
  const getStatus = async (name) => {
    try {
      const url = `/data/status/${name}`,
        method = "GET",
        result = await doFetch(url, method);
      return result;
    } catch (error) {
      console.log(`Get status error ${error}`);
    }
  };
  const updateStatus = async (name) => {
    try {
      const url = `/data/status`,
        method = "PUT",
        body = {
          name,
        },
        result = await doFetch(url, method, body);
      return result;
    } catch (error) {
      console.log(`Update status error ${error}`);
    }
  };
  const clearDataInSession = async (name) => {
    const url = `/data/clear`,
      method = "POST",
      body = {
        name,
      };
    await doFetch(url, method, body);
  };

  return (
    <FetchContext.Provider
      value={{
        doFetch,
        getAllData,
        updateAllData,
        getChartJSData,
        getStatus,
        updateStatus,
        clearDataInSession,
      }}>
      {children}
    </FetchContext.Provider>
  );
};
export const useFetch = () => {
  const fetch = useContext(FetchContext);
  if (!fetch) {
    throw Error("Fetch error");
  }
  return fetch;
};

useFetch.propTypes = {};

export default FetchProvider;
