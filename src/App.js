import "./App.css";
// import { L7 } from "./components/l7/L7";
// import { L8 } from "./components/l8/L8";
import { StickerPack } from "./components/StickerPack/StickerPack";
import { L10 } from "./components/l10/L10";
import { L12 } from "./components/l12/L12";

function App() {
  return (
    <div className="App">
      <L12></L12>
      <L10></L10>
      <StickerPack></StickerPack>
      {/* <L8 />
      <L7 /> */}
    </div>
  );
}

export default App;
