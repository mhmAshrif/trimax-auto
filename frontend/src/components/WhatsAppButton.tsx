import { siteConfig } from '../config/site'

type WhatsAppButtonProps = {
  variant?: 'floating' | 'inline'
  message?: string
}

function WhatsAppButton({ variant = 'floating', message }: WhatsAppButtonProps) {
  const phoneNumber = siteConfig.whatsappPhoneNumber.replace(/\D/g, '')
  const query = message ? `?text=${encodeURIComponent(message)}` : ''

  return (
    <a
      className={`button button-primary whatsapp-button${variant === 'inline' ? ' is-inline' : ''}`}
      href={`https://wa.me/${phoneNumber}${query}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Send an enquiry to Trimax Auto on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.25a9.7 9.7 0 0 0-8.32 14.7L2.4 21.6l4.8-1.26A9.75 9.75 0 1 0 12 2.25Zm0 17.7a7.9 7.9 0 0 1-4.03-1.1l-.29-.17-2.85.75.76-2.78-.19-.3A7.95 7.95 0 1 1 12 19.95Zm4.36-5.96c-.24-.12-1.42-.7-1.64-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1.01-.37-1.93-1.18-.71-.63-1.19-1.41-1.33-1.65-.14-.24-.02-.37.1-.49.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.4h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.04.4 1.4.51.59.19 1.12.16 1.54.1.47-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
      </svg>
      <span>{message ? 'WhatsApp Enquiry' : 'WhatsApp enquiry'}</span>
    </a>
  )
}

export default WhatsAppButton