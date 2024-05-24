import './App.css'
import Bill from './components/Bill/Bill';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SumBills from './components/SumBills/SumBills';

function App() {

  const [isShown, setIsShown] = useState(false);


  return (
    <>
      <Header />
      <div className="wrapper-app-align">
        <SumBills />
        <Bill /> {/* Renderiza as Bills */}
        <button onClick={() => setIsShown(!isShown)} className='icon-fa-plus'>
          <FontAwesomeIcon icon={faPlus} />
        </button>
        {
          isShown && (
            <Form /> /* Realiza a criação de Bills */
          )
        }
      </div>

    </>
  )
}

export default App
