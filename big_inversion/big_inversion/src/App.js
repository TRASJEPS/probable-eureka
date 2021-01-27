import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  
  return (
    
    <div className="App">
      <h1>Big Inversion</h1>
      <div className="peopleCSS">
        <h3>List of People:</h3>
        <PersonCard firstName="Billy" lastName="Ray" age={44} hairColor="Black"/>
        <PersonCard firstName="Sarah" lastName="Savey" age={29} hairColor="Brown"/>
        <PersonCard firstName="Grace" lastName="Jepson" age={30} hairColor="Silver"/>
        <PersonCard firstName="Henry" lastName="Minks" age={61} hairColor="Grey"/>
      </div>
    </div>
    
    // render(){
    // const peopleCSS {
    //   border-color: "2px solid darkblue";
    //   border-radius: "20px";
    //   display: "inline-block";
    //   width: "50%";
    //   margin: "10px";
    //   text-align: "center";
    //   background: "white";
    //   }
    // }

  );
  
}

export default App;
