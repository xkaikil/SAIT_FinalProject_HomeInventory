import { useParams } from "react-router-dom";
import { useTranslation} from 'react-i18next';
import { useEffect } from "react";
import axios from "axios";


const EmailVerification = () => {
  const {t} = useTranslation();
  let x = useParams();
 

  
        useEffect(() => {
       
        axios
            .put(
                "http://localhost:4000/users/update-item/" 
               
            )
            .then((res) => {
                
            })
            .catch((err) => console.log(err));
    }, []);

    

 
    return(
<div>

  CURRENTLY WHEN YOU SEE THIS PAGE THE ACCOUNT IS ALREADY CREATED
  Check your {x.email} and click on link to verify
 
</div>
  );
}

export default EmailVerification;