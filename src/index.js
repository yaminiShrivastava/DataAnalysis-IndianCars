import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';
const root = ReactDOM.createRoot(document.getElementById('root'));
Kommunicate.init("2ee16255058ca7b09f85c8e48a26849aa" ,{"popupWidget":true},{"automaticChatOpenOnNavigation":true})
root.render(
    <App />
);

reportWebVitals();
