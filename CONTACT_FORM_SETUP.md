# Contact Form Setup Instructions

The contact form is now set up and ready to use! To receive email notifications when someone submits the form, you need to configure an email service.

## Option 1: Using Resend (Recommended - Free tier available)

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the [Resend dashboard](https://resend.com/api-keys)
3. Create a `.env.local` file in the root directory with:

```
CONTACT_EMAIL=namitadhawan555@gmail.com
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=onboarding@resend.dev
```

4. Replace `re_your_api_key_here` with your actual Resend API key
5. The `RESEND_FROM_EMAIL` should be a domain you've verified in Resend (or use their default)

## Option 2: Using Nodemailer (Alternative)

If you prefer to use nodemailer or another email service, you can modify `app/api/contact/route.ts` to use your preferred email service.

## Testing

Once configured, test the form by:
1. Filling out the contact form on your website
2. Submitting it
3. Checking your email inbox (namitadhawan555@gmail.com)

## Form Fields

The contact form includes:
- **Name** (required)
- **Email** (required)
- **Contact Number** (optional)
- **Message** (required)

All form submissions will be sent to the email address specified in `CONTACT_EMAIL`.





