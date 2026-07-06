import "./App.css";
import pookie from "./assets/pookiegrab.png";
//import title from "./assets/title.png";

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        {/*<img src={title} className="w-100 h-auto" alt="Olive" />*/}
        <h1 className="text-5xl pt-8 text-black font-mono font-extrabold">
          Olive's Portfolio
        </h1>
        <p className="pt-8">err... sorry, there's nothing here right now :/</p>
        <img
          src={pookie}
          className="pt-8 w-40 h-auto"
          alt="Pookie the cat :3"
        />
      </div>
    </>
  );
}

export default App;
