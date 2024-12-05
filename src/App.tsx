import { useState, useEffect } from "react";
import Entry from "./Entry";
import Info from "./Info";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState({});

  useEffect(() => {
    const characterID = encodeURIComponent(name.toLowerCase());
    const url = `https://theofficeapi.dev/api/character/${characterID}`;
    fetch(url)
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setData(`${e}`));
  }, [name]);

  return (
    <div className="App">
      <article>
        <header>
          <div>the office</div>
        </header>
        <main>
          <p>Enter a number between 1-83 to learn about a character!</p>
          <Entry action={setName} />
          <Info data={data} />
          <img
            style={{ height: 140 }}
            src="https://cdn.pixabay.com/photo/2016/04/01/08/27/beat-1298726_1280.png"
            alt="beet photo"
          />
          <img
            style={{ height: 100 }}
            src="https://cdn.pixabay.com/photo/2013/07/12/18/19/teapot-153271_1280.png"
            alt="teapot photo"
          />
        </main>
        <footer>
          <div>©2024</div>
          <a href="https://codesandbox.io/p/sandbox/frosty-sky-3fsct4?workspaceId=979b2f4f-8a95-47e7-9bb5-a3ca8f5687fc">
            Code
          </a>
        </footer>
      </article>
    </div>
  );
}
