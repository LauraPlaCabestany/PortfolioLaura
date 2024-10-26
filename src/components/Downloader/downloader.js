import React from 'react';
import './downloader.css';
import { FaSuitcase } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Downloader = () => {
  const { t } = useTranslation();
  const pdfUrl = `${process.env.PUBLIC_URL}/CV_Laura Pla.pdf`;

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'CV_Laura_Pla.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button className='btn' onClick={handleDownload}>
        <FaSuitcase  className='btnImg'/>{t('download_cv')}
    </button>
  );
};

export default Downloader;
