
let state = {
  counter: 0
};

let updateState = ({ type, payload={} })=> {
  if (type == 'increment') {
    state.counter++
  }
  else if (type == 'decrement') {
    state.counter--
  }

  return state;
}

self.onmessage = ({data}) => {
  let state = updateState(data)
  self.postMessage(state)
}
