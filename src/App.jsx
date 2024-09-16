import { RouterProvider } from 'react-router-dom'
import '../src/App.css'
import router from './router/Router'
export default function App() {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}
