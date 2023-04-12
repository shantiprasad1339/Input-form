import React, { useState } from 'react'

function OddEven() {
const[number ,setnumber] = useState(0);
const[item ,setitem] = useState();
function changefn (e){
return(
 setnumber(e.target.value),
setitem(number%2 == 0)

)  ;

};


  return (
    <>
    <div><h2>{number}  {item == 0 ? "This is an Even number" : 'This is an Odd number'} </h2></div><br/>
   
   <input type='number'  onChange={changefn} /> <br/> <br/>

   </>
  )
}

export default OddEven;