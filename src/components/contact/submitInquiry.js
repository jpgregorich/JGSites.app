const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xwlkzade';

export default async function submitInquiry(form) {
  const payload = {
    name: form.name,
    business: form.businessName,
    email: form.email,
    phone: form.phone,
    website: form.website,
    message: form.message,
  };
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15000);
  try {
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    if (!response.ok) throw new Error('Your request could not be sent. Please try again.');
    const result = await response.json();
    if (result?.ok === false || result?.success === false || result?.error || result?.errors?.length) {
      throw new Error('Your request could not be sent. Please try again.');
    }
  } catch (error) {
    if (error.name === 'AbortError') throw new Error('The request timed out. Please try again in a moment.');
    if (error instanceof TypeError) throw new Error('Unable to connect. Please check your connection and try again.');
    if (error instanceof SyntaxError) throw new Error('The form service did not confirm receipt. Please try again later.');
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}