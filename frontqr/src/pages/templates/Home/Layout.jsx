import MenuDrawer from '../../../components/UI/menu/menuDrawer';
import StepperQr from '../../../components/UI/utils/stepper';
import Navbar from './Header';
import { Outlet } from 'react-router-dom';

function LayoutHome() {
    return (
        <div className="flex flex-col min-h-screen relative">
            <Navbar />
            <div className='mt-32'>
                <StepperQr />
            </div>
            <main className="flex-grow mt-16">
                <Outlet />
            </main>
        </div>
    );
}

export default LayoutHome;
