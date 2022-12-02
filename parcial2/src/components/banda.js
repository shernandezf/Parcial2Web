import React from "react";
import { Link } from "react-router-dom";

function Banda(props){
    return (
        <tr>
          <td>{props.contador}</td>
          <td>
             <Link to={"/bandas/" +props.banda.id}>
                    {props.banda.name}
            </Link>
            
          </td>
          <td>{props.banda.country}</td>
          <td>{props.banda.genre}</td>
          <td>{props.banda.foundation_year}</td>
        </tr>
      );
}
export default Banda;