import { useState } from "react";
import { useEffect } from "react";
import { ajax } from "../middleware/ajax";
import { CityS } from "../style/style";




function City(props:{props: string}):JSX.Element {
   const [state, fetchLoad]= useState({data: {message: [{name_city: ""}]}})
   const result = async () => {
     let response:any = await ajax(`https://sql-basedata.herokuapp.com/api/allCountry/${props.props}`)
     fetchLoad({data: response})
   }
   useEffect(()=>{ result() }, [])
   return (<ul>
        {state.data.message.map((element:any, index:number):JSX.Element => {
           return <CityS key={index}>
                     <p>{element.name_city}</p>
                  </CityS>

        })} 
   </ul>);
 }

 export default City; 