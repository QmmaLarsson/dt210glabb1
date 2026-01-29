import './App.css'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MountainCard from './components/MountainCard'

function App() {

  return (
    <>
    <div className='page'>
      <Header title='MINA BERG' />
      <Banner />
      <main>
      <h2>Berg</h2>
      <MountainCard />
      </main>
      <Footer />
      </div>
    </>
  )
}

export default App
