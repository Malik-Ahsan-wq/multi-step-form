import React, { useState } from "react";
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import "./newform.css"
function NewForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: 0,
    email: "",
    password:0 ,
  });
  const handleChange = (e) => {
    const setName = e.target.name;
    const value = e.target.value;
    setFormData((prev) => {
      return { ...prev, [setName]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="hello">
      <form onSubmit={handleSubmit}>
        <label>Enter Name</label>
        <br />
        <input
          type="text"
          placeholder="enter name.."
          value={formData.name}
          name="name"
          required
          onChange={handleChange}
        />
        <IoPerson className="icon" />

        <br />
        <label>Enter Age</label>
        <br />
        <input
          type="number"
          required
          placeholder="enter age.."
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <br />
        <label>Enter Email</label>
        <br />
        <input
          type="email"
          placeholder="enter email.."
          value={formData.email}
          name="email"
          required
          onChange={handleChange}
        />
        <MdEmail className="icon2"/>
        <br />
        <label>Enter Password</label>
        <br />
        <input
          type="number"
          placeholder="enter password.."
          value={formData.password}
          name="password"
          required
          onChange={handleChange}
        />
        <br />
        <input type="submit" className="button" />

        <p>Name : {formData.name}</p>
        <p>Age : {formData.age}</p>
        <p>Email : {formData.email}</p>
        <p>Password : {formData.password}</p>
      </form>
    </div>
  );
}

export default NewForm;
