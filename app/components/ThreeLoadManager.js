"use client";

import { useState } from "react";
import LoadingScreen from "./LoadingScreen";
import ThreeCRT from "./ThreeCRT";

export default function ThreeLoadManager({elementID, obeyParentContainer}) {
  const [isLoaded, setIsLoaded] = useState(false);

  console.log(elementID, obeyParentContainer)

  return (
    <>
      <LoadingScreen loaded={isLoaded} />
      <ThreeCRT elementID={elementID} obeyParentContainer={obeyParentContainer} onLoadComplete={() => setIsLoaded(true)} />
    </>
  );
}