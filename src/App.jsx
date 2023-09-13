import './App.css'
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'

import * as Pages from '@/pages';

function App() {

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route exact path="/" element={<Pages.HomeTestPage />} />
        <Route path="/typography" element={<Pages.TypographyPage />} />
        <Route path="/components" element={<Pages.ComponentsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
