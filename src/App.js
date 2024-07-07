import logo from './logo.svg';
import './App.css';
import ContactForm from './components/pages/ContactForm';

function App() {
  return (
    <div className="App" style={{display:"flex", justifyContent:"center", alignItems:'center', flexDirection:"column"}} >
      <header >
        <h3 style={{}} >Contact us
        <h1 style={{fontSize:40, fontWeight:700}} >Make an Appointment</h1>
        </h3>
      </header>
      <div style={{display:"flex", alignItems:"center", justifyContent:"center", width:"100%" }} className='mediacss' >
        <ContactForm/>
      </div>
    </div>
  );
}

export default App;
