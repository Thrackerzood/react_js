export const ajax = (url:string) => {
   return fetch(url,{
      method: 'POST'
   })
   .then(response => response.json())
   .then(result => result)
}