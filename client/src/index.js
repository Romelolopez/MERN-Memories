import react from "react"
import reactDom from "react-dom"
import App from "./App"
import "./index.css"
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from './reducers'

//Redux set up
const store = createStore(reducers, compose(applyMiddleware(thunk)))

reactDom.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("root"))