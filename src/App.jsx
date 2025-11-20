import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { ThemeProvider } from './components/ThemeProvider'
import Home from './pages/Home'
import Upload from './pages/Upload'
import Predictions from './pages/Predictions'
import History from './pages/History'
import Subscription from './pages/Subscription'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import Auth from './pages/Auth'

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/predictions" element={<Predictions />} />
          <Route path="/history" element={<History />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
