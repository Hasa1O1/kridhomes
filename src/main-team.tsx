import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import TeamPage from './pages/TeamPage';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TeamPage />
  </StrictMode>
);
