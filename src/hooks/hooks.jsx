import { useEffect } from "react";
import { useState } from "react";

import axiosInstance from "../api/axios";
// import axiosInstance from "../api";

export default function useApi(endpoint, paramarray) {
  let [data, setData] = useState();

  useEffect(() => {
    // if (operation === "GET") {
    // axiosInstance.get(endpoint).then(res=>{
    // console.log(res);
    // setData(res.data);

    // }).catch(err=>toast(err.message))
    // .finally(()=>{toast(data.data.Message)})
    // }
    // axiosInstance.get("http://localhost:5000/repositories");
    if (endpoint === "code") {
      axiosInstance
        .get(
          `http://localhost:5000/repositories/${paramarray[1]}/${paramarray[2]}/commit/${paramarray[4]}`
        )
        .then((res) => res.data)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    } else {
      axiosInstance
        .get(
          `http://localhost:5000/repositories/${paramarray[1]}/${paramarray[2]}/commit/${paramarray[4]}/diff`
        )
        .then((res) => res.data)
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
  }, [endpoint, paramarray]);

  return data;
}
