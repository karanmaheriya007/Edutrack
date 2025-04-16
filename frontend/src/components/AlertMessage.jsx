import React, { useEffect } from 'react';
import { Alert } from '@mui/material';

const AlertMessage = ({ severity, message, duration = 3000 }) => {
  const [isVisible, setIsVisible] = React.useState(true);

  useEffect(() => {
    if (message) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!message || !isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md transition-all duration-300 ease-in-out opacity-100 translate-y-0">
      <Alert variant="filled" severity={severity} sx={{ 
        boxShadow: 3,
        transition: 'all 0.3s ease-in-out',
        animation: 'slideDown 0.3s ease-in-out'
      }}>
        {message}
      </Alert>
      <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AlertMessage;
