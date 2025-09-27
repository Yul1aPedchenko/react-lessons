import "./App.css";
// import { L7 } from "./components/l7/L7";
// import { L8 } from "./components/l8/L8";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { StickerPack } from "./components/StickerPack/StickerPack";
import { L10 } from "./components/l10/L10";
import { L12 } from "./components/l12_13/L12";
import { L14 } from "./components/l14/L14";
import { L15 } from "./components/l15/L15";

function App() {
  return (
    <div className="App">
      <MainInfo />
      <div id="l15">
        <L15 />
      </div>
      <div id="l14">
        <L14 />
      </div>
      <div id="l12">
        <L12 />
      </div>
      <div id="l10">
        <L10 />
      </div>
      <div id="stickerPack">
        <StickerPack />
      </div>
      {/* <L8 />
      <L7 /> */}
    </div>
  );
}


export default App;
