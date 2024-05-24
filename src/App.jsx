import './App.css'
import Bill from './components/Bill';
import Form from './components/Form/Form';

function App() {



  return (
    <>
      <h1>Contas</h1>
      <Bill /> {/* Renderiza as Bills */}

      <Form /> {/* Realiza a criação de Bills */}

    </>
  )
}

export default App
