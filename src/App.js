import React from "react";
import useSalutation from "./useSalutation";

export default function App() {
  const { salutation, SalutationBox, ToggleSalutationButton } = useSalutation();
  console.log(salutation);
  return (
    <div className="App">
      {salutation}
      <br />
      (useSalutation.salutation)
      <br />
      <br />
      <SalutationBox />
      (useSalutation.SalutationBox)
      <br />
      <br />
      <ToggleSalutationButton />
      <br />
      (useSalutation.ToggleSalutationButton)
    </div>
  );
}
