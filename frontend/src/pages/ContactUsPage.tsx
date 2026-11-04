import { useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router'
import Container from '../components/Container'
import SectionHeading from '../components/SectionHeading'
import WhatsAppButton from '../components/WhatsAppButton'
import SocialLinks from '../components/SocialLinks'
import { siteConfig } from '../config/site'

const contactIcons: Record<'phone' | 'email' | 'address' | 'hours', ReactNode> = {
  phone: <><path d="M7 3.5h10v17H7z" /><path d="M10 6h4M11 17.5h2" /></>,
  email: <><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></>,
  address: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2" /></>,
  hours: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
}

function ContactUsPage() {
  const [feedback, setFeedback] = useState<{ type: 'error' | 'notice'; message: string } | null>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const phone = String(formData.get('phone') ?? '')
    const phoneDigits = phone.replace(/\D/g, '')
    const hasInvalidPhoneCharacters = /[^+\d\s().-]/.test(phone)

    if (hasInvalidPhoneCharacters || phoneDigits.length < 7 || phoneDigits.length > 20) {
      setFeedback({ type: 'error', message: 'Enter a phone number containing 7 to 20 digits. A country-code plus and common separators are accepted.' })
      return
    }

    setFeedback({
      type: 'notice',
      message: 'Message submission is not connected yet. No message was sent. Please use the contact details or WhatsApp enquiry instead.',
    })
  }

  return (
    <div className="contact-page">
      <section className="contact-page-heading" aria-labelledby="contact-page-title">
        <Container>
          <nav className="contact-breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><Link to="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact Us</li>
            </ol>
          </nav>
          <SectionHeading
            level={1}
            titleId="contact-page-title"
            title="CONTACT US"
            eyebrow="TRIMAX AUTO"
            description="Get in touch with the Trimax Auto team. Contact information below is editable placeholder content."
          />
        </Container>
      </section>

      <Container className="contact-page-layout">
        <section className="contact-information" aria-labelledby="contact-information-title">
          <SectionHeading
            titleId="contact-information-title"
            title="CONTACT INFORMATION"
            eyebrow="DETAILS TO BE CONFIRMED"
            description="Replace these fields with current business contact details before publishing."
          />

          <div className="contact-detail-list">
            <ContactDetail icon="phone" label="Phone number" value={siteConfig.contact.phone} />
            <ContactDetail icon="email" label="Email" value={siteConfig.contact.email} />
            <ContactDetail icon="address" label="Address" value={siteConfig.contact.address} />
            <ContactDetail icon="hours" label="Business hours" value={siteConfig.contact.businessHours} />
          </div>

          <div className="contact-whatsapp-panel">
            <div>
              <h3>WhatsApp Enquiry</h3>
              <p>Use the configured placeholder number until the business contact is confirmed.</p>
            </div>
            <WhatsAppButton variant="inline" message="Hello, I would like to contact Trimax Auto." />
          </div>

          <div className="contact-socials">
            <h3>Social media</h3>
            <SocialLinks
              className="contact-social-links"
              linkClassName="contact-social-link"
              placeholderClassName="contact-social-placeholder"
              items={siteConfig.socialLinks}
            />
          </div>
        </section>

        <section className="contact-form-panel" aria-labelledby="contact-form-title">
          <SectionHeading
            titleId="contact-form-title"
            title="SEND AN ENQUIRY"
            eyebrow="FORM PREVIEW"
            description="Complete the fields below. Submission is not connected to a messaging service."
          />

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            onInvalid={() => setFeedback({ type: 'error', message: 'Please complete all required fields and check the email and phone number formats.' })}
          >
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Name <span aria-hidden="true">*</span></label>
                <input id="contact-name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email <span aria-hidden="true">*</span></label>
                <input id="contact-email" name="email" type="email" autoComplete="email" required />
              </div>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-phone">Phone Number <span aria-hidden="true">*</span></label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  inputMode="tel"
                  required
                />
                <p className="contact-field-hint">7–20 digits; common phone separators are accepted.</p>
              </div>
              <div className="contact-field">
                <label htmlFor="contact-subject">Subject <span aria-hidden="true">*</span></label>
                <input id="contact-subject" name="subject" type="text" required />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
              <textarea id="contact-message" name="message" rows={5} required />
            </div>

            {feedback && (
              <p className={`contact-form-feedback is-${feedback.type}`} role={feedback.type === 'error' ? 'alert' : 'status'}>
                {feedback.message}
              </p>
            )}

            <button type="submit" className="button button-primary contact-submit">
              Submit Enquiry <span aria-hidden="true">↗</span>
            </button>
            <p className="contact-form-disclaimer">This form currently validates fields only; it does not send or store your information.</p>
          </form>
        </section>
      </Container>
    </div>
  )
}

function ContactDetail({ icon, label, value }: { icon: keyof typeof contactIcons; label: string; value: string }) {
  return (
    <div className="contact-detail">
      <span className="contact-detail-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {contactIcons[icon]}
        </svg>
      </span>
      <div>
        <h3>{label}</h3>
        <p>{value}</p>
      </div>
    </div>
  )
}

export default ContactUsPage