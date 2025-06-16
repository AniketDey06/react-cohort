import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {


  return (
    <div className='App'>
      <Navbar/>


      <div className="cards">
        <Card title="lorem1" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, est! 1"/>
        <Card title="lorem2" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, est! 2"/>
        <Card title="lorem3" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, est! 3"/>
        <Card title="lorem4" desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga, est! 4"/>

      </div>

      <Footer/>
    </div>
  )
}

export default App
