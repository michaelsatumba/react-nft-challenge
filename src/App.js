import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';


function App() {
  return (
    <div className="app">
   <Header />
   <CollectionCard 
   id={0} 
   name={"Bandana Punk"} 
   traits={[{"value": 7}]} 
   image="https://ipfs.thirdweb.com/ipfs/QmQAcLywRXMBs1YMumL29z9LEyPK3rJGcKKUAZjpYyKi6d" 
   />
   </div>
  );
}

export default App;
