
```bash
npm install
npm run build
npm run server
```

Comment out the feature detection in `dist/worker.js`

```js
if (typeof window.Worker !== 'undefined') return;
```

I'm expecting data to contain the state returned `{ count: x }`
The worker polyfill seems be returning the action that was posted to the worker instead  `{ type: "increment" }`
