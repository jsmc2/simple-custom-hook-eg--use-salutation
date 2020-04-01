import React, { useState } from "react";

export default useSalutation;
function useSalutation() {
  const [salutation, setSalutation] = useState("Hello");

  const getSalutation = () => salutation;

  const toggleSalutation = () => {
    const newSalutation =
      salutation === "Hello" || salutation === "Hello Again"
        ? "Goodbye"
        : "Hello Again";
    console.log(
      ">>> @newSalutation | salutation, newSalutation: ",
      salutation,
      newSalutation
    );
    setSalutation(newSalutation);
  };

  const SalutationBox = () => {
    return (
      <div
        className="SalutationBox"
        style={{ border: "solid", width: "100px", padding: "5px" }}
      >
        {getSalutation()}
      </div>
    );
  };

  const ToggleSalutationButton = () => {
    return (
      <button className="ToggleSalutationButton" onClick={toggleSalutation}>
        Toggle Salutation
      </button>
    );
  };

  return {
    salutation,
    getSalutation,
    toggleSalutation,
    setSalutation,
    SalutationBox,
    ToggleSalutationButton
  };
}
