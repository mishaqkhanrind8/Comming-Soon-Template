if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js', { scope: '/' })
    .then(reg => console.log('✅ Service Worker registered with scope:', reg.scope))
    .catch(err => console.error('❌ Service Worker registration failed:', err));
}

window.addEventListener("orientationchange", function() {
  if (window.orientation === 0 || window.orientation === 180) {
    console.log("Portrait mode");
  } else {
    console.log("Landscape mode");
  }
});

function fixHeight() {
  document.querySelector('.container').style.height = window.innerHeight + 'px';
}
window.addEventListener('resize', fixHeight);
window.addEventListener('load', fixHeight);