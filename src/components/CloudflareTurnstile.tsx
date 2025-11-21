import React, { useState, useEffect, useRef, useCallback } from 'react';

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

interface CloudflareTurnstileProps {
  onTokenReceived: (token: string | null) => void;
}

const CloudflareTurnstile: React.FC<CloudflareTurnstileProps> = ({ onTokenReceived }) => {
  const [isHumanChecked, setIsHumanChecked] = useState(false);
  const turnstileRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetId = useRef<string | null>(null);

  const handleTurnstileCallback = useCallback((token: string) => {
    onTokenReceived(token);
  }, [onTokenReceived]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsHumanChecked(e.target.checked);
    if (!e.target.checked && turnstileWidgetId.current && window.turnstile) {
      window.turnstile.remove(turnstileWidgetId.current);
      turnstileWidgetId.current = null;
      onTokenReceived(null);
    }
  };

  useEffect(() => {
    if (isHumanChecked && turnstileRef.current && window.turnstile) {
      turnstileWidgetId.current = window.turnstile.render(turnstileRef.current, {
        sitekey: import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY,
        callback: handleTurnstileCallback,
        "error-callback": () => {
          onTokenReceived(null);
        },
        "expired-callback": () => {
          onTokenReceived(null);
          if (turnstileWidgetId.current) {
            window.turnstile.reset(turnstileWidgetId.current);
          }
        },
      });
    }

    return () => {
      if (turnstileWidgetId.current && window.turnstile) {
        window.turnstile.remove(turnstileWidgetId.current);
      }
    };
  }, [isHumanChecked, handleTurnstileCallback, onTokenReceived]);

  return (
    <>
      {/* Checkbox to trigger Turnstile */}
      <div className="flex items-center space-x-2">
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

      {/* Cloudflare Turnstile widget will be rendered here */}
      {isHumanChecked && (
        <div className="my-4">
          <div ref={turnstileRef} id="cf-turnstile-container-cloudflare-turnstile"></div>
        </div>
      )}
    </>
  );
};

export default CloudflareTurnstile;