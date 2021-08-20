import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { CityS } from "../style/style";
import { IResponse } from "./cityPage";
import {getGeocode, getLatLng } from "use-places-autocomplete";
 import { GoogleMap, useLoadScript } from "@react-google-maps/api";




function CitySearchMap(props:{props:IResponse}):JSX.Element {
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
   const nextPage
   :() => void = ():void => {
      if(currentPage >= totalPage.length){
         setCurrentPage(previous => previous = totalPage.length)
      }else{
         setCurrentPage(previous => previous + 1)
      }
   }
   //смена страницы по выбору кнопки
   const paginate
   :(numberPage: number) => void 
   = (numberPage:number):void => {
      setCurrentPage(numberPage)
   }
   useEffect(() => {
      const result 
      :() => Promise<void> 
      = async () => {
         let response:any = await props.props.data
         await fetchLoad({data: response})
      }
      result()
   }, [props.props.data, currentPage])

   const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: 'AIzaSyBdc0x4iD0GPspP6dSvw37ZadVsMKg8k8o',
      libraries: ['places'],

   })
   const mapRef:any = React.useRef();
   const onMapLoad:any = React.useCallback((map:any) => {
     mapRef.current = map;
   }, []);
   // передает обратно при смене города
   const panTo:({ lat, lng }: any) => void = React.useCallback(({ lat, lng }) => {
      mapRef.current.panTo({ lat, lng });
      mapRef.current.setZoom(14);
    }, []);
   //проверка на ошибки
   if(loadError) return <p>'Ошибка загрузки карты'</p>
   //проверка на загрузку карты
   if(!isLoaded) return <p>'Загрузка карты'</p>
   //устанавление стиля карты, так же можно менять цвета
   const mapContainerStyle = {
      width: '100%',
      minHeight: '50vh'
   }
   //стандартная позиция карты при входе
   const center ={
      lat: 56.8637312,
      lng: 53.088019
   }
return (<><ul>
         {setCurrentPost.map((element:any, index:number):JSX.Element => {
            return   <CityS key={index}>
                        <p className="searchP" onClick={async(event:any) => {
                           let address = await event.target.textContent
                           console.log(address)
                           const results = await getGeocode({address})
                           const {lat , lng} = await getLatLng(results[0])
                           panTo({lat , lng})
                           }}>{element.name_city}</p>
                     </CityS>
                  })}
            <GoogleMap
            //сама карта
            mapContainerStyle={mapContainerStyle}
            //стандартный скейл при входе
            zoom={8}
            center={center}
            //меняет позицию карты при смене lat / lng
            onLoad={onMapLoad}
            ></GoogleMap>

         <div className="page">

         {totalPage.length === 1 ? <></> : <button onClick={() => previewPage()}> назад </button>}
         {totalPage.length === 1 ? <></> : totalPage.map((number:number):JSX.Element => {
            return <button onClick={() => paginate(number)} key={number}>{number}</button>
         })
         }
         {totalPage.length === 1 ? <></> : <button onClick={() => nextPage()}> вперёд </button>}
         </div>
         </ul>
         </>
      )
 }

 export default CitySearchMap; 