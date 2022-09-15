const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
// https://pwa-workshop.js.org/5-pwa-install/#add-an-installation-button
window.addEventListener('beforeinstallprompt', (event) => {
    console.log("beforeinstallprompt fired");
  // Prevent Chrome 76 and earlier from automatically showing a prompt
  e.preventDefault();
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
  // Show the install button
  installButton.hidden = false;
  installButton.addEventListener("click", installApp);
});

// TODO: Implement a click event handler on the `butInstall` element
function installApp() {
    // Show the prompt
    deferredPrompt.prompt();
    installButton.disabled = true;

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === "accepted") {
        console.log("PWA setup accepted");
        installButton.hidden = true;
        } else {
        console.log("PWA setup rejected");
        }
        installButton.disabled = false;
        deferredPrompt = null;
    });
}

  

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('appinstalled fired', event);
});
