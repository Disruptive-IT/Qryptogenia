import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import logo from "../../public/Logo.png";
import { QrContentSwitch } from '../components/Layout/qrContent';
import NotFoundPage from './NotFoundPage';
import { useStepper } from '../context/StepperContext';
import ChangeFrame from '../components/Layout/qrContent/changeFrame';
import { contentTexts, dataTypeQr } from '../components/Layout/qrContent/contentData';
import { OptionBarTwo } from '../components/Layout/optionBar';

const AppContent = () => {
    const { contentName } = useParams();
    const { setActiveStep } = useStepper();
    const navigate = useNavigate();

    useEffect(() => {
        setActiveStep(0);
    }, []);

   
    const content = contentTexts[contentName.toLowerCase().replace(/\s+/g, '-')];
    const title = contentName.replace(/-/g, ' ');

    if (!content) {
        return <NotFoundPage />;
    }


    useEffect(() => {
        const scrollToSection = () => {
            const section = document.getElementById('qr-content');
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        };

        scrollToSection();
    }, [location]);

    return (
        <>
            <OptionBarTwo contentName={contentName} title={title} />
            <section id='qr-content'>
                <div className='text-center'>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className='grid grid-cols-4 gap-10 w-11/12 m-auto py-10'>
                    <div className='col-span-3 bg-red-50'>
                        <QrContentSwitch contentName={title} />
                    </div>
                    <div className='col-span-1 grid '>
                        <ChangeFrame logo={logo} title={title} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AppContent;
