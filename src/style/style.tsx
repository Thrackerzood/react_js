import styled, { createGlobalStyle, StyledComponent } from 'styled-components'

export const GlobalS = createGlobalStyle
`
*{
   margin: 0;
   padding: 0;
}
body{
   background: #202020;
}
`



export const NavS:StyledComponent<"header", any, {}, never> = styled.header
`
min-height: 4rem;
display: flex;
align-items: center;
background: #24252A;
justify-content: center;
.active{
   color: #008DAA;
}
nav{
   width: 100%;
}
ul{
   width: 100%;
   display: flex;
   justify-content: space-around;
}
li{
   padding: 5px;
   list-style-type: none;
}
a{
   color: #8B8C91;
   text-align: center;
   text-decoration: none;
   font-size: calc(18px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
@media screen and (max-width: 700px){
   ul{
      display: flex;
      align-items: center;
      flex-direction: column;
   }
}
`


export const MainS = styled.main
`
max-width: 500px;
display: flex;
margin: 0 auto;
margin-top: 2rem;
min-height: 100vh;
align-items: center;
background: #24252A;
flex-direction: column;
p{
   margin: 20px;
   color: white;
   text-align: center;
   font-size: calc(20px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
a{
   text-decoration: none;
}
button{
   color: white;
   outline: none;
   padding: 5px 20px;
   background: #202020;
   border: 1px solid #24252A;
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
   :hover{
      cursor: pointer;
      background: gray;
   }
}
ul{
   width: 100%;
   >div{
      display: flex;
      justify-content: center;
   }
}
aside{
   min-height: 10vh;
   min-width: 300px;
}
@media screen and (max-width: 700px){
   .page{
      display: flex;
      flex-direction: column;
   }
}
`


export const CityS = styled.li
`
list-style-type: none;
p{
   color: gray;
   text-align: center;
   font-size: calc(16px + 2 * ((100vw - 320px) / (1280 - 320)));
}
.searchP{
   :hover{
      color: white;
      cursor: pointer;
   }
}
`


export const MainST = styled.main
`
max-width: 500px;
display: flex;
margin: 0 auto;
margin-top: 2rem;
min-height: 100vh;
align-items: center;
background: #24252A;
flex-direction: column;
p{
   margin: 20px;
   color: white;
   text-align: center;
   font-size: calc(20px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
a{
   text-decoration: none;
}
form{
   width: 100%;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
}
input{
   border: none;
   padding: 5px;
   outline: none;
   border-radius: 5px 0 0 5px;
}
button{
   border: none;
   outline: none;
   color: #8B8C91;
   padding: 5px 20px;
   background: #202020;
   border-radius: 0 5px 5px 0;
   :hover{
      color: white;
      background: gray;
   }
}
aside{
   min-height: 10vh;
   min-width: 300px;
}
@media screen and (max-width: 700px){
   .page{
      display: flex;
      flex-direction: column;
   }
}
`

export const MainST5 = styled.main
`
max-width: 500px;
display: flex;
margin: 0 auto;
margin-top: 2rem;
min-height: 100vh;
align-items: center;
background: #24252A;
flex-direction: column;
p{
   margin: 20px;
   color: white;
   text-align: center;
   font-size: calc(20px + 2 * ((100vw - 320px) / (1280 - 320)));
   font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
}
a{
   text-decoration: none;
}
form{
   width: 100%;
   height: 4rem;
   display: flex;
   align-items: center;
   justify-content: center;
}
input{
   border: none;
   padding: 5px;
   outline: none;
   border-radius: 5px;
}
aside{
   min-height: 10vh;
   min-width: 300px;
}
button{
   border: none;
   outline: none;
   color: #8B8C91;
   padding: 5px 20px;
   background: #202020;
   border-radius: 0 5px 5px 0;
   :hover{
      color: white;
      background: gray;
   }
}
@media screen and (max-width: 700px){
   .page{
      display: flex;
      flex-direction: column;
   }
}
`