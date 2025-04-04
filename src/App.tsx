import './App.css'
import { CommissionSimulator } from './components/CommissionSimulator'

function App() {

  return (
    <>
      <div className='w-full h-fit md:h-screen bg-gradient-to-r from-blue-900 via-indigo-800 to-blue-600'>
        <CommissionSimulator />
      </div>
    </>
  )
}

export default App
