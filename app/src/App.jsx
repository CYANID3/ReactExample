import { useState } from 'react'
import Layout from './components/Layout/Layout'
import Cards from './components/Cards/Cards'
import Card from './components/Card/Card'

function App() {
  const [state, setState] = useState( {
    users: [
    ]
  })



  const addUser = () => {
    const newstate = {...state};
    newstate.users = [...state.users];
    let str = document.querySelector("#text").value;
    let user = {uname: str}
    newstate.users.push(user);
    setState(newstate);
  }


  return (


    <Layout>
    <input id='text' type="text" />
    <button onClick={addUser}>Add</button>
   <Cards>
    {state.users.map((user, index) => (
    <Card key={index} uname={user.uname}/>
      ))}
   </Cards>
    </Layout>
 
  )
}

export default App
