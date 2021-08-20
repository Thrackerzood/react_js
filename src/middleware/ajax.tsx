export const ajax = (url:string) => {
   return fetch(url,{
      mode: 'no-cors',
      method: 'POST'
   })
   .then(response => response.json())
   .then(result => result)
}
