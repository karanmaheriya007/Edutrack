import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="font-nunito bg-gradient-to-br from-blue-50 via-white to-purple-50 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-gray-900"
        >
          Welcome to <span className="text-indigo-600">Edutrack</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-xl text-gray-600"
        >
          Bridging the digital divide in education with smart infrastructure analysis & AI-powered verification.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-8 text-left"
        >
          <h2 className="text-2xl font-bold text-indigo-600 mb-4">🔍 What is the Gap Analysis Tool?</h2>
          <p className="text-gray-700 mb-6">
            The Gap Analysis Tool enables district education departments to collect, verify, and act upon school tech data from the ground up — combining a mobile app for field personnel and a powerful dashboard for decision-makers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
            <ul className="space-y-2">
              <li>📱 Mobile App for Field Data Collection</li>
              <li>📤 OTP-secured Login & User Management</li>
              <li>🧠 AI-based Image Verification</li>
              <li>🌍 Multilingual Support</li>
            </ul>
            <ul className="space-y-2">
              <li>📊 Web Dashboard with Insights & KPIs</li>
              <li>🏫 Drilldown from Districts to Assets</li>
              <li>💬 Commenting, Approval & Rejection Flows</li>
              <li>🖼️ Optimized Media Upload & Geo-Tagging</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
