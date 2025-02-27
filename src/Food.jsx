// import { useState } from "react";
// function Villiam() {
//     const [name,setName] = useState("");
//     const [students,setStudents] = useState(["malik"]);
// const handleCheck = (event)=>{
//   event.preventDefault();
   
//   if(name.trim()!==""){
//  setStudents((currentStudents) => [...currentStudents, name]);
//  setName("");
//   }
   

// }
//     const handleDelete = (deletingStudent)=>{
// const newStudents = students.filter((student ) => student !== deletingStudent);
// setStudents(newStudents);
//     }
    
//     return (
//       <div>
//         <h1>Ahsan malik khan</h1>
//         <form onSubmit={handleCheck}>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input type="submit" />
//         </form>
//         <ul>
//           {students.map((student, index) => (
//             <li key={index}>
//               {student}
//               <button onClick={() => handleDelete(student)}>Delete</button>
//               <button onClick={() => handleEdit(student)}>Edit</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     ); 
// }
// export default Villiam;
import { useState } from "react";
import  "./food.css";

function Villiam() {
  const [name, setName] = useState("");
  const [students, setStudents] = useState(["malik"]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleCheck = (event) => {
    event.preventDefault();
    if (name.trim() !== "") {
      if (editingIndex !== null) {
      
        const updatedStudents = [...students];
        updatedStudents[editingIndex] = name;
        setStudents(updatedStudents);
        setEditingIndex(null);
      } else {
       
        setStudents((currentStudents) => [...currentStudents, name]);
      }
      setName("");
    }
  };

  const handleDelete = (deletingStudent) => {
    const newStudents = students.filter(
      (student) => student !== deletingStudent
    );
    setStudents(newStudents);
  };

  const handleEdit = (student, index) => {
    setName(student);
    setEditingIndex(index);
  };

  return (
    <div className="content">
      <h1>Ahsan Malik Khan</h1>
      <form onSubmit={handleCheck}>
        <input
          type="text"
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input className="addbtn" type="submit" value={editingIndex !== null ? "Update" : "Add"} />
      </form>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}
            <button className="delete" onClick={() => handleDelete(student)}>Delete</button>
            <button className="edit" onClick={() => handleEdit(student, index)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Villiam;
