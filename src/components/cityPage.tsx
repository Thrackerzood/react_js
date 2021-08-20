import { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { ajax } from "../middleware/ajax";
import { CityS } from "../style/style";

export interface IResponse {
   data: {message: [{name_city: ""}]}
}


function CityPage(props:{props: string}):JSX.Element {
   const [state, fetchLoad]
   :[IResponse,React.Dispatch<React.SetStateAction<IResponse>>] 
   = useState({data: {message: [{name_city: ""}]}})
   const [currentPage, setCurrentPage]
   :[number,React.Dispatch<React.SetStateAction<number>>] 
   = useState(1)
   const [postsPerPage]
   :[number, Dispatch<SetStateAction<number>>] 
   = useState(5)
   

   //вызов запроса сразу после захода
   useEffect(()=>{ 
      const result = async () => {
         let response:any = await ajax(`https://sql-basedata.herokuapp.com/api/allCountry/${props.props}`)
         fetchLoad({data: response})
       }
      result()
   }, [props.props])




   // логика смены страницы
   const totalPage:number[] = []
   const indexOfLastPost:number = currentPage * postsPerPage
   const indexOfFirstPost:number = indexOfLastPost - postsPerPage
   const setCurrentPost:{name_city: string;}[] = state.data.message.slice(indexOfFirstPost, indexOfLastPost)
   for(let i = 1; i <= Math.ceil(state.data.message.length / postsPerPage); ++i){
      totalPage.push(i)
   }




   // смена страницы
   const previewPage = ():void =>{
      if(currentPage <= 1){
         setCurrentPage(previous => previous = 1)
      
      }else{
         setCurrentPage(previous => previous - 1)
      }
   }
   // следующая страница
   const nextPage = ():void => {
      if(currentPage >= totalPage.length){
         //задаем currentPage предыдущие значение которое будет равняться общему количеству страниц
         setCurrentPage(previous => previous = totalPage.length)
      }else{
         setCurrentPage(previous => previous + 1)
      }
   }
   //смена страницы по выбору кнопки
   const paginate = (numberPage:number):void => {
      setCurrentPage(numberPage)
   }

   return (<ul>
         {setCurrentPost.map((element:any, index:number):JSX.Element => {
            return   <CityS key={index}>
                        <p>{element.name_city}</p>
                     </CityS>
                  })}

                  
         <div className="page">
         {totalPage.length === 1 ? <></> :<button onClick={() => previewPage()}> назад </button>}
         
         {totalPage.length === 1 ? <></> : totalPage.map((number:number):JSX.Element => {
            // при нажатии вызываем функцию пагинации и переходим на выбраную страницу
            return <button onClick={() => paginate(number)} key={number}>{number}</button>
         })}
         {totalPage.length === 1 ? <></> : <button onClick={() => nextPage()}> вперёд </button>}
         </div>
         </ul>
      )
   }
      

 
 export default CityPage;