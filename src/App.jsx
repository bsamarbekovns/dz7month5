import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Tabs from './components/Tabs';
import HomePage from './pages/HomePage';
import WorkPage from './pages/WorkPage';
import PersonalPage from './pages/PersonalPage';

const App = () => {
    return (
        <div>
            <Tabs />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/personal" element={<PersonalPage />} />
            </Routes>
        </div>
    );
};

export default App;
