import './App.css';
import PersonCard from './components/PersonCard';
import HobbyForm from './components/HobbyForm';
import UserSignup from './components/UserSignup';

function App() {
  
  return (
    
    <div className="App">
      <h1>Welcome to Hobby Form!</h1>
      
      <div> 
      <UserSignup />
      <HobbyForm />
      </div>

      <div>
        <h3>List of Members:</h3>
          <PersonCard firstName="Billy" lastName="Ray" age={44} hairColor="Black" favoriteHobby="Cheese Sculpting"/>
          <PersonCard firstName="Sarah" lastName="Savey" age={29} hairColor="Brown" favoriteHobby="Paintball"/>
          <PersonCard firstName="Grace" lastName="Jepson" age={30} hairColor="Silver" favoriteHobby="Drone Flying"/>
          <PersonCard firstName="Henry" lastName="Minks" age={61} hairColor="Grey" favoriteHobby="Figure Painting"/>
          <PersonCard firstName="Jane" lastName="Shutter" age={34} hairColor="Blonde" favoriteHobby="Painting"/>
          <PersonCard firstName="Karl" lastName="Puggen" age={19} hairColor="Brown" favoriteHobby="Boxing"/>
          <PersonCard firstName="Qwill" lastName="Nemer" age={53} hairColor="Black" favoriteHobby="Voice Acting"/>
          <PersonCard firstName="Zane" lastName="Rex" age={23} hairColor="Brown" favoriteHobby="Running"/>
        </div>
    </div>

  );
}

export default App;
