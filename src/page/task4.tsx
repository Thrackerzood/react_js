import { ChangeEvent } from "react";
import { FormEvent } from "react";
import { useEffect, useState } from "react";
import { IResponse } from "../components/cityPage";
import CitySearch from "../components/citySearch";
import { ajax } from "../middleware/ajax";
import { MainST } from "../style/style";

function Task4():JSX.Element {

   const [state, fetchLoad]
   :[IResponse,React.Dispatch<React.SetStateAction<IResponse>>]
   = useState({data: {message: [{name_city: ""}]}})
   const [input, setInput]
   :[{search: string;},React.Dispatch<React.SetStateAction<{search: string;}>>]
   = useState({search: ''})

   const result = async () => {
      let response:any = await ajax(`https://sql-basedata.herokuapp.com/api/allCountry/${input.search}`)
      fetchLoad({data: response})
    }

   function changeInput(event: ChangeEvent<HTMLInputElement>){
      return setInput({...input, [event.target.name]: event.target.value})
   }





   useEffect(()=>{}, [state, input])
   return (<MainST>

         <form onSubmit={(event:FormEvent<HTMLFormElement>)=> {
            event.preventDefault()
         }}>

            <input type="search" onChange={(event:ChangeEvent<HTMLInputElement>) => changeInput(event)} name="search"/>
            <button type="submit" onClick={() => result()}>Поиск</button>
         </form>
         {state ? <CitySearch props={state}/> : <></>}

   </MainST>);
 }

 export default Task4; 