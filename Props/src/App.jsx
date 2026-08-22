//Props = properties
//Props can contain different types
//Props are Read-Only
//Child component directly props ko change nahi kar sakta.
//Props - Props are use to send information in one component to another component
//propes are like function with call or parameter
 //parent -child ko data send karta h 
 //props-  child me hota h
 //parent-->props-->child
 //Multiple Props
 function Teacher(props){
  return <h1>Name  = 
      {props.name}
      {props.age}

    </h1>
 }
 //DESTRUCTRING PROPS

 function Car({Model,engine,price}){
  return (
    <>
    <h1>{Model}</h1>
    <h1>{engine}</h1>
    <h1>{price}</h1>
    </>
  )
 }

 function Student(props){
  return <h1>Hello {props.name}</h1>
 }


import {ProductTab} from './ProductTab';
// function Student(props){//funtion with parameter
//    return <h1>hello {props.name} </h1>//access key
// }


function App() {
  return (
    <>

    <Teacher name="Sumit" age ={20}/>
     <Student name = "rohit kumar"/>
     <Car Model="Toyota" engine="Petrol" price = {200}/>
     <ProductTab/>
    </>
  )
}

export default App;
