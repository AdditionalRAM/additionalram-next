import Image from "next/image";
import styles from "./page.module.css";
import ThreeCRT from "./components/ThreeCRT";
import RotatingIcons from "./components/RotatingIcons";

let elementsToRotate = [
  <p>X</p>,
  <p>A</p>,
  <p>B</p>,
  <p>C</p>,
  <p>D</p>,
  <p>E</p>,

];

export default function Home() {
  return (
    <main>
      <ThreeCRT elementID="threecrt" />
      <RotatingIcons elements={elementsToRotate} centerSelector="#threecrt" radius={200} speed={10} />
    </main>
  );
}
