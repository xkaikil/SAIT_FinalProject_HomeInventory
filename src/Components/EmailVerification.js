import { useParams } from "react-router-dom";
import { useTranslation} from 'react-i18next';


const EmailVerification = () => {
  const {t} = useTranslation();
 

  
    

    

 
    return(
<div>
{t('profile.accountCreated')}
 
</div>
  );
}

export default EmailVerification;