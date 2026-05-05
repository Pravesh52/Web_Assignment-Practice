import React, { useEffect, useState } from 'react'
import axios from "axios"

const App = () => {

  const [data, setdata] = useState([]);
  const [selectuser, selectuserFn] = useState(null);
  const [searchinput, setsearchinput] = useState("");
  const [search, setsearch] = useState("");
  const[loading, setloading]=useState(false);
  const[error,seterror]=useState(null);

  useEffect(() => {
    setloading(true);
    seterror(null);

    axios.get("https://jsonplaceholder.typicode.com/users")

      .then((res) => {
        setdata(res.data);
        setloading(false)
        console.log(res.data);
      })
      .catch((err) => {
        setloading(false);
        seterror("Something went wrong...");

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

  const filterdata = data.filter((user) =>
    user.username.toLowerCase().includes(search.toLowerCase())
  );

  if(loading) return <h2>Loading....</h2>
  if(error) return <h2>{error}</h2>

  return (
    <div>

      <h1>Assignment 1</h1>

      <input
        type='text'
        placeholder='search the username'
        value={searchinput}
        onChange={(e) => setsearchinput(e.target.value)}
      />

      <button onClick={() => setsearch(searchinput)}>
        Search
      </button>

      {/* ✅ LIST */}
      {!selectuser && (
        filterdata.map((item) => (   // 🔥 FIX HERE
          <div key={item.id}>
            <h3>username:{item.username}</h3>
            <h3>Name: {item.name}</h3>
            <p>Email: {item.email}</p>
            <p>City: {item.address.city}</p>

            <button onClick={() => userdetail(item.id)}>
              User detail
            </button>
          </div>
        ))
      )}

      {/* ✅ DETAIL */}
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