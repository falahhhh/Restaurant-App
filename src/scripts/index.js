import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/header.css';
import '../styles/footer.css';
import '../styles/banner.css';
import '../styles/restauran.css';
import '../styles/detail.css';
import '../styles/favorite.css';
import swRegister from './utils/sw-register';
import App from './views/app';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

window.addEventListener('beforeinstallprompt', (e) => {
  const deferredPrompt = e;

  const addtoHomeScreenButton = document.getElementById('addtoHomeScreenButton');
  if (addtoHomeScreenButton) {
    addtoHomeScreenButton.style.display = 'block';
    addtoHomeScreenButton.addEventListener('click', () => {
      deferredPrompt.prompt();

      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('Pengguna menerima instalasi aplikasi');
        } else {
          console.log('Pengguna menolak instalasi aplikasi');
        }
      });
    });
  }
});

console.log(`Jumlah gambar yang akan dimuat: ${NUMBER_OF_IMAGES}`);

for (let i = START; i < START + NUMBER_OF_IMAGES; i++) {
  console.log(`Gambar ke-${i}`);
}
