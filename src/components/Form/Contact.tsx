import { useState } from "react";
import axios from "axios";
import { Turnstile } from "./Turnstile";

const TURNSTILE_SITEKEY = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

export const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    turnstileToken: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.turnstileToken) {
      setStatus("❌ Please complete the captcha.");
      return;
    }

    try {
      setLoading(true);
      setStatus(null);

      const res = await axios.post("/api/contact", {
        name: form.name,
        email: form.email,
        message: form.message,
        "cf-turnstile-response": form.turnstileToken,
      });

      if (res.data.success) {
        setStatus("✅ Message sent successfully!");
      } else {
        setStatus("❌ Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-wrapper">
      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        {/* Hidden input (Backend expects this name exactly) */}
        <input
          type="hidden"
          name="cf-turnstile-response"
          value={form.turnstileToken}
        />
        {/* Captcha Component */}
        <Turnstile
          siteKey={TURNSTILE_SITEKEY}
          onSuccess={(token: string) =>
            setForm((prev) => ({ ...prev, turnstileToken: token }))
          }
        />

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && <p className="status-msg">{status}</p>}
      </form>
    </div>
  );
};