import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  return (
    <body className="App-header">
    <div className="App">
      <h1>Putting It Together</h1>
      <h3>List of People:</h3>
      <PersonCard firstName={"Billy"} lastName={"Ray"} age={44} hairColor={"Black"}/>
      <PersonCard firstName={"Sarah"} lastName={"Savey"} age={29} hairColor={"Brown"}/>
      <PersonCard firstName={"Grace"} lastName={"Jepson"} age={39} hairColor={"Silver"}/>
      <PersonCard firstName={"Henry"} lastName={"Minks"} age={61} hairColor={"Grey"}/>
    </div>
    </body>
  );
  
}

export default App;
