import React from "react";
import Image from "next/image";
import Map from "./image/map.png"

export default function Home() {
  return <Image src={Map} alt="Map Here"/>;
}


Home.requireAuth = true