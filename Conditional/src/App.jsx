
import './App.css'
//conditional 
//(1)if-else
  function Student(){
    let age = 2;
    if(age>=18){
      return(
      <>
         <h1>Adult</h1>
      </>
    )
    }else return <h1>Minor</h1>
    
  }

  //(2)Ternory (?)
  //{condition ? true : false}

  function Voting(){
    let age = 22;
    return (
      <>
       {age>=19 ? <p>Vote</p> : <p>Not vote</p>}
      </>
    )
  }

  //(3)&&
  function Loging(){
    let isLoggedIn = true;
    return (
      <>
      {isLoggedIn && <button>Logout</button>}
      </>
    )
  }

function App() {
 
  return (
    <>
      <Student />
      <Voting />
      <Loging />
    </>
  )
}

export default App
