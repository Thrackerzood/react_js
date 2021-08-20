import { Dispatch, useState } from "react";
import { SetStateAction } from "react";
import { useEffect } from "react";
import { ajax } from "../middleware/ajax";
import { MainS } from "../style/style";

interface IState{
   data: {message: [{name_country: string}]}
}
interface IResponse{
   message: [{name_country: string}]
}

function Task1():JSX.Element {
   const [state, fetchLoad]:[IState,Dispatch<SetStateAction<IState>>] = useState({data: {message: [{name_country: ""}]}})
   const result = async () => {
     let response:IResponse = await ajax('https://sql-basedata.herokuapp.com/api/allCity')
     fetchLoad({data: response})
   }
   useEffect(()=>{ result() }, [])

   return (<MainS>

      {state.data.message.map((element, index:number ):JSX.Element => {

         return(
               <p key={index}>{element.name_country}</p>
               )

         })
      }
   </MainS>);
 }
 
 export default Task1;