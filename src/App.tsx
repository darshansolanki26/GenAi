import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import { PlaceholderPage } from './pages/PlaceholderPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Background Image Layer */}
        <div
          className="fixed inset-0 z-0 pointer-events-none opacity-100"
          style={{
            backgroundImage: `url('/Background.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
            backgroundRepeat: 'no-repeat'
          }}
        />

        {/* Content Layer */}
        <div className="relative z-10">
          <Layout>
            <Routes>
              <Route path="/" element={<Navigate to="/home-1" replace />} />
              <Route path="/home-1" element={<Home1 />} />
              <Route path="/home-2" element={<Home2 />} />

              {/* Other Pages */}
              <Route path="/about" element={<PlaceholderPage title="About Us" />} />
              <Route path="/pricing" element={<PlaceholderPage title="Pricing" />} />
              <Route path="/contact" element={<PlaceholderPage title="Contact Us" />} />
              <Route path="/login" element={<PlaceholderPage title="Login" />} />
              <Route path="/sign-up" element={<PlaceholderPage title="Sign Up" />} />
              <Route path="/forgot-password" element={<PlaceholderPage title="Forgot Password" />} />
              <Route path="/reset-password" element={<PlaceholderPage title="Reset Password" />} />
              <Route path="/blog" element={<PlaceholderPage title="Our Blog" />} />
              <Route path="/article" element={<PlaceholderPage title="Article" />} />
              <Route path="/use-cases" element={<PlaceholderPage title="Use Cases" />} />
              <Route path="/case-details" element={<PlaceholderPage title="Case Details" />} />
              <Route path="/404" element={<PlaceholderPage title="Error 404" />} />

              {/* Fallback to 404 */}
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Layout>
        </div>
      </div>
    </Router>
  );
}

export default App;
