import React from "react";
import Row from 'react-bootstrap/Row';
import Card from "react-bootstrap/Card";
import Bandas from "./bandas";
import { useParams } from "react-router-dom";
const { useEffect, useState } = require("react");
function BandaDetail(){
    const [bandas, setBandas] = useState([]);
    let bandabuscada
    const params = useParams();
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
    const buscarBanda = () => {
        bandas.map(banda =>{
            console.log(params.bandaId)
            if(banda.id==params.bandaId){
                bandabuscada=banda
                
            } 
        })
    
      };
      const carta=()=>{
        if(bandabuscada!=null){
        return(
            <Row className="justify-content-md-center">
             <Card style={{ width: "18rem", height: "40rem",marginLeft : 10}} className="mb-3">
                    <Card.Img src={bandabuscada.image}/>
                    <Card.Body >
                    <Card.Title >
                    {bandabuscada.name}
                    </Card.Title>
                    <Card.Text>{bandabuscada.description}</Card.Text>
                    </Card.Body>
                </Card>
            </Row>)}
       }
    return(
        <div>
            <h1>Bandas Musicales</h1>
            {buscarBanda()}
            <Bandas></Bandas>
            {carta()}
            
        </div>
    );
}
export default BandaDetail;