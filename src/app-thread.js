
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

function appThread(self) {
  self.onmessage = ({data}) => {
    let state = updateState(data)
    self.postMessage(state)
  }
}

let inWorkerContext = !self.location
if (inWorkerContext) {
  appThread(self)
}

export default appThread;
