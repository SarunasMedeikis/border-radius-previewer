import "./App.css";
import React from "react";

function App() {
  const [sides, setSides] = React.useState({
    borderTopLeft: 0,
    borderTopRight: 0,
    borderBottomRight: 0,
    borderBottomLeft: 0,
  });

  function onChange(event) {
    return setSides({ ...sides, [event.target.name]: event.target.value });
  }

  function copyToClipboard() {
    let toCopy = document.getElementById("copy-to-clipboard");
    toCopy.select();
    toCopy.setSelectionRange(0, 99999); /* For mobile devices */
    document.execCommand("copy");
  }
  const styles = {
    borderTopLeftRadius: `${sides.borderTopLeft}%`,
    borderTopRightRadius: `${sides.borderTopRight}%`,
    borderBottomRightRadius: `${sides.borderBottomRight}%`,
    borderBottomLeftRadius: `${sides.borderBottomLeft}%`,
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>To see the results, pull on the sides of the item.</p>
        <div className="flexing-top">
          <input
            className="horizontal-slider"
            type="range"
            min="0"
            max="100"
            name="borderTopLeft"
            value={sides.borderTopLeft}
            onChange={onChange}
          />
          <div className="flexing-sides">
            <input
              className="vertical-slider"
              type="range"
              min="0"
              max="100"
              orient="vertical"
              name="borderBottomLeft"
              value={sides.borderBottomLeft}
              onChange={onChange}
            />
            <div className="border-box" style={styles}></div>
            <input
              className="vertical-slider"
              type="range"
              min="0"
              max="100"
              orient="vertical"
              name="borderTopRight"
              value={sides.borderTopRight}
              onChange={onChange}
            />
          </div>
          <input
            className="horizontal-slider"
            type="range"
            min="0"
            max="100"
            name="borderBottomRight"
            value={sides.borderBottomRight}
            onChange={onChange}
          />
        </div>
        <label>Border Radius</label>
        <div className="copy-button">
          <input
            id="copy-to-clipboard"
            type="text"
            value={`border-radius: ${sides.borderTopLeft}% ${sides.borderTopRight}% ${sides.borderBottomRight}% ${sides.borderBottomLeft}%`}
          />
          <button onClick={copyToClipboard}>Copy text</button>
        </div>
      </header>
    </div>
  );
}

export default App;
