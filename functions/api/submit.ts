/**
 * Cloudflare Function to handle contact form submissions
 * This function processes form data and can be extended to send emails,
 * save to database, or integrate with other services
 */

interface ContactFormData {
    name: string;
    email: string;
    company: string;
    message: string;
}

interface Env {
    // Add environment variables here if needed
    // For example: EMAIL_SERVICE_API_KEY: string;
    // DATABASE_URL: string;
}

export default {
    async fetch(request: Request, env: Env, ctx: any): Promise<Response> {
        // Handle CORS preflight requests
        if (request.method === 'OPTIONS') {
            return new Response(null, {
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, OPTIONS',
                    'Access-Control-Allow-Headers': 'Content-Type',
                },
            });
        }

        // Only allow POST requests
        if (request.method !== 'POST') {
            return new Response('Method not allowed', {
                status: 405,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });
        }

        try {
            // Parse form data from the request
            const formData = await request.formData();

            // Extract form fields
            const contactData: ContactFormData = {
                name: (formData.get('name') as string) || '',
                email: (formData.get('email') as string) || '',
                company: (formData.get('company') as string) || '',
                message: (formData.get('message') as string) || '',
            };

            // Validate required fields
            if (!contactData.name || !contactData.email || !contactData.message) {
                return new Response(
                    JSON.stringify({
                        error: 'Missing required fields: name, email, and message are required',
                    }),
                    {
                        status: 400,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                    },
                );
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(contactData.email)) {
                return new Response(
                    JSON.stringify({
                        error: 'Invalid email format',
                    }),
                    {
                        status: 400,
                        headers: {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                        },
                    },
                );
            }

            // Log the form submission (you can replace this with actual processing)
            console.log('Contact form submission received:', {
                name: contactData.name,
                email: contactData.email,
                company: contactData.company,
                message: contactData.message,
                timestamp: new Date().toISOString(),
            });

            // TODO: Add your processing logic here
            // Examples:
            // - Send email notification using a service like SendGrid, Resend, or Nodemailer
            // - Save to database (D1, Supabase, etc.)
            // - Send to webhook endpoint
            // - Store in KV storage for later processing

            // Example: Send email using a hypothetical email service
            // await sendEmailNotification(contactData, env);

            // Example: Save to database
            // await saveToDatabase(contactData, env);

            // Return success response
            return new Response(
                JSON.stringify({
                    success: true,
                    message: 'Form submitted successfully',
                }),
                {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                },
            );
        } catch (error) {
            console.error('Error processing contact form:', error);

            return new Response(
                JSON.stringify({
                    error: 'Internal server error',
                }),
                {
                    status: 500,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                },
            );
        }
    },
};

/**
 * Example function to send email notification
 * Uncomment and modify based on your email service provider
 */
/*
async function sendEmailNotification(data: ContactFormData, env: Env): Promise<void> {
  // Example using SendGrid
  const emailData = {
    to: 'your-email@example.com',
    from: 'noreply@yourdomain.com',
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `,
  };

  const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${env.SENDGRID_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(emailData),
  });

  if (!response.ok) {
    throw new Error(`Email service error: ${response.statusText}`);
  }
}
*/

/**
 * Example function to save to database
 * Uncomment and modify based on your database provider
 */
/*
async function saveToDatabase(data: ContactFormData, env: Env): Promise<void> {
  // Example using D1 database
  const stmt = env.DB.prepare(`
    INSERT INTO contact_submissions (name, email, company, message, created_at)
    VALUES (?, ?, ?, ?, ?)
  `);

  await stmt.bind(
    data.name,
    data.email,
    data.company,
    data.message,
    new Date().toISOString()
  ).run();
}
*/
