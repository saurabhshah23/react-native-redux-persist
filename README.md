# Redux Persist Demo app

This is a demo project for implementation of:
1. default react native boilerplate app (using react-native init).
2. Add redux and redux-toolkit (toolkit is recommnded as per documentation and it really eases the development)
3. Implemented a simple counter & a copy with redux.
4. Add redux-persist to persist the latest store across user sessions.

### Why should I check this demo?
- Main purpose being I didn't find many articles or sources explaining above.
- Learn how to implement redux-persist over redux-toolkit.

## Followed below steps:
- npx react-native init ReduxPersist
- cd ReduxPersist
- Changes done for changes port in "/package.json > scripts"

### Dependencies:
1. paper (https://callstack.github.io/react-native-paper/)
   - npm install react-native-paper react-native-vector-icons
   This is totally an optional dependency. I am used to adding an UI library to any project for ease of development.
   Also, to note, react native paper is perfect for you if you are looking for a component library following Material design.

2. redux (https://react-redux.js.org/ and https://redux-toolkit.js.org/)
   - npm install redux @reduxjs/toolkit react-redux

3. redux-persist (https://github.com/rt2zz/redux-persist)
   - npm install redux-persist

4. async-storage (https://react-native-async-storage.github.io/async-storage/docs/install/ and https://github.com/react-native-async-storage/async-storage)
   - npm install @react-native-async-storage/async-storage

VOILA!
You can buy me a coffee!
https://www.buymeacoffee.com/saurabhshah23
