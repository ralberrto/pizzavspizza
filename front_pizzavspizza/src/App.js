import logo from './logo.png';
import './App.css';
import PizzaList from './pizzerias/pizzeriaslist';
import PizzaForm from './pizzerias/pizzeriaform';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Web App for Pizza Lovers
        </p>
        <h1>
          Pizza vs Pizza
        </h1>
        <PizzaForm />
        <PizzaList />
      </header>
    </div>
  );
}

export default App;
