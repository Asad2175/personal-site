import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import MainLayout from './layouts/MainLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}></Route>
    )
);

function Routes() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default Routes
