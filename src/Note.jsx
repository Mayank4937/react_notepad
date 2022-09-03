import React from "react";

const Note = (props) =>{
return(<>
<div className="row">
<div className="col-1">
<i className="bi bi-file-x-fill icon_boot"
 onClick={()=>{
props.DelFun(props.id)
}}></i>
</div>

<div className="col-11">
<li>{props.noteItem}</li>
</div>

</div>
   
   
    <hr/>
    
</>);
}

export default Note;