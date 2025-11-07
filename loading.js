// Skapa och lägg till laddningsskärmen
let loaderWrapper = document.createElement('div');
loaderWrapper.className = 'custom-loader-wrapper';
loaderWrapper.style.position = 'fixed';
loaderWrapper.style.top = '0';
loaderWrapper.style.left = '0';
loaderWrapper.style.width = '100%';
loaderWrapper.style.height = '100%';
loaderWrapper.style.display = 'flex';
loaderWrapper.style.justifyContent = 'center';
loaderWrapper.style.alignItems = 'center';
loaderWrapper.style.backgroundColor = 'rgba(192, 185, 189, 0.8)';
loaderWrapper.style.zIndex = '9999';

let loader = document.createElement('div');
loader.className = 'custom-loader';
loader.style.display = 'flex';
loader.style.justifyContent = 'space-around';
loader.style.alignItems = 'center';
loader.style.width = '120px';
loader.style.height = '120px';

for (let i = 0; i < 3; i++) {
    let circle = document.createElement('div');
    circle.className = 'custom-circle';
    circle.style.width = '24px';
    circle.style.height = '24px';
    circle.style.backgroundColor = '#eaf0e6';
    circle.style.borderRadius = '50%';
    circle.style.animation = 'custom-bounce 1.5s infinite ease-in-out';
    circle.style.animationDelay = `${i * 0.3}s`;
    loader.appendChild(circle);
}

loaderWrapper.appendChild(loader);
document.body.appendChild(loaderWrapper);

// När sidan är färdigladdad, ta bort laddningsskärmen
window.onload = function() {
    loaderWrapper.style.display = 'none';
    document.getElementById('content').classList.remove('hidden');
};

// Lägg till animationen via JavaScript
let style = document.createElement('style');
style.type = 'text/css';
let keyFrames = `
    @keyframes custom-bounce {
        0%, 80%, 100% { transform: scale(0); }
        40% { transform: scale(1); }
    }
    .custom-circle {
        width: 24px;
        height: 24px;
        background-color: #3498db;
        border-radius: 50%;
        animation: custom-bounce 1.5s infinite ease-in-out;
    }
`;
style.innerHTML = keyFrames;
document.getElementsByTagName('head')[0].appendChild(style);
