import { MainS } from "../style/style";
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { IResponse } from "../components/cityPage";
import { ajax } from "../middleware/ajax";
import CitySearchMap from "../components/citySearchMap";




function Task7() {

   const [state, fetchLoad]
   :[IResponse,React.Dispatch<React.SetStateAction<IResponse>>]
   = useState({data: {message: [{name_city: ""}]}})
   const [input, setInput]
   :[{search: string;},React.Dispatch<React.SetStateAction<{search: string;}>>]
   = useState({search: ''})

   function changeInput(event: ChangeEvent<HTMLInputElement>){
      return setInput({...input, [event.target.name]: event.target.value})
   }

   useEffect(()=>{ 
      if(input.search !== ''){
      const result = async () => {
         let response:any = await ajax(`https://myapppliswork.herokuapp.com/api/allCountry/${input.search}`)
         fetchLoad({data: response})
      }
      result()
      }        
   }, [input])


return (<MainS>
         <form 
         onSubmit={(event:FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
         }}>
            <input type="search" onChange={(event:ChangeEvent<HTMLInputElement>) => {
               changeInput(event)
            }} name="search"/>
         </form>
         {state ? <CitySearchMap props={state}/> : <></>}
      </MainS>);
      
 }
 export default Task7;