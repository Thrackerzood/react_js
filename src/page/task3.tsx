import { SetStateAction, useEffect, useState } from "react"
import { Dispatch } from "react"
import { Link, Route, Switch } from "react-router-dom"
import CityPage from "../components/cityPage"
import { ajax } from "../middleware/ajax"
import { MainS } from "../style/style"
import { IElement, IResponse, IState } from "./task2"



function Task3():JSX.Element {
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
                  <Link onClick={() => showMoreInfo(index === showing ? null : index)} to={"/task3"} >
                     <p>{element.name_country}</p>
                  </Link>
                  {showing === index
                  ? <aside>
                     <Switch key={index}>
                        <Route path="/task3">
                           <CityPage props={element.name_country}/>
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

 export default Task3; 