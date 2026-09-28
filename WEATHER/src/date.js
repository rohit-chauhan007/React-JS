import { containerClasses } from "@mui/system";

function  myFunction(){
   const d  = new Date();
   const month = d.toLocaleDateString("en-US",{
    month:"short",
    day:"numeric"
   })
   return month;
}

export default myFunction;
