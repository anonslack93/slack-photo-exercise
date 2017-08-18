import '../css/main.css';

import App from './views/App';

const init = () => {
  new App({container: document.querySelector('.app')});
};

if (document.readyState !== 'loading') {
  init();
} else {
  const handleReady = () => {
    document.removeEventListener('DOMContentLoaded', handleReady);
    init();
  };
  document.addEventListener('DOMContentLoaded', handleReady);
}
