import React, { useState } from "react";

function SimpleForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: 0,
  });

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [targetName]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter Name</label>
      <input
        type="text"
        onChange={handleChange}
        value={formData.name}
        name="name"
        placeholder="write name"
        required
      />
     
      <br />
      <label htmlFor="">Age</label>
      <input
        type="number"
        onChange={handleChange}
        placeholder="age"
        name="age"
        value={formData.age}
        required
      />
      <br />
      <label>Email</label>
      <input
        type="email"
        onChange={handleChange}
        placeholder="email adress"
        name="email"
        required
        value={formData.email}
      />
      <br />
      <input type="submit" />
     
      <p>Name : {formData.name} </p>
      <p>Email : {formData.email} </p>
      <p>Age : {formData.age} </p>
     
    </form>
  );
}

export default SimpleForm;
