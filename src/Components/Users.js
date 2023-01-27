import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { addUser } from '../Slices/userSlice';

function Users() {
    const initState = 
        {
            Id:"01",
            Name:"Nitin singh",
            Age:20
        }
       
    
    const [userData,setUserData] = useState(initState);

    const data = useSelector((state) => state.user)
    const dispatch = useDispatch();

    function getData(){
        
        var list = [];
        data.map((d)=>{
            list.push(
                <div>
                    <h1>{d.Id}</h1>
                    <h2>{d.Name}</h2>
                    <h3>{d.Age}</h3>

                </div>
            )
        })
        return list;
    }


    function setDataToStore(e) {
        e.preventDefault();
        dispatch(addUser(userData));
        console.log("Users",e)
    }
  return (
    <div>


        <form onSubmit={setDataToStore} preventDefat>
            <input type='text' name='name'/>
            <input type='number' name='age'/>
           <input type='submit'/>
        </form>
      {getData()}
      <button onClick={setDataToStore}>SetDataToStore</button>
    </div>
  )
}

export default Users
