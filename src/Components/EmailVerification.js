import { useParams } from "react-router-dom";
import { useTranslation} from 'react-i18next';
import { useEffect } from "react";
import axios from "axios";
import ManageUsers from "./ManageUsersAdmin/ManageUsersForm";
import { useState } from "react";
import "./EmailVerification.css";


const EmailVerification = () => {
  const {t} = useTranslation();
  let x = useParams();

  useEffect(() => {
    axios
      .put("http://localhost:4000/admin/Verify-Link/" + x.id)
      .then((res) => {
        if (res.status === 200) {
       
  
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong"));
  }, []);
    

 
    return(
<div className="verifiedConfirm">
    {t('other.emailVerificationConfirmation')}
</div>
  );
}

export default EmailVerification;