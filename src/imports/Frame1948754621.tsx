import svgPaths from "./svg-qht6xbmyii";
import img1 from "figma:asset/b0460b1edc0d9d55f166bcbc4310a987bd335d06.png";
import img2 from "figma:asset/5357c2e7ac997c3a22353db0ddb495a4ba0da64e.png";
import imgChangeColorHere from "figma:asset/2964db5204a0b3fa2485235a2b64876661d4c936.png";
import imgDisplayFrame from "figma:asset/10be8110865394191da0a1a0acbe7fb243194e56.png";
import img4 from "figma:asset/728c0343ff0cba929af2a00ca023bb8b6879c1ba.png";
import img5 from "figma:asset/e3b223bd4a3dc576f680288b808ab2c7e0c09f41.png";
import imgChangeColorHere1 from "figma:asset/08acafdd38c0f549544251b6fee4bec3d83f5aea.png";
import imgDisplayFrame1 from "figma:asset/80a14c9f52232ff860d2014c687d3e473bb452ba.png";
import { img, img3 } from "./svg-8cham";

function Screen() {
  return (
    <div className="absolute contents left-[-0.28px] top-[40.12px]" data-name="Screen">
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[-0.28px] top-[39.74px]" data-name="Group">
      <Screen />
    </div>
  );
}

function IPhone() {
  return (
    <div className="absolute contents left-[calc(50%+166.84px)] top-[39.61px] translate-x-[-50%]" data-name="iPhone">
      <Group />
    </div>
  );
}

function Screen1() {
  return (
    <div className="absolute contents left-[-355.27px] top-[0.54px]" data-name="Screen">
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[-355.28px] top-[0.13px]" data-name="Group">
      <Screen1 />
    </div>
  );
}

function IPhone1() {
  return (
    <div className="absolute contents left-[calc(50%-139.41px)] top-0 translate-x-[-50%]" data-name="iPhone">
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-0 top-0">
      <IPhone />
      <IPhone1 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="relative size-full">
      <Group2 />
    </div>
  );
}