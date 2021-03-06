import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CityS } from "../style/style";
import { IResponse } from "./cityPage";

function CitySearch(props:{props:IResponse}):JSX.Element {

   const [state, fetchLoad]
   :[IResponse,React.Dispatch<React.SetStateAction<IResponse>>] 
   = useState({data: {message: [{name_city: ""}]}})
   const [currentPage, setCurrentPage]
   :[number,React.Dispatch<React.SetStateAction<number>>] 
   = useState(1)
   const [postsPerPage]
   :[number, Dispatch<SetStateAction<number>>] 
   = useState(5)



   // логика смены страницы
   const totalPage:number[] = []
   const indexOfLastPost:number = currentPage * postsPerPage
   const indexOfFirstPost:number = indexOfLastPost - postsPerPage
   const setCurrentPost:{name_city: string;}[] = state.data.message.slice(indexOfFirstPost, indexOfLastPost)
   for(let i = 1; i <= Math.ceil(state.data.message.length / postsPerPage); ++i){
      totalPage.push(i)
   }

   //смена страницы
   const previewPage = ():void =>{
      if(currentPage <= 1){
         setCurrentPage(previous => previous = 1)

      }else{
         setCurrentPage(previous => previous - 1)
      }
   }
   //следующая страница
   const nextPage = ():void => {
      if(currentPage >= totalPage.length){
         setCurrentPage(previous => previous = totalPage.length)
      }else{
         setCurrentPage(previous => previous + 1)
      }
   }

   //смена страницы по выбору кнопки
   const paginate = (numberPage:number):void => {
      setCurrentPage(numberPage)
   }







   useEffect(() => {
      fetchLoad({data: props.props.data})
   }, [props.props.data])



return (<ul>
         {setCurrentPost.map((element:any, index:number):JSX.Element => {
            return   <CityS key={index}>
                        <p>{element.name_city}</p>
                     </CityS>
                  })}
         <div className="page">
         {totalPage.length === 1 ? <></> : <button onClick={() => previewPage()}> назад </button>}
         {totalPage.length === 1 ? <></> : totalPage.map((number:number):JSX.Element => {
            return <button onClick={() => paginate(number)} key={number}>{number}</button>
         })
         }
         {totalPage.length === 1 ? <></> : <button onClick={() => nextPage()}> вперёд </button>}
         </div>
         </ul>
      )
 }

 export default CitySearch;