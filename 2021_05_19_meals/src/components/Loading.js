import React from "react";

export default()=>{
   return(
       <div className="d-flex justify-content-center mt-3">
       <button className="btn btn-primary" type="button" disabled>
          <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true">
          </span>
          <br/> Food is loading...
       </button>
       </div>
   )
}