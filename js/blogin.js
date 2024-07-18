'use strict'

function onToggleMenu() {
    document.body.classList.toggle('menu-open')
}

function onReadDetails() {
    const elDetails = document.querySelector('.post-details')
    console.log(elDetails);
    elDetails.showModal()
}