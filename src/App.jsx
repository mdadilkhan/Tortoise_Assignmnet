import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Navigation';
import Claims from './pages/Claims';
import Employees from './pages/Employees';
import Devices from './pages/Devices';
import RentalSchedules from './pages/RentalSchedules';
import Billing from './pages/Billing';
import Organization from './pages/Organization';
import Support from './pages/Support';

const App = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 p-6">
          <Routes>
            <Route path="/claims" element={<Claims />} />
            <Route path="/employees" element={<Employees />} />
            <Route path="/devices" element={<Devices />} />
            <Route path="/rental-schedules" element={<RentalSchedules />} />
            <Route path="/billing" element={<Billing />} />
            <Route path="/organization" element={<Organization />} />
            <Route path="/support" element={<Support />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
