import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'

import Header from './components/Header/Header'

import DefaultLayout from './layout/DefaultLayout'

import * as ROUTES from './constants/routePath'

function App () {
  return (
    <BrowserRouter>
      <Header />
    <Routes>
      <Route
        path={ROUTES.HOME}
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />
    </Routes>
  </BrowserRouter>
  )
}

export default App
