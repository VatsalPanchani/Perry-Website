import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const ThankYou: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const id = searchParams.get('id');
    if (!id) {
      navigate('/', { replace: true });
      return;
    }

    const timestamp = sessionStorage.getItem(`thankyou_${id}`);
    if (timestamp) {
      const timeElapsed = Date.now() - parseInt(timestamp, 10);
      if (timeElapsed < 10000) {
        setIsValid(true);
        // Redirect after the remaining time
        const timer = setTimeout(() => {
          sessionStorage.removeItem(`thankyou_${id}`);
          navigate('/', { replace: true });
        }, 10000 - timeElapsed);

        return () => clearTimeout(timer);
      } else {
        // Expired
        sessionStorage.removeItem(`thankyou_${id}`);
        navigate('/', { replace: true });
      }
    } else {
      // Invalid or opened in new tab
      navigate('/', { replace: true });
    }
  }, [navigate, searchParams]);

  if (!isValid) return null;

  return (
    <div className="bg-white dark:bg-black min-h-screen pt-32 pb-16 flex items-center justify-center transition-colors duration-300">
      <div className="max-w-md w-full mx-auto px-4 text-center">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col items-center">
          <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle size={32} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-serif font-black text-black dark:text-white mb-4">Thank You!</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-8">
            We have received your requirement. We'll get back to you as soon as possible.
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">
            Redirecting to home page in 10 seconds...
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
