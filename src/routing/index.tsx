import { Routes, Route } from 'react-router-dom'
import { Checkout } from '../pages/Checkout'
import { Success } from '../pages/Success'
import { Home } from '../pages/Home'
import { CommonLayout } from './CommonLayout'
import ErrorPage from './ErrorPage'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<CommonLayout />}>
        <Route index element={<Home />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="success" element={<Success />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  )
}
