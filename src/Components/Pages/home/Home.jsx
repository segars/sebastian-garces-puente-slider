
import { useState } from "react";
import Navbar from "../../Common/navbar/Navbar";
import PruebasHooks from "../../Common/pruebasHooks/PruebasHooks";

export const Home = () => {

  const [ contador, setContador ] = useState(0)

  return (
    <>
      <Navbar />
      <PruebasHooks contador={contador}  setContador={setContador}/>
    </>
  );
};


