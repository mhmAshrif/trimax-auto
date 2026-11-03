import Container from '../Container'
import SecondaryButton from '../SecondaryButton'
import WhatsAppButton from '../WhatsAppButton'

function ContactCallout() {
  return (
    <section className="contact-callout" aria-labelledby="contact-callout-title">
      <Container className="contact-callout-inner">
        <div>
          <p className="home-eyebrow"><span /> ENQUIRIES <span className="eyebrow-slash">/</span> TRIMAX AUTO</p>
          <h2 id="contact-callout-title">LOOKING FOR THE RIGHT AUTO PART?</h2>
          <p>Contact Trimax Auto to discuss your enquiry. Product availability and details can be confirmed directly.</p>
        </div>
        <div className="contact-callout-actions">
          <WhatsAppButton variant="inline" message="Hello, I would like to enquire about an automotive spare part." />
          <SecondaryButton href="/contact">Contact Us <span aria-hidden="true">↗</span></SecondaryButton>
        </div>
      </Container>
    </section>
  )
}

export default ContactCallout