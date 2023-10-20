import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  //set user's input
  const [color, setColor] = useState(0);
  //set if this color exist or error
  const [error, setError] = useState(false);
  //set lists of library colors
  const [list, setList] = useState([]);

  function handleBtn(e) {
    e.preventDefault();

    // :::::::::::::I use this library for purpose of checking if my input colors exist in my predefined colors library or Not:::::::::::::
    try {
      const colors = new Values(color).all(10);
      setList(colors);
      console.log(color);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      <section className="container">
        <h2>color generator project</h2>
        <form onSubmit={handleBtn}>
          <input
            placeholder="#f515025"
            className={`${error ? "error" : "null"}`}
            type="text"
            value={color}
            onChange={(e) => {
              setColor(e.target.value);
            }}
          />
          <button className="btn" type="submit">
            submit
          </button>
        </form>
      </section>
      <section className="colors">
        {/* <p>{color} hi</p> */}
        {list.map((item, index) => {
          return <SingleColor key={index} index={index} {...color} />;
        })}
      </section>
    </>
  );
}

export default App;
