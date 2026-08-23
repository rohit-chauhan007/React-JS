
import './App.css'
import ProductTab from './ProductTab';
import "./ProductTab.css";

//STYLING
//(1) inline style = {{}}- Use a JavaScript object to define styles.
//(2) saperate file - import karke 
//(3)Dynamic styling
function Product(){
  return <h1 style={{color:"red",fontSize:"5vw"}}>Hello</h1>
}


function App() {
 

  return (
  <>
   <ProductTab />
   <Product />
  </>
  )

}

export default App
