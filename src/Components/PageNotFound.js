import React from 'react';
import { useTranslation} from 'react-i18next';

function PageNotFound() {
    const {t} = useTranslation();
  return (
    <div>
        <h1>404</h1>
        <h2>{t('other.pageNotFound')}</h2>
    </div>
  )
}

export default PageNotFound