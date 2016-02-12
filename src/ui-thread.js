
let $ = (selector)=> document.querySelector(selector)

function uiThread(worker) {
  let $count = $('.count')

  worker.onmessage = ({data})=> {
    $count.innerHTML = data.counter
  }

  $('.increment').addEventListener('click', ()=> {
    worker.postMessage({ type: "increment" })
  }, false)

  $('.decrement').addEventListener('click', ()=> {
    worker.postMessage({ type: "decrement" })
  }, false)

}

export default uiThread;
