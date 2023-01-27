import React from 'react'

function About(props) {
    
   const data = props.data;
   const setData = props.setData;

   function update(){
       setData({...data,"name":"updated"})
   
   }
  return (
    <>
    <h1>From about</h1>
    <table>
    <th>
        <tr>Name</tr>
        <tr>Last</tr>

    </th>
    <td>
        <tr>{data.name}</tr>
        <tr>{data.last}</tr>

    </td>
    <button onClick={update}>Change</button>
  </table>
  </>
  )
}

export default About
