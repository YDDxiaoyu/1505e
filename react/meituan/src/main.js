import React, { Component } from 'react'
import ReactDOM from "react-dom"
import {Provider } from "react-redux"


import router from "./router/index.js"
import store from "./store"


ReactDOM.render(
    <Provider store={store}>
        {router}
    </Provider> ,
    document.getElementById('app')
);


