import { useState } from "react";
import arrow from "../assets/Group 3.svg";
export default function Code({ value, index }) {
  const [show, setShow] = useState(true);
  const newline = value.patch.split("\n");
  const colorLine = value.patch.split("\n");
  // useEffect(() => {
  if (newline.length) {
    let minus = "";
    let plus = "";
    newline.forEach((data, index) => {
      if (data.charAt(0) === "@" && data.charAt(1) === "@") {
        let numberarray = data.split(",");
        minus = +numberarray[0].split("-")[1];
        // minusTotal = +numberarray[1].split(" ")[0];
        plus = +numberarray[1].split("+")[1];
        // plusTotal = +numberarray[2].split(" ")[0];
        // setMinus((value) => [...value, +minus - 1]);
        // setMinusTotal((value) => [...value, +minusTotal - 1]);
        // setPlus((value) => [...value, +plus - 1]);
        // setPlusTotal((value) => [...value, +plusTotal - 1]);
      } else if (data.charAt(0) === "-") {
        newline[
          index
        ] = `${minus}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${newline[index]}`;
        ++minus;
      } else if (data.charAt(0) === "+") {
        newline[
          index
        ] = `\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0${plus}\u00A0\u00A0${newline[index]}`;
        ++plus;
      } else {
        newline[
          index
        ] = `${minus}\u00A0\u00A0\u00A0${plus}\u00A0\u00A0\u00A0${newline[index]}`;
        ++minus;
        ++plus;
      }
    });
  }

  return (
    <div className="mar2rem">
      <div
        className="link flex-row align-center marginb-5"
        onClick={() => {
          setShow(!show);
        }}
      >
        <img
          src={arrow}
          className={`${show ? "rotate" : "notrotate"}`}
          alt={""}
        />
        <span>{value.filename}</span>
      </div>
      {show && (
        <div className="codebox src-code code-primary">
          {newline.map((data, idx) => {
            if (colorLine[idx].charAt(0) === "-") {
              return (
                <div key={data} className="removed">
                  {data}
                </div>
              );
            } else if (colorLine[idx].charAt(0) === "+") {
              return (
                <div key={data} className="added">
                  {data}
                  <br></br>
                </div>
              );
            } else {
              return (
                <div key={data}>
                  {data}
                  <br></br>
                </div>
              );
            }
          })}
        </div>
      )}
    </div>
  );
}
