import { useState } from "react";




function Bro(){
const [name,setName] = useState("");

const [students,setStudents] =useState(["ali","khan","malik"]);


const Fast = (event)=>{
event.preventDefault();
setStudents(currentStudents => [...currentStudents, name])
setName("");
}


return(
<div>
    <form onSubmit={Fast}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="submit" />
    </form>
<br /><br />
<h1>new students</h1>
     <ol>
            {
                students.map((student,index) => <li key={index}>{student}</li>)
            }
        </ol>

    
</div>
)    

}

export default Bro;