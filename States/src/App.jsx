/*
States - A component memory 
States is a built in React obj that is use to contains data or information about the component
to use state import the {useState} from react 
const [count,setCount] = useState(0);
count = current value;
setCount = memory / O value jo change hoti h
useState = Initial value or starting value 
note - State can store any datas
(1)Number 
const [age,setAge] = useState(21);
(2)String
const [name,setName] = useState("Rohit");

(3.)(boolean)
const [isOpent,setIsOpen] = useState(false);

(4)Array
const [items,setItems] = useState([]);
(5) Object 
const [user,setUser] = useState({
name:"Rohit"});

*/
import './App.css'
import { Counter } from './Counter'
import { LikedBtn } from './LikedBtn'


function App() {
  return (
    <>
    <Counter />
    <LikedBtn />
    
    </>
  )
}

export default App
