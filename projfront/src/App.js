import  { useState } from 'react';
import './App.css';
import Axios from 'axios';



function App() {

  const [regdno , setRegdno] = useState('')
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
      console.log("Successfully sent ot backend");
    })
}

  // const display = ()=>{
  //     console.log(regdno);
  //     console.log(name);
  //     console.log(branch);
  //     console.log(email);
  //     console.log(phoneno);

  // }

  return (
    <div className="App">
      <label>Regd No </label>   <input onChange={ (event) => {setRegdno(event.target.value)}}    type="text"/>
      <label >Name   </label>  <input  onChange={ (event) => {setName(event.target.value)}}      type="text"/>
      <label> Branch </label>   <input onChange={ (event) => {setBranch(event.target.value)}}    type="text"/>
      <label> Phoneno</label>   <input onChange={ (event) => {setPhoneno(event.target.value)}}     type="number"/>
      <label>Email   </label>   <input onChange={ (event) => {setEmail(event.target.value)}}   type="text"/>
      <input onClick = {addStudent}   type="button" value="submit" className="button"/>
    </div>
  );
}

export default App;
