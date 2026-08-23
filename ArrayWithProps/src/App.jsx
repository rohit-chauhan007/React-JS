//passing Array in props 
//(1) dt arrayname = ["items",""];
//(2) dt arrayname = [{key:"val"}]--array of object
//access pass on the with props


//rendering array
//(1) wrap items with li tag [<li>"apple"</li>];
//(2)use map methode -- arrayname.map((copyofarray name//newArrayname)) => <li>{newArrayname};

import './App.css'
//destructring in props
function Student({name,age,mark}){
  let subject = ["chemmistry","physics","math"];
  return (
    <>
    <h1>name = {name}</h1>
    <h1>age = {age}</h1>
    <h1>marks {mark}</h1>
    <p>subbjects  {subject.map((sub)=>
      <li>{sub}</li>
    )}</p>
    </>
  )
}

function App() {
 

  return (
    <>
     <Student name="rOHIT" age={22} mark={92}/>
    </>
  )
}

export default App
