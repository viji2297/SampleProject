import React from "react";
import  Button  from "react-bootstrap/Button";
import { handleLinkChange } from "../Common/Common.tsx";

function Layout_Eight(){
return(
    <div className="bg-custom-color align-items-center p-4">
        <div className="mt-5">
        <h1 className="text-white">
          Get Hexnode UEM and start securing your{" "}
          <span className="d-block">endpoints</span>
        </h1>        
        <Button variant='danger' size="lg" className="mb-5 mt-4" onClick={handleLinkChange}>TRY HEXNODE FOR FREE</Button>
        </div>
    </div>
)
}

export default Layout_Eight;