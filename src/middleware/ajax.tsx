export const ajax = (url:string) => {
   return fetch(url,{
      method: 'POST',
      mode: 'no-cors',
   })
   .then(response => response.json())
   .then(result => result)
}
