import {startWidget} from './modules/weatherService.js'

const initWidget = (app) => {

const widget = startWidget();
app.append(widget)

}

initWidget(document.querySelector('#app'))