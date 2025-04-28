// No-JS fallbacks and detection
(function() {
    // Add js class to html element to enable CSS targeting
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js');
    
    // Check for required browser features and show warnings if needed
    const requiredFeatures = {
        'fetch': typeof fetch !== 'undefined',
        'localStorage': storageAvailable('localStorage'),
        'flexbox': supportsFlex()
    };
    
    // Alert for missing critical features
    const missingFeatures = Object.keys(requiredFeatures).filter(feature => !requiredFeatures[feature]);
    
    if (missingFeatures.length > 0) {
        // Only show the warning if the browser can at least handle basic JS
        const warningEl = document.createElement('div');
        warningEl.className = 'browser-warning';
        warningEl.innerHTML = `
            <p>Votre navigateur ne prend pas en charge certaines fonctionnalités nécessaires au bon fonctionnement de ce site. 
            Veuillez mettre à jour votre navigateur ou essayez-en un autre comme Firefox, Chrome ou Edge.</p>
            <button id="dismiss-warning">J'ai compris</button>
        `;
        
        document.body.insertBefore(warningEl, document.body.firstChild);
        
        // Allow dismissing the warning
        document.getElementById('dismiss-warning').addEventListener('click', function() {
            warningEl.style.display = 'none';
        });
    }
})();

// Helper function to detect localStorage availability
function storageAvailable(type) {
    try {
        const storage = window[type];
        const x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    } catch (e) {
        return false;
    }
}

// Helper function to detect flexbox support
function supportsFlex() {
    const div = document.createElement('div');
    div.style.display = 'flex';
    return div.style.display === 'flex';
}
