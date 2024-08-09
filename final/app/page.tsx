// export default function Home() {
//   return (
//     <>
//       <p>Hello Typescript</p>
//     </>
//   )
// }

import Hook from "../components/Hook";
import Basic from "@/components/Basic";
import React from "react";

const App:React.FC = () => {
  return (
    <>
      <h1>Wellcome to IT.BRU</h1>
      <p>Hello Typescript</p>

      <Basic initVal = "1" />

      <Hook initHook = "5" />
    </>
  );
};

export default App;
