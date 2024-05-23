import './App.css'
import Bill from './components/Bill';
import CreateBill from './components/CreateBill/CreateBill';
function App() {



  return (
    <>
      <h1>Contas</h1>
      <Bill /> {/* Renderiza as Bills */}

      <CreateBill /> {/* Realiza a criação de Bills */}

    </>
  )
}

export default App
