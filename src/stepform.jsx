
import "./StepForm.css"; 
import React, { useState } from "react";
const StepForm = () => {
  const [step, setStep] = useState(1);
  const [change, setChange] = useState({
    name: "",
    email: "",
    age: 0,
    address: "", 
    phone: "", 
  });
 console.log(
    change,setChange
 );
 
  

  const handleChange = (e) => {
    const targetName = e.target.name;
    const value = e.target.value;
    setChange((prev) => ({
      ...prev,
      [targetName]: value,
    }));
  };


  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <div>
          <h1>Step 1 By Me</h1>
          <label>Name*</label>
          <input
            type="text"
            name="name"
            value={change.name}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Email*</label>
          <input
            type="email"
            name="email"
            value={change.email}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Age :</label>
          <input
            type="number"
            name="age"
            value={change.age}
            onChange={handleChange}
          />
          <br />
          <br />
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Step 2 By Ahsan malik</h1>
          <label>Adress*</label>
          <input
            type="text"
            name="address"
            value={change.address}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <label>Phone*</label>
          <input
            type="text"
            name="phone"
            value={change.phone}
            onChange={handleChange}
            required
          />
          <br />
          <br />
          <button className="prev-button" onClick={prevStep}>
            Previous
          </button>
          <button className="next-button" onClick={nextStep}>
            Next
          </button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Review</h1>
          <p>Name: {change.name}</p>
          <p>Email: {change.email}</p>
          <p>Age: {change.age}</p>
          <p>Address: {change.address}</p>
          <p>Phone: {change.phone}</p>
         
          
          <button className="prev-button" onClick={prevStep}>
            Previous
          </button>
          <button onClick={() => alert("hello ahsan malik")}>Submit</button>
        </div>
      )}
    </div>
  );
};

export default StepForm;