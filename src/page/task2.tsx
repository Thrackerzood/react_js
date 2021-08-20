import { SetStateAction, useEffect, useState } from "react"
import { Dispatch } from "react"
import { Link, Route, Switch } from "react-router-dom"
import City from "../components/city"
import { ajax } from "../middleware/ajax"
import { MainS } from "../style/style"

export interface IState{
   data: {message: [{name_country: string, name_city: string}]}
}
export interface IResponse{
   message: [{name_country: string, name_city: string}]
}
export interface IElement{
   name_country: string
   name_city: string
}

function Task2():JSX.Element {
   const [showing, showMoreInfo]
   :[number | null | undefined , Dispatch<SetStateAction<number | null | undefined>>] = useState()
   const [state, fetchLoad]
   :[IState,Dispatch<SetStateAction<IState>>] = useState({data: {message: [{name_country: "", name_city: ""}]}})
   const result = async () => {
     let response:IResponse = await ajax('https://sql-basedata.herokuapp.com/api/allCity')
     fetchLoad({data: response})
   }
   useEffect(()=>{ result() }, [])
   return (<MainS>

      {state.data.message.map((element:IElement, index:number):JSX.Element => {

         return(
               <section key={index}>
                  <Link onClick={() => showMoreInfo(index === showing ? null : index)} to={"/task2"} >
                     <p>{element.name_country}</p>
                  </Link>
                  {showing === index
                  ? <aside>
                     <Switch key={index}>
                        <Route path="/task2">
                           <City props={element.name_country}/>
                        </Route>
                     </Switch>
                   </aside>
                  :
                  null}
               </section>
               )
            
         })
      }
   </MainS>);
 }
 
 export default Task2;