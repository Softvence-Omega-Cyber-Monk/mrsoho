import { useEffect, useRef, useState } from "react";

interface TurnstileProps {
  siteKey: string;
  onSuccess: (token: string) => void;
}

export const Turnstile = ({ siteKey, onSuccess }: TurnstileProps) => {
  const widgetRef = useRef<HTMLDivElement | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const widgetIdRef = useRef<string | null>(null);

  // Load Turnstile script once
  useEffect(() => {
    const scriptId = "cf-turnstile-script";

    if (document.getElementById(scriptId)) {
      setScriptLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.id = scriptId;
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (scriptLoaded && widgetRef.current && window.turnstile) {
      widgetIdRef.current = window.turnstile.render(widgetRef.current, {
        sitekey: siteKey,
        callback: (token: string) => onSuccess(token),
      });
    }

    return () => {
      if (window.turnstile && widgetIdRef.current) {
        window.turnstile.remove(widgetIdRef.current);
      }
    };
  }, [scriptLoaded, siteKey, onSuccess]);

  return <div ref={widgetRef} />;
};