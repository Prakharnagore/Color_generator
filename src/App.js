import React, { useState } from "react";
import SingleColor from "./SingleColor";
import Values from "values.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      console.log(colors);
      setList(colors);
      setError(false);
    } catch (error) {
      toast.error("Enter Valid Color Code", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: "",
      });
      setError(true);
      setList([]);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color Generator</h3>

        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            placeholder="#ff5733"
            onChange={(e) => setColor(e.target.value)}
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Get Color
          </button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              hexColor={color.hex}
              key={index}
              {...color}
              index={index}
            />
          );
        })}
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
