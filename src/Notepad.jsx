import React , { useState } from "react";
import Note from "./Note";
import Cutnote from "./Cutnote";
const Notepad = () =>{
 const [note,setNote] = useState();
 const [noteArr,setNoteArr] = useState([]);
 const [cutArr,setCutArr] = useState([]);
   const changeFun = (event) =>{
   setNote(event.target.value);
   } ;
   const AddFun = () =>{
  setNoteArr((oldValues)=>{
    return(
        [ ...oldValues ,note ]
    );
  });
 
  setCutArr((preValue)=>{
return([...preValue,note]);
  });

  setNote("");

};
const RemFun=(id)=>{
setNoteArr((OldValues)=>{
    return OldValues.filter((valElem,indElem)=>{
    return indElem !== id ;
    })
});
};

return(<>
    <div className="container col text-white bg-info mt-4 p-4 " style={{borderRadius:"10px 40px 10px"}}>
        <h1 style={{fontFamily:"cursive"}}>Mayank's Notepad</h1>
        <hr/>
        <div className="row">
        <div className="col-10">
        <textarea className="form-control" type="text" value={note}
        placeholder="Write your note" onChange={changeFun} />
        </div>
        <div className="col-2">
        <button className="add p-1" onClick={AddFun}>+</button>
        </div>
        </div>
    </div>

    <div className="container col text-white bg-dark mt-4 p-4 " style={{borderRadius:"10px 40px 10px"}} >
     <h5>YOUR NOTES WILL BE VISIBLE HERE WHICH YOU CAN CUT</h5>
     <hr/>
     <ol>
        {
            cutArr.map((ArrVal,index)=>{
             return <Cutnote key={index} 
             id={index}
              noteItem = {ArrVal} 
              
              />
            })
        }
     </ol>
    </div>
    <hr/>
    <div className="container col text-white bg-dark mt-4 p-4 " style={{borderRadius:"10px 40px 10px"}} >
     <h5>YOUR NOTES WILL BE VISIBLE HERE</h5>
     <hr/>
     <ol>
        {
            noteArr.map((ArrVal,index)=>{
             return <Note key={index} 
             id={index}
              noteItem = {ArrVal} 
                DelFun={RemFun}
              />
            })
        }
     </ol>
    </div>
</>)
};
export default Notepad;