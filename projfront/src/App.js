import  { useState } from 'react';
import './App.css';
import Axios from 'axios';



function App() {

  const [regdno , setRegdno] = useState()
  const [name ,   setName] = useState('')
  const [branch , setBranch] = useState('')
  const [email , setEmail] = useState('')
  const [phoneno , setPhoneno] = useState(0)

  const addStudent = ()=>{
      Axios.post("http://localhost:8080/create/" , {
        name : name , 
        regdno: regdno , 
        email : email ,
        phoneno: phoneno , 
        branch : branch 
    }).then(()=>{
      console.log("Successfully sent TO backend");
    })
    setRegdno("");
}

  // const display = ()=>{
  //     console.log(regdno);
  //     console.log(name);
  //     console.log(branch);
  //     console.log(email);
  //     console.log(phoneno);

  // }

  return (
    <form className="App">
      <label>Regd No </label>   <input onChange={ (event) => {setRegdno(event.target.value)}}    type="text" required/>
      <label >Name   </label>   <input onChange={ (event) =>  {setName(event.target.value)}}      type="text" required/>
      <label className="branch">Branch 
        <select onChange={ (event) => {setBranch(event.target.value)}}>
              <option value="IT">IT</option>
              <option value="CSE">CSE</option>
              <option value="MECH">MECH</option>
              <option value="CIVIL">CIVIL</option>
              <option value="ECM">ECM</option>

        </select>
      </label>
    

      {/* <label> Branch </label>   <input onChange={ (event) => {setBranch(event.target.value)}}    type="text" required/> */}
      <label> Phoneno</label>   <input onChange={ (event) => {setPhoneno(event.target.value)}}     type="number" required/>
      <label>Email   </label>   <input onChange={ (event) => {setEmail(event.target.value)}}   type="text" required/>
      <button onClick = {addStudent}   type="reset" value="submit" className="button">Submit</button>
    </form>
  );
}

export default App;
