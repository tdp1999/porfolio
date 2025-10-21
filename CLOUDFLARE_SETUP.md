# Cloudflare Function Setup for Contact Form

This guide explains how to set up and deploy the Cloudflare function for handling contact form submissions.

## Prerequisites

1. A Cloudflare account
2. Access to Cloudflare Workers dashboard

## Setup Instructions

### 1. Configure Cloudflare

1. Log in to your Cloudflare dashboard
2. Go to Workers & Pages
3. Create a new Worker
4. Copy the code from `functions/contact-form.ts` into your Worker
5. Note down your Worker URL (it will be something like `https://portfolio-contact-form.your-subdomain.workers.dev`)

### 2. Update the Service URL

Edit `src/app/shared/services/netlify.service.ts` and replace the placeholder URL:

```typescript
const cloudflareFunctionUrl = "https://your-actual-worker-url.workers.dev/contact-form";
```

### 3. Configure Environment Variables (Optional)

If you want to add email notifications or database storage, configure environment variables in your Cloudflare Worker dashboard:

- `SENDGRID_API_KEY` - for SendGrid email service
- `DATABASE_URL` - for database connections
- Any other environment variables needed for your integrations

## Function Features

The Cloudflare function includes:

- ✅ CORS handling for cross-origin requests
- ✅ Form validation (required fields, email format)
- ✅ Error handling and logging
- ✅ Extensible architecture for adding:
    - Email notifications (SendGrid, Resend, etc.)
    - Database storage (D1, Supabase, etc.)
    - Webhook integrations
    - KV storage for temporary data

## Testing

You can test the function by:

1. Deploying it to Cloudflare Workers
2. Using the Cloudflare Workers dashboard to view logs
3. Testing the contact form on your website

## Customization

### Adding Email Notifications

1. Uncomment the `sendEmailNotification` function in `functions/contact-form.ts`
2. Configure your email service provider
3. Add the API key to your environment variables
4. Call the function in the main handler

### Adding Database Storage

1. Uncomment the `saveToDatabase` function in `functions/contact-form.ts`
2. Set up a D1 database in Cloudflare Workers dashboard
3. Configure the database binding in your Worker settings
4. Call the function in the main handler

## Security Considerations

- The function includes basic validation
- Consider adding rate limiting for production use
- Add CAPTCHA if needed for spam protection
- Validate and sanitize all input data
- Use environment variables for sensitive configuration

## Troubleshooting

- Check Cloudflare Worker logs in the dashboard
- Verify the Worker URL is correct in the service
- Ensure CORS headers are properly set
- Test with browser developer tools network tab
