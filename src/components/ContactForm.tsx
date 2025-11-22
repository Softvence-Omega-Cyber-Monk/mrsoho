import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

interface ContactFormProps {
  onTurnstileVerified: (token: string) => void;
}

export interface ContactFormRef {
  reset: () => void;
}

const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(
  ({ onTurnstileVerified }, ref) => {
    const [widgetId, setWidgetId] = useState<string | null>(null);

    // Expose the reset function to the parent component
    useImperativeHandle(ref, () => ({
      reset: () => {
        // @ts-ignore
        if (window.turnstile && widgetId) {
          window.turnstile.reset(widgetId);
        }
      },
    }));

    useEffect(() => {
      // Initialize the Turnstile widget when the component mounts
      // @ts-ignore
      if (window.turnstile) {
        const id = window.turnstile.render("#turnstile-widget", {
          sitekey: "0x4AAAAAACB8bNGUdaTElw82", // Your site key here
          callback: (token: string) => {
            onTurnstileVerified(token); // Pass the token back to the parent
          },
        });
        setWidgetId(id);

        return () => {
          // Clean up on unmount
          // @ts-ignore
          if (window.turnstile && id) {
            window.turnstile.remove(id);
          }
        };
      }
    }, [onTurnstileVerified]);

    return <div id="turnstile-widget"></div>;
  }
);

export default ContactForm;



// import { useEffect, useState, forwardRef, useImperativeHandle } from "react";

// interface ContactFormProps {
//   onTurnstileVerified: (token: string) => void;
// }

// export interface ContactFormRef {
//   reset: () => void;
// }

// const ContactForm = forwardRef<ContactFormRef, ContactFormProps>(({ onTurnstileVerified }, ref) => {
//   const [widgetId, setWidgetId] = useState<string | null>(null);

//   useImperativeHandle(ref, () => ({
//     reset: () => {
//       // @ts-ignore
//       if (window.turnstile && widgetId) {
//         window.turnstile.reset(widgetId);
//       }
//     }
//   }));

//   useEffect(() => {
//     // @ts-ignore
//     if (window.turnstile) {
//       const id = window.turnstile.render("#turnstile-widget", {
//         sitekey: "0x4AAAAAACB8bNGUdaTElw82",
//         callback: (token: string) => {
//           onTurnstileVerified(token);
//         },
//       });
//       setWidgetId(id);

//       return () => {
//         // @ts-ignore
//         if (window.turnstile && id) {
//           window.turnstile.remove(id);
//         }
//       };
//     }
//   }, [onTurnstileVerified]); 

//   return (
//     <div id="turnstile-widget"></div>
//   );
// });

// export default ContactForm;
