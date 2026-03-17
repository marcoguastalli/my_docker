require('./mystyles.scss');

import navigation from './navigation.js';

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
