import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xyzrpglr");

  if (state.succeeded) {
    return (
      <div className="alert alert-custom text-center p-4"
        style={{
          backgroundColor: 'var(--bg-secondary)',
          border: '2px solid var(--orange-accent)',
          color: 'var(--text-primary)'
        }}>
        <svg
          className="mb-3"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--orange-accent)"
          strokeWidth="2"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
        <h4 className="orange-accent mb-2">Thanks for joining!</h4>
        <p className="text-secondary-custom mb-0">We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      action='https://formspree.io/f/xyzrpglr'
      method='POST'
      className="fade-in-up"
    >
      <div className="mb-4">
        <label htmlFor="email" className="form-label fw-semibold">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-control"
          placeholder="your@email.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-danger small mt-2"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="form-label fw-semibold">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-control"
          rows="5"
          placeholder="Tell us what you're thinking..."
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-danger small mt-2"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary-custom w-100 py-3 fw-semibold"
      >
        {state.submitting ? (
          <>
            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
            Sending...
          </>
        ) : (
          <>
            Submit
            <svg
              className="ms-2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </>
        )}
      </button>
    </form>
  );
}