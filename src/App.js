import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import './styles/global.scss';
import Reports from "./components/Reports/Reports";

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }

    return (
      <>
        <div className='main__content'>
            <Sidebar isOpen={isOpen}  />
            <Header toggleMenu={toggleMenu} />
            <Reports />
        </div>
        </>
      );
}

export default App;
