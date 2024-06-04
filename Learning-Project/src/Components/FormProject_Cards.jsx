import React from "react";
import FormProject_SingleCard from "./FormProject_SingleCard";

function FormProject_Cards({ values, handleRemove }) {
  return (
    <div className="container w-full px-5 h-96 h-max-96 justify-center items-center flex gap-5 flex-wrap overflow-auto">
        <FormProject_SingleCard handleRemove={handleRemove} values={values} />
    </div>
  );
}

export default FormProject_Cards;
