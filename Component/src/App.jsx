//component - component is  a reusable and independent piece of code
//note: to render any component alway use render component function name in to App function
//to render have to methode
//1><Htmltag></html> - html tag with closing tag
//only closing tag opposite use to render <title/>

/*
import or export 
import other jsx file to render eg - Title.jsx
use 
import Title from "Title.jsx"; import ke baad title use hota render ke lie export me
or "Title.jsx" - path h jaha se file import ho rha h

export - use export before the import to render
note - import - file ko render karane ke lie 
export - file ko transfer or use krne lie use hota h
types of export
(1) defualt - export default file name without jsx- use to single value export 

(2) name export - name export use to multiple component/value or function to use/render
syntax - export {Title}; multiple value
import {Title} from "Title.jsx" - import multiple value



*/
//for single value use 

import './App.css';
// import Title from './Title' //for single value 
//for multiple value use named import 
import { Title } from './Title';

function Description() {
  return <h1>Description</h1>
}

function App() {
  return (
    <>
    <Title />
    <Title />
  <Description />
    </>
  )
 

  
 
}

export default App
