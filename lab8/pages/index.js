import NameSearch from '../components/NameSearch';
import IdSearch from '../components/IdSearch';


const Home = () => {

   
      return (
         <div>
            <h1>Find a Pokemon!</h1>
            <NameSearch />
            <IdSearch />
            <h2>Your Pokemon:</h2>
            <div id="pokemonResult"></div>
        </div>
      );
    }
  
  
  
  export default Home;