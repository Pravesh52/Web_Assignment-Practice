import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [data, setdata] = useState([]);
  const [selectuser, selectuserFn] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setdata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userdetail = (id) => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        selectuserFn(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div>

      <h1>Assignment 1</h1>

      
      {!selectuser && (
        data.map((item) => (
          <div key={item.id}>
            <h3>Name: {item.name}</h3>
            <p>Email: {item.email}</p>
            <p>City: {item.address.city}</p>

            <button onClick={() => userdetail(item.id)}>
              User detail
            </button>
          </div>
        ))
      )}

     
      {selectuser && (
        <div>
          <h2>User Details</h2>
          <p>Phone: {selectuser.phone}</p>
          <p>Website: {selectuser.website}</p>
          <p>Company: {selectuser.company.name}</p>

         
          <button onClick={() => selectuserFn(null)}>
            Back
          </button>
        </div>
      )}

    </div>
  )
}

export default App;