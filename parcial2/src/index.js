import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IntlProvider} from 'react-intl';
import localeEsMessages1 from "./locales/es";
import localeEsMessages2 from "./locales/en";
let lang=navigator.language
let idioma
if(lang==='es-ES'){
    idioma="es-ES"
    ReactDOM.render(
        <IntlProvider locale={idioma} messages= {localeEsMessages1}>
                <App/>
        </IntlProvider>, document.getElementById("root")
    );
}else{
    idioma="en-EN"
    ReactDOM.render(
        <IntlProvider locale={idioma} messages= {localeEsMessages2}>
                <App/>
        </IntlProvider>, document.getElementById("root")
    );
}
