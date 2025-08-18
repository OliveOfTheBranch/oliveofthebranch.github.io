import "./App.css";
import pookie from "./assets/pookiegrab.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/*<img src={title} className="size-52" alt="Olive" />*/}
        <br />
        <h1 className="text-5xl text-black font-mono font-extrabold">
          Olive's Portfolio
        </h1>
        <br />
        <p>err... sorry, there's nothing here right now :/</p>
        <img src={pookie} className="scale-50" alt="Pookie the cat :3" />
      </div>
    </>
  );
}

export default App;
