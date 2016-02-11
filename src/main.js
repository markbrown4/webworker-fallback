
let $ = (selector)=> document.querySelector(selector)
let $count = $('.count')

let worker = new Worker('dist/thread.js')
worker.onmessage = ({data})=> {
  console.log(data)
  $count.innerHTML = data.counter
}
$('.increment').addEventListener('click', ()=> {
  worker.postMessage({ type: "increment" })
}, false)
$('.decrement').addEventListener('click', ()=> {
  worker.postMessage({ type: "decrement" })
}, false)
