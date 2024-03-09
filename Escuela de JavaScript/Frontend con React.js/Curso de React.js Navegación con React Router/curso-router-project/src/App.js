import { HashRouter, Routes, Route } from 'react-router-dom';
import Menu from './Menu'
import ProfilePage from './ProfilePage'
import BlogPage from './BlogPage'
import HomePage from './HomePage';

const App = () => {
  return (
    <>
      <Menu />
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/profile' element={<ProfilePage />} />
          <Route path='*' element={<p>Not Found</p>} />
        </Routes>
      </HashRouter>
    </>
  )
}

export default App;
