import { Link } from "react-router-dom";
import Banda from "./banda";
import { FormattedMessage } from "react-intl";
const { useEffect, useState } = require("react");

function Bandas (){
    const [bandas, setBandas] = useState([]);
    let contador=0
    let bandaantigua
    let mayor=0
    useEffect(()=>{
        fetch("https://gist.githubusercontent.com/josejbocanegra/806a4dcd1af61b4cc498d24c52e84320/raw/8711b7af9091d2831ed043563cad2a61311b0a5f/music-bands.json",{
            method: "GET",
              Headers: {
                "Content-Type": "application/json"
              }
        })
        .then(data => data.json()).then(data => {
            setBandas(data);
            
           
       })
    
   }, []);
   const mayorBanda = () => {
    bandas.map(banda =>{
        if(2020-banda.foundation_year>mayor){
            mayor=2022-banda.foundation_year
            bandaantigua=banda.name
        } 
    })
  };
   return(
    <div>
    <div style={{ backgroundColor: '#A6C8CD'}}><h1>Bandas Musicales</h1></div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col"><FormattedMessage id="name"/></th>
            <th scope="col"><FormattedMessage id="pais"/></th>
            <th scope="col"><FormattedMessage id="genero"/></th>
            <th scope="col"><FormattedMessage id="fundacion"/></th>
            
          </tr>
        </thead>
        <tbody>
          {mayorBanda()}
          {bandas.map(banda=> (
            <Banda key={banda.id} banda={banda} contador={contador=contador+1} />
          ))}
        </tbody>
        <p> <FormattedMessage id="mensaje1"/> {bandaantigua} <FormattedMessage id="mensaje2"/> {mayor} <FormattedMessage id="mensaje3"/></p>
      </table>
    </div>
    
   );
}
export default Bandas;