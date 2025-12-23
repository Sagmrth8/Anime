function selectPlatform(platform) {
    document.querySelectorAll('.platform-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
}

function decodeBase64(encodedString) {
    try {
        return atob(encodedString);
    } catch (error) {
        console.error('Error decoding Base64:', error);
        return null;
    }
}

function savePreference(key, value) {
    localStorage.setItem(key, value);
}

function getPreference(key) {
    return localStorage.getItem(key);
}

function initializePage() {
    if (getPreference('welcomeHidden') === 'true') {
        const welcomeSection = document.getElementById('welcomeSection');
        if (welcomeSection) {
            welcomeSection.classList.add('remove');
        }
    }
}

document.addEventListener('DOMContentLoaded', initializePage);
