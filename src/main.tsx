import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

const sectionByPathname: Record<string, string> = {
  '/': 'home',
  '/index.html': 'home',
  '/about.html': 'about',
  '/services.html': 'services',
  '/team.html': 'team',
  '/contact.html': 'contact',
};

const targetId = window.location.hash.replace('#', '') || sectionByPathname[window.location.pathname];

if (targetId) {
  requestAnimationFrame(() => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'auto', block: 'start' });
    }
  });
}
