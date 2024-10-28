import React from "react";
import { useEffect } from "react";
import useDrivePicker from 'react-google-drive-picker'
import Navbar from "../../Navbar";
import Footer from "../../Footer";
// import Navbar from "../../Navbar";
// import Footer from "../../Footer";
// import { useNavigate } from "react-router-dom";
// import '../../Course.css'; 
// import Card from "../../Card";  
function Upload1() {
  const [openPicker, data, authResponse] = useDrivePicker();
    const handleOpenPicker=() => {
        openPicker({
            clientId:"149820638631-i8e6skmklimi705eqrc4k254v4su50vv.apps.googleusercontent.com",
            developerKey: zzzzz,
            viewId: "DOCS",
            token:"ya29.a0AcM612wtCcogHwhs0n2MNgoJslB4PeImUx0pTXU7MJLAxbFFcGuyeh4NqRjBYizI41CmIvXeeZf3L1oCRtJUyPbX1IldUtX6o1w7yuapiBYnloQD7jD_DxxWq_xL2lMRWi7Rkj5wdeUqlz_C9PhW-w1PIaCpP5eVGzrvtQ18aCgYKAS4SARISFQHGX2MiFm1KQI6dtsL1elII3vdAmw0175",   
            showUploadView:true,
            showUploadFolders:true,
            supportDrives:true,
            multiselect:true,
    
        })
       
    }
    useEffect(()=>{
        if(data){
            data.docs.map((i)=>console.log(i))
        }

    },[data])
  return (
    <div>
        {/* <Navbar/> */}
        <button onClick={()=> handleOpenPicker()}>Upload Here</button>
        {/* <Footer/> */}
    </div>
  );
}

export default Upload1;
