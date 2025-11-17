import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message } = body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission

Name: ${name}
Email: ${email}
Company: ${company || 'Not provided'}
Service Interested In: ${service}
Message:
${message}

---
This email was sent from the Bulsoft contact form.
    `.trim();

    // Send email using Resend API
    // You'll need to set RESEND_API_KEY in your environment variables
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      // Fallback: Log to console in development
      console.log('Contact Form Submission:', {
        to: 'info@bulsoft.com',
        subject: 'New Contact Form Submission',
        content: emailContent
      });
      
      // In production, you should set up RESEND_API_KEY
      // For now, we'll return success but log a warning
      console.warn('RESEND_API_KEY not set. Email not sent. Please configure email service.');
      
      return NextResponse.json(
        { 
          success: true, 
          message: 'Form submitted successfully. We will contact you soon.' 
        },
        { status: 200 }
      );
    }

    // Send email via Resend
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM_EMAIL || 'Bulsoft Contact Form <onboarding@resend.dev>',
        to: ['info@bulsoft.com'],
        subject: `New Contact Form Submission from ${name}`,
        text: emailContent,
        reply_to: email,
      }),
    });

    if (!emailResponse.ok) {
      const errorData = await emailResponse.json();
      console.error('Resend API error:', errorData);
      throw new Error('Failed to send email');
    }

    const emailData = await emailResponse.json();
    console.log('Email sent successfully:', emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you! We\'ll get back to you within 24 hours.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        error: 'Failed to submit form. Please try again later.',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    );
  }
}

