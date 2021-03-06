import './App.css';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import axios from "axios";
import Punklist from './components/Punklist';
import Main from './components/Main';
import { ThirdwebSDK } from '@3rdweb/sdk';



function App() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  

// useEffect(() => {
//         const getMyNfts = async () => {
//             // Web3 browser user detected. You can now use the provider.
//             const sdk = new ThirdwebSDK('rinkeby');
//             const nft = sdk.getNFTModule(
//                 '0xc53C4266f4A9d1293e6C3a8b43788B6bB6a120E2'
//             );
//             console.log(nft);
//             const owned = await nft.getAllWithOwner();
//             console.log(owned);
//             setPunkListData(owned);
//         };
//         return getMyNfts();
//         // fetchData();
//     }, []);

  

  // useEffect(() => {
  //   const getMyNfts = async () => {
  //     const openseaData = await axios.get(
  //       "https://testnets-api.opensea.io/assets?asset_contract_address=0xc53C4266f4A9d1293e6C3a8b43788B6bB6a120E2&order_direction=asc"
  //     )
  //     console.log(openseaData.data.assets)
  //     setPunkListData(openseaData.data.assets)
  //   }

  //   return getMyNfts()
  // }, [])

  useEffect( ()=>{

    const getMyNfts = async ()=>{

     const openseaData = await axios('https://nft-backend1.herokuapp.com/',{

     headers: {
      'Access-Control-Allow-Origin': '*'
     }
     })
     
     setPunkListData(openseaData.data.assets)
    }
    return getMyNfts()
  }, [])
  
  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
            <Main punkListData={punkListData} selectedPunk={selectedPunk}/>
            <Punklist punkListData={punkListData} setSelectedPunk={setSelectedPunk} />
          </>
        )
      }

    </div>
  );
}

export default App;
