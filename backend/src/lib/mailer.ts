import nodemailer from 'nodemailer';
import db from '../database';

const {
  SMTP_HOST,
  SMTP_PORT,
  SMTP_USER,
  SMTP_PASS,
  SMTP_FROM,
  SMTP_TO,
} = process.env;

const enabled = Boolean(SMTP_HOST && SMTP_USER && SMTP_PASS);

const transporter = enabled
  ? nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT) || 587,
      secure: Number(SMTP_PORT) === 465, // 465 = implicit TLS, 587 = STARTTLS
      auth: { user: SMTP_USER as string, pass: SMTP_PASS as string },
    })
  : null;

if (!enabled) {
  console.log('ℹ  SMTP nije konfigurisan — email obavijesti o upitima su isključene');
}

export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message: string;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

/** Recipient: SMTP_TO override, else the `email` setting from the admin panel. */
function getRecipient(): string | null {
  if (SMTP_TO) return SMTP_TO;
  const row = db
    .prepare("SELECT value FROM site_settings WHERE key = 'email'")
    .get() as { value: string } | undefined;
  return row?.value || null;
}

function formatDate(): string {
  return new Date().toLocaleString('bs-BA', {
    timeZone: 'Europe/Sarajevo',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

function buildHtml(s: ContactSubmission): string {
  const row = (label: string, value: string) => `
    <tr>
      <td style="padding:10px 0;color:#8a8a8a;font-size:13px;width:110px;vertical-align:top;">${label}</td>
      <td style="padding:10px 0;color:#2b2b2b;font-size:15px;">${value}</td>
    </tr>`;

  const name = escapeHtml(s.name);
  const email = escapeHtml(s.email);
  const phone = s.phone ? escapeHtml(s.phone) : '';
  const service = s.service ? escapeHtml(s.service) : '';
  const message = escapeHtml(s.message).replace(/\n/g, '<br>');

  return `<!doctype html>
<html lang="bs">
<body style="margin:0;padding:24px;background:#f6f4f0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;">
  <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 1px 3px rgba(0,0,0,.08);">

    <div style="padding:24px 28px;border-bottom:1px solid #eee;">
      <div style="font-size:12px;letter-spacing:2px;color:#b08d3f;font-weight:600;">THE STAGE</div>
      <div style="font-size:20px;color:#2b2b2b;margin-top:4px;">Novi upit s web stranice</div>
    </div>

    <div style="margin:20px 28px;padding:14px 16px;background:#fdf8ee;border-left:3px solid #b08d3f;border-radius:4px;">
      <div style="font-size:14px;color:#5c4a20;line-height:1.5;">
        Kliknite <strong>Odgovori</strong> na ovaj email i vaš odgovor ide
        direktno klijentu na <strong>${email}</strong>.
      </div>
    </div>

    <div style="padding:0 28px 8px;">
      <table style="width:100%;border-collapse:collapse;">
        ${row('Ime', name)}
        ${row('Email', `<a href="mailto:${email}" style="color:#b08d3f;text-decoration:none;">${email}</a>`)}
        ${phone ? row('Telefon', `<a href="tel:${phone.replace(/\s/g, '')}" style="color:#b08d3f;text-decoration:none;">${phone}</a>`) : ''}
        ${service ? row('Usluga', service) : ''}
      </table>
    </div>

    <div style="padding:8px 28px 24px;">
      <div style="color:#8a8a8a;font-size:13px;margin-bottom:8px;">Poruka</div>
      <div style="background:#faf9f7;border-radius:8px;padding:16px;color:#2b2b2b;font-size:15px;line-height:1.6;">
        ${message}
      </div>
    </div>

    <div style="padding:16px 28px;border-top:1px solid #eee;color:#a0a0a0;font-size:12px;">
      Primljeno ${formatDate()} &nbsp;·&nbsp; Upit je sačuvan i u admin panelu (Kontakti)
    </div>

  </div>
</body>
</html>`;
}

function buildText(s: ContactSubmission): string {
  return [
    'NOVI UPIT S WEB STRANICE',
    '',
    'Odgovorite na ovaj email i odgovor ide direktno klijentu.',
    '',
    `Ime:     ${s.name}`,
    `Email:   ${s.email}`,
    s.phone ? `Telefon: ${s.phone}` : null,
    s.service ? `Usluga:  ${s.service}` : null,
    '',
    'Poruka:',
    s.message,
    '',
    `Primljeno ${formatDate()}`,
  ]
    .filter((line) => line !== null)
    .join('\n');
}

/**
 * Emails a contact-form submission to the venue.
 * `replyTo` is the customer's address, so hitting Reply answers them directly.
 *
 * Never throws — the caller treats this as fire-and-forget so a mail outage
 * can't break form submission (the inquiry is already saved in the DB).
 */
export async function sendContactNotification(s: ContactSubmission): Promise<void> {
  if (!transporter) return;

  const to = getRecipient();
  if (!to) {
    console.warn('Email obavijest preskočena: primalac nije podešen');
    return;
  }

  const subject = s.service
    ? `Novi upit: ${s.service} — ${s.name}`
    : `Novi upit — ${s.name}`;

  await transporter.sendMail({
    from: SMTP_FROM || `"The Stage web" <${SMTP_USER}>`,
    to,
    replyTo: `"${s.name.replace(/"/g, '')}" <${s.email}>`,
    subject,
    text: buildText(s),
    html: buildHtml(s),
  });
}
