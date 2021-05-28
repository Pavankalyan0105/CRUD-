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
      <select onChange={ (event) => {setBranch(event.target.value)}}>
              <option value="volvo">IT</option>
              <option value="saab">CSE</option>
              <option value="mercedes">MECH</option>
              <option value="audi">CIVIL</option>
              <option value="audi">ECM</option>

      </select>
      
      



      {/* <label> Branch </label>   <input onChange={ (event) => {setBranch(event.target.value)}}    type="text" required/> */}
      <label> Phoneno</label>   <input onChange={ (event) => {setPhoneno(event.target.value)}}     type="number" required/>
      <label>Email   </label>   <input onChange={ (event) => {setEmail(event.target.value)}}   type="text" required/>
      <input onClick = {addStudent}   type="button" value="submit" className="button"/>
    </form>
  );
}

export default App;
