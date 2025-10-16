import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Usage } from './pages/Usage';
import { Goals } from './pages/Goals';
import { Focus } from './pages/Focus';
import { Community } from './pages/Community';
import { Rewards } from './pages/Rewards';
import { Profile } from './pages/Profile';
import { Login } from './pages/Login';
import { Register } from './pages/Register';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="usage" element={<Usage />} />
          <Route path="goals" element={<Goals />} />
          <Route path="focus" element={<Focus />} />
          <Route path="community" element={<Community />} />
          <Route path="rewards" element={<Rewards />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
