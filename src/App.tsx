import React from 'react';
import './App.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Users } from './components/Users';
import { Posts } from './components/Posts/Posts';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/users" element={<Navigate to="/" replace />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </div>
  );
};
