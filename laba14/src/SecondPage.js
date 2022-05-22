import React from 'react'
import {Catalog} from "./Catalog"
function SecondPage() {
    return (
        <>
<h1>second page</h1>
<h2>Ивашкевич Александр Олегович</h2>
<h2>{`${new Date().getDate()-1}.${new Date().getMonth()}.${new Date().getFullYear()-1}`}</h2>
<Catalog />
</>
    );
  }
  
  export default SecondPage;