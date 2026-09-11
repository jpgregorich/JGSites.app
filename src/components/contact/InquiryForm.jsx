import { useState } from 'react';
import submitInquiry from '@/components/contact/submitInquiry';

const initial = { name: '', businessName: '', email: '', phone: '', website: '', message: '' };
export default function InquiryForm() {
  const [form, setForm] = useState(initial);
  const [status, setStatus] = useState('default');
  const [error, setError] = useState('');
  const sending = status === 'sending';
  const change = e => setForm(current => ({ ...current, [e.target.name]: e.target.value }));
  const submit = async e => {
    e.preventDefault();
    if (sending) return;
    setStatus('sending');
    setError('');
    try {
      await submitInquiry(form);
      setForm(initial);
      setStatus('success');
    } catch (error) {
      setError(error.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };
  if (status === 'success') return <div role="status" className="border-t border-navy pt-8"><p className="eyebrow text-navy">Request sent</p><h2 className="mt-4 font-heading text-3xl">Thanks! Your request has been sent.</h2><p className="mt-4 text-ink/65">I'll be in touch soon.</p></div>;
  return <form onSubmit={submit} className="grid gap-6" aria-busy={sending}>
    <fieldset disabled={sending} className="grid min-w-0 gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <label className="form-label">Name *<input className="form-input" name="name" autoComplete="name" required value={form.name} onChange={change}/></label>
        <label className="form-label">Business Name *<input className="form-input" name="businessName" autoComplete="organization" required value={form.businessName} onChange={change}/></label>
        <label className="form-label">Email *<input className="form-input" type="email" name="email" autoComplete="email" required value={form.email} onChange={change}/></label>
        <label className="form-label">Phone <span>(optional)</span><input className="form-input" type="tel" name="phone" autoComplete="tel" value={form.phone} onChange={change}/></label>
      </div>
      <label className="form-label">Current Website <span>(optional)</span><input className="form-input" type="url" name="website" autoComplete="url" placeholder="https://" value={form.website} onChange={change}/></label>
      <label className="form-label">What would you like help with? *<textarea className="form-input min-h-40 resize-y" name="message" required value={form.message} onChange={change}/></label>
      {error && <p id="inquiry-error" role="alert" className="border-l-2 border-destructive pl-4 text-sm text-destructive">{error}</p>}
      <div><button disabled={sending} className="button-primary" type="submit" aria-describedby={error ? 'inquiry-error' : undefined}>{sending ? 'Sending…' : 'Request My Free Website Review'}</button><p className="mt-3 text-sm text-ink/50">No commitment required.</p></div>
    </fieldset>
  </form>;
}