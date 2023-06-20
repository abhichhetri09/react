
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
   
<Navbar title = "Textutils2" aboutText="About us"/>
<div className="container">
<TextForm heading= "Enter any text"/>
<About />
</div>

</>
  );
}

export default App;
