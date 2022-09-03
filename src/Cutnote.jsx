import React,{useState} from "react";
const Cutnote=(props)=>{
    const [stCut,setCut] =useState(false);
    const cutFun=()=>{
      setCut(true);
    };
    const unCut=()=>{
    setCut(false);
    };
return(<> <div className="row">
<div className="col-1">
<i className="bi bi-file-x-fill icon_boot" onClick={cutFun}></i>
<button style={{borderRadius:"50%"}} onClick={unCut}>✅</button>
</div>

<div className="col-11">
<li style={{textDecoration:stCut?"line-through":"none"}}>{props.noteItem}</li>
</div>

</div>
   
</>);
}
export default Cutnote;