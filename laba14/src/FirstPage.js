import React from "react";
import { SortTable } from "./SortTable";

function FirstPage() {
  return (
    <>
      <h1>first page</h1>
      <h2>Круглик Алексей Викторович</h2>
      <h2>{new Date().toLocaleDateString()}</h2>
      <SortTable />
    </>
  );
}

export default FirstPage;
