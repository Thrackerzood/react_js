import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { IResponse } from "../components/cityPage";
import CitySearchAjax from "../components/citySearchAjax";
import { ajax } from "../middleware/ajax";
import { MainST5 } from "../style/style";

function Task6():JSX.Element {

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
         let response:any = await ajax(`https://sql-basedata.herokuapp.com/api/allCountry/${input.search}`)
         fetchLoad({data: response})
      }
      result()
      }        
   }, [input])

   return (<MainST5>

         <form 
         onSubmit={(event:FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
         }}>
            <input type="search" onChange={(event:ChangeEvent<HTMLInputElement>) => changeInput(event)} name="search"/>
         </form>
         {state ? <CitySearchAjax props={state}/> : <></>}

   </MainST5>);
 }
 
 export default Task6;