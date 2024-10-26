import React, { useState } from 'react';
import './stepper.css';
import FMC from '../../assets/FMC_Logo_horitzontal.png';
import UPF from '../../assets/UPF_logo.png';
import Dialog from '../Dialog/dialog';
import { useTranslation } from 'react-i18next';


const Stepper = () => {
    const { t } = useTranslation();
    const [isEHUDialogOpen, setIsEHUDialogOpen] = useState(false);
    const openEHUDialog = () => { setIsEHUDialogOpen(true); };
    const handleCloseEHUDialog = () => { setIsEHUDialogOpen(false); };

    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const openDialog = () => { setIsDialogOpen(true); };
    const handleCloseDialog = () => { setIsDialogOpen(false); };

    return (
        <div className='stepper'>
            <div className='step' onClick={openEHUDialog}>
                <span className='year'>2020</span>
                <img src={UPF} alt='Client' className='clientsImg'></img>
                <span className='year'>2024</span>
                <Dialog isOpen={isEHUDialogOpen} onClose={handleCloseEHUDialog}>
                    <h2 className='dialogTitle'>{t('title_ehu')}</h2>
                    <p className='dialogText'>{t('text_ehu')}</p>
                    <img src={UPF} alt='Client' className='dialogImg'></img>
                </Dialog>
            </div>
            <div className='line'>
                <span className='duration'>4 {t('years')}</span>
                <hr />
                <span className='duration'>3 {t('months')}</span>
            </div>
            <div className='step' onClick={openDialog}>
                <span className='year'>2023</span>
                <img src={FMC} alt='Client' className='clientsImg'></img>
                <span className='year'>2023</span>
                <Dialog isOpen={isDialogOpen} onClose={handleCloseDialog}>
                    <h2 className='dialogTitle'>{t('title_zucchetti')}</h2>
                    <p className='dialogText'>{t('text_zucchetti')}</p>
                    <img src={FMC} alt='Client' className='dialogImg'></img>
                </Dialog>
            </div>
        </div>
    );
};

export default Stepper;