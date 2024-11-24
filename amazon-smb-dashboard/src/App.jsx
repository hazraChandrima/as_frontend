// src/App.jsx
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import DocumentGenerator from "./pages/services/DocumentGenerator";
import CarrierComparison from "./pages/services/CarrierComparison";
import ShipmentTracker from "./pages/services/ShipmentTracker";
import Dashboard from "./pages/services/Dashboard";
import HomeComponent from "./pages/HomeComponent";
import Messaging from "./pages/Messaging";
import Notifications from "./pages/Notifications";

//hey its me
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route
            path="/services/document-generator"
            element={<DocumentGenerator />}
          />
          <Route
            path="/services/carrier-comparison"
            element={<CarrierComparison />}
          />
          <Route
            path="/services/shipment-tracker"
            element={<ShipmentTracker />}
          />
          <Route path="/services/dashboard" element={<Dashboard />} />
          <Route path="/services/messaging" element={<Messaging />} />
          <Route path="/services/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
