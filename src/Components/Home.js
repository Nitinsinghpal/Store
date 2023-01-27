import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import About from './About';
import Users from './API/UsersAPI';

function Home() {
    const initState = {"name" : "nitin" , "last" : "singh"}
    const [data ,setData] = useState(initState);

  return (
    <div>
      <div>
        <button><Link to="/">Home</Link></button>
        <button><Link to="/users">UserPage</Link></button>

      </div>
        <h1>From Home</h1>
      <table>
        <th>
            <tr>Name</tr>
            <tr>Last</tr>

        </th>
        <td>
            <tr>{data.name}</tr>
            <tr>{data.last}</tr>

        </td>
      </table>
      <hr />
      <About
        data={data}
        setData = {setData}

      />
      <Users />
    </div>
  )
}

export default Home
