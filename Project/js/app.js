if ('serviceWorker' in navigator) // supprot browser
{
    console.log('browser support')
    navigator
        .serviceWorker
        .register('/Project/service-worker.js').then(registeration => {
            console.log('Service worker registration success', registeration)

        }).catch(error => {
            console.log('Service worker registration failed', error)
        })
} else {
    console.log('Service workers are not support')
}
let installPrompEvent;

window.addEventListener('beforeinstallprompt', (event) => {

    event.preventDefault(); // chrome older than version 67
    console.log('befor install promp event');
    installPrompEvent = event;

});

document.querySelector('#notification').addEventListener('click', (event) => {
    event.preventDefault();
    console.log(installPrompEvent)
    if (installPrompEvent) { // if installPrompEvent not undefiend and exist
        installPrompEvent.prompt(); // for display installPrompEvent(banner)
        installPrompEvent.userChoice.then((choiceResult) => { // add notification or cancel 
            if (choiceResult.outcome === 'accepted') { // add notification
                console.log('user accepted')
            } else { // cancel notification
                console.log('user dismissed');
            }
            installPrompEvent = null; // after choise
        })
    }
});