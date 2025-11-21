import React, { useState, useEffect, useRef, useCallback } from 'react';



interface CloudflareTurnstileProps {
  onTokenReceived: (token: string | null) => void;
}

const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({ onTokenReceived }) => {
  const [isHumanChecked, setIsHumanChecked] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const sitekey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;
  if (!sitekey) console.error("Turnstile sitekey is missing!");

  const handleTurnstileCallback = useCallback((token: string) => {
    console.log('Turnstile token received:', token);
    onTokenReceived(token);
  }, [onTokenReceived]);

  const handleTurnstileError = useCallback(() => {
    console.error('Turnstile error occurred');
    onTokenReceived(null);
  }, [onTokenReceived]);

  const handleTurnstileExpired = useCallback(() => {
    console.log('Turnstile token expired');
    onTokenReceived(null);
    if (turnstileWidgetId.current && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId.current);
    }
  }, [onTokenReceived]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checked = e.target.checked;
    setIsHumanChecked(checked);
    
    if (!checked && turnstileWidgetId.current && window.turnstile) {
      window.turnstile.remove(turnstileWidgetId.current);
      turnstileWidgetId.current = null;
      onTokenReceived(null);
    }
  };

  // Load Cloudflare Turnstile script
  useEffect(() => {
    const scriptId = 'cf-turnstile-script';
    
    if (document.getElementById(scriptId)) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";

    script.async = true;
    script.defer = true;
    
    script.onload = () => {
      console.log('Turnstile script loaded');
      setScriptLoaded(true);
    };
    
    script.onerror = () => {
      console.error('Failed to load Turnstile script');
      setScriptLoaded(false);
    };

    document.head.appendChild(script);
  }, []);

  // Initialize Turnstile when conditions are met
  useEffect(() => {
    if (isHumanChecked && scriptLoaded && turnstileRef.current && window.turnstile) {
      
      
      if (!sitekey) {
        console.error('Cloudflare Turnstile sitekey is not configured');
        return;
      }

      try {
        turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
          sitekey: sitekey,
          callback: handleTurnstileCallback,
          'error-callback': handleTurnstileError,
          'expired-callback': handleTurnstileExpired,
        });
        
        console.log('Turnstile widget initialized with ID:', turnstileWidgetId.current);
      } catch (error) {
        console.error('Error initializing Turnstile:', error);
      }
    }

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
        turnstileWidgetId.current = null;
      }
    };
  }, [isHumanChecked, scriptLoaded, handleTurnstileCallback, handleTurnstileError, handleTurnstileExpired]);

  return (
    <div className="cloudflare-turnstile-container">
      <div className="flex items-center space-x-2 mb-4">
        <input
          type="checkbox"
          id="robot-check-cloudflare-turnstile"
          checked={isHumanChecked}
          onChange={handleCheckboxChange}
          className="form-checkbox h-4 w-4 text-yellow-600 transition duration-150 ease-in-out"
        />
        <label htmlFor="robot-check-cloudflare-turnstile" className="text-sm font-medium text-gray-700">
          I am human (robot check)
        </label>
      </div>

      {isHumanChecked && (
        <div className="my-4">
          {!scriptLoaded && (
            <div className="text-sm text-gray-500 mb-2">
              Loading verification...
            </div>
          )}
          <div 
            ref={turnstileRef} 
            id="cf-turnstile-container-cloudflare-turnstile"
            className="flex justify-center"
          ></div>
        </div>
      )}
    </div>
  );
};

export default CloudflareTurnstile;








// import React, { useState, useEffect, useRef, useCallback } from 'react';

// declare global {
//   interface Window {
//     turnstile: {
//       render: (
//         container: string | HTMLElement,
//         options: {
//           sitekey: string;
//           callback?: (token: string) => void;
//           "error-callback"?: () => void;
//           "expired-callback"?: () => void;
//         }
//       ) => string;
//       reset: (widgetId: string) => void;
//       remove: (widgetId: string) => void;
//     };
//   }
// }

// interface CloudflareTurnstileProps {
//   onTokenReceived: (token: string | null) => void;
// }

// const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({ onTokenReceived }) => {
//   const [isHumanChecked, setIsHumanChecked] = useState(false);
//   const turnstileRef = useRef<HTMLDivElement>(null);
//   const turnstileWidgetId = useRef<string | null>(null);

//   const handleTurnstileCallback = useCallback((token: string) => {
//     onTokenReceived(token);
//   }, [onTokenReceived]);

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setIsHumanChecked(e.target.checked);
//     if (!e.target.checked && turnstileWidgetId.current && window.turnstile) {
//       window.turnstile.remove(turnstileWidgetId.current);
//       turnstileWidgetId.current = null;
//       onTokenReceived(null);
//     }
//   };

//   useEffect(() => {
//     if (isHumanChecked && turnstileRef.current && window.turnstile) {
//       turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
//         sitekey: import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY,
//         callback: handleTurnstileCallback,
//         "error-callback": () => {
//           onTokenReceived(null);
//         },
//         "expired-callback": () => {
//           onTokenReceived(null);
//           if (turnstileWidgetId.current) {
//             window.turnstile.reset(turnstileWidgetId.current);
//           }
//         },
//       });
//     }

//     return () => {
//       if (turnstileWidgetId.current && window.turnstile) {
//         window.turnstile.remove(turnstileWidgetId.current);
//       }
//     };
//   }, [isHumanChecked, handleTurnstileCallback, onTokenReceived]);

//   return (
//     <>
//       {/* Checkbox to trigger Turnstile */}
//       <div className="flex items-center space-x-2">
//         <input
//           type="checkbox"
//           id="robot-check-cloudflare-turnstile"
//           checked={isHumanChecked}
//           onChange={handleCheckboxChange}
//           className="form-checkbox h-4 w-4 text-yellow-600 transition duration-150 ease-in-out"
//         />
//         <label htmlFor="robot-check-cloudflare-turnstile" className="text-sm font-medium text-gray-700">
//           I am human (robot check)
//         </label>
//       </div>

//       {/* Cloudflare Turnstile widget will be rendered here */}
//       {isHumanChecked && (
//         <div className="my-4">
//           <div ref={turnstileRef} id="cf-turnstile-container-cloudflare-turnstile"></div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CloudflareTurnstile;