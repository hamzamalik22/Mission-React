import React, { useState } from "react";
import FormProject_Form from "./FormProject_Form";
import FormProject_Cards from "./FormProject_Cards";

function FormProject() {
  const [user, setUser] = useState([]);

  const handleData = (data) => {
    setUser([...user, data]);
  };

  const handleRemove = (id) => {
    setUser(() => user.filter((item, index) => index !== id));
  };

  return (
    <div className="w-full h-screen bg-zinc-200 flex flex-col ">
      <FormProject_Cards handleRemove={handleRemove} values={user} />
      <FormProject_Form handleData={handleData} values={user} />
    </div>
  );
}

export default FormProject;
