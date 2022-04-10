// Import all functions
import { handleSubmitTravel } from './js/formHandlerTravel'
import { getAPIKEYweather } from './js/getAPIKEYweather'
import { getAPIKEYgeo } from './js/getAPIKEYgeo'
import { getAPIKEYpixa } from './js/getAPIKEYpixa'
import { getAPItest } from './js/getAPItest'
import { getWeather } from './js/getWeather'
import { getCoordinates } from './js/getCoordinates'
import { checkForName } from './js/nameChecker'
import { getForecast } from './js/getForecast'
import { getForecastMin } from './js/getForecast'
import { getForecastMax } from './js/getForecast'
import { getImage } from './js/getImage'
import { updateUI } from './js/updateUI'

// Import all styles
import './styles/resets.scss'
import './styles/base.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

export {
    handleSubmitTravel,
    getAPIKEYweather,
    getAPIKEYgeo,
    getAPIKEYpixa,
    getWeather,
    getCoordinates,
    checkForName,
    updateUI,
    getAPItest,
    getForecast,
    getForecastMin,
    getForecastMax,
    getImage
}

