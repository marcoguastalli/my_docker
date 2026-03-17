require('./mystyles.scss');

import { httpBinFetch } from './httpbin/fetch';
import navigation from './navigation.js';

const httpBinButton = document.getElementById('httpBinButton');
if (httpBinButton) {
    httpBinButton.addEventListener('click', httpBinFetch);
}

const logo = document.getElementById('logo');
if (logo) {
    logo.addEventListener('click', function (event) {
        navigation();
    });
}

document.addEventListener("DOMContentLoaded", function () {
    navigation();
});

document.addEventListener("click", function () {
    navigation();
});
