import "./App.css";
// import { L7 } from "./components/s5/l7/L7";
// import { L8 } from "./components/s5/l8/L8";
import { MainInfo } from "./components/MainInfo/MainInfo";
import { StickerPack } from "./components/s5/StickerPack/StickerPack";
import { L10 } from "./components/s5/l10/L10";
import { L12 } from "./components/s5/l12_13/L12";
import { L14 } from "./components/s5/l14/L14";
import { L15 } from "./components/s5/l15/L15";
import { L16 } from "./components/s5/l16/L16";
import { L18 } from "./components/s5/l18/L18";
import { L19 } from "./components/s5/l19/L19";

function App() {
  return (
    <div className="App">
      <MainInfo />
      <div id="l19">
        <L19 />
      </div>
      <div id="l18">
        <L18 />
      </div>
      <div id="l16">
        <L16 />
      </div>
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
