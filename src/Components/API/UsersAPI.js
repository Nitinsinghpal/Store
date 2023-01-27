import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getUsers } from '../../Slices/userSlice';
import axios from 'axios';

function UsersAPI() {
    const [st , setSt] =useState();
    const userData = useSelector((state) => state.user.data)
    const dispatch = useDispatch();
    

    function get(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((d) => {
           setSt(d.data)
        })
        dispatch(getUsers(st))
    }


    function show() {
        console.log(userData);
    }

        function display() {
        var list =[];
        userData.map((d) =>{
            if(!d === undefined){
                d.map((data)=>{
                    list.push(
                        <div>
                        <h1>{data.id}</h1>
                        <h2>{data.name}</h2>
                        <hr/>
                        </div>
                        
                    )
                })
            }
            else{
                list.push(<div>

                    <h1>Loading...</h1>
                </div>)

            }
        })
            
        return list;
    }
  return (
    <div>
      <button onClick={() =>{dispatch(getUsers())}}>GetUsers</button>

      <button onClick={get}>Add To store</button>
      <button onClick={show}>Show</button>
             {display()}
      <button onClick={display}>display</button>

         {display()}

    </div>
  )
}

export default UsersAPI






















//#region Commented

// import React, { useState } from 'react'
// import axios from 'axios'
// function Users() {

//     const [data , setData]= useState();

//    function call() {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//     .then((d)=>
//     {
//         console.log(d);
//         setData(d.data)
//     })
//    }

//     function stateData(){
//         console.log(data);
//     }

//     function display() {
//         var list = [];
//         data.map((d)=>{
//             list.push(
//                 <div>
//                 <h1>{d.id}</h1>
//                 <h2>{d.name}</h2>
//                 <hr/>
//                 </div>
                
//             )
//         })
//         return list;
//     }
//   return (
//     <div>
//       <button onClick={call}>call</button>
// <br/>
//       <button onClick={stateData}>StateData</button>
//         {display()}
//     </div>
//   )
// }

// export default Users

//#endregion