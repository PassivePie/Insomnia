import React, { useState, useEffect } from "react";
import axios from "axios";

function Quotes() {



  const [accountEmail, setEmail] = useState('')
  const [accountPassword, setPassword] = useState('')
  
  useEffect(() => {
    // axios.post("http://localhost:3001", {user: navigator.userAgent} ).then(response => {
    //   console.log(response)
    // });

  });


  return (
    <div>
      <form onSubmit={function () {
        axios.post("http://localhost:3001", { email: accountEmail, password: accountPassword })
      }}>

        Email:
        <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
        Password:
        <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
        <input type="submit" value="Submit" />
      </form>



    </div>
  )
}
export default Quotes;