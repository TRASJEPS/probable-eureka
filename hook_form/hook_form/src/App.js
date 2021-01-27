import './App.css';
import PersonCard from './components/PersonCard';
import HobbyForm from './components/HobbyForm';

function App() {
  
  return (
    
    <div className="App">
      <h1>Hook Form</h1>
      <div className="peopleCSS">
      <h3>List of Members:</h3>
      <PersonCard firstName="Billy" lastName="Ray" age={44} hairColor="Black"/>
      <PersonCard firstName="Sarah" lastName="Savey" age={29} hairColor="Brown"/>
      <PersonCard firstName="Grace" lastName="Jepson" age={30} hairColor="Silver"/>
      <PersonCard firstName="Henry" lastName="Minks" age={61} hairColor="Grey"/>
      <PersonCard firstName="Jane" lastName="Shutter" age={34} hairColor="Blonde"/>
      <PersonCard firstName="Karl" lastName="Puggen" age={19} hairColor="Brown"/>
      <PersonCard firstName="Qwill" lastName="Nemer" age={53} hairColor="Black"/>
      <PersonCard firstName="Zane" lastName="Rex" age={23} hairColor="Brown"/>
      </div>

      <div> 
      < HobbyForm />
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
