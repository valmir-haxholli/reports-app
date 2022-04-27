import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";

import './styles/global.scss';
import Reports from "./components/Reports/Reports";

function App() {
  return (
    <>
      <div className='main__content'>
          <Sidebar />
          <Header />
          <Reports />
      </div>
    </>
  );
}

export default App;
