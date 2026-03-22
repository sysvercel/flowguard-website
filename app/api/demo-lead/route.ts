import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { first_name, email, property_name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    // Insert into Supabase
    await supabase.from('demo_leads').insert({
      first_name,
      email,
      property_name,
      completed: false,
    })

    // Send welcome email to the lead
    await resend.emails.send({
      from: 'Mazen at FlowGuard <mazen@flowguardprotection.com>',
      to: email,
      subject: `Your FlowGuard demo is ready, ${first_name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff;">
          <div style="background: #1B2F4E; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #29ABE2; margin: 0; font-size: 22px; font-weight: bold;">FlowGuard</h1>
            <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 12px;">Asset Protection LLC · Dallas, TX</p>
          </div>
          <h2 style="color: #1B2F4E; font-size: 20px;">Hi ${first_name}, your demo is ready</h2>
          <p style="color: #64748B; line-height: 1.6;">
            You're about to see exactly how FlowGuard protects ${property_name || 'your property'}
            from water damage — 24/7, automatically, with no app required.
          </p>
          <div style="background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="color: #0369A1; margin: 0; font-size: 14px; font-weight: bold;">What you'll see in this demo:</p>
            <ul style="color: #0369A1; margin: 8px 0 0 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
              <li>How sensors detect leaks instantly</li>
              <li>How alerts reach your team in seconds</li>
              <li>How incidents are tracked and resolved</li>
              <li>How reports are generated automatically</li>
            </ul>
          </div>
          <p style="color: #64748B; font-size: 14px; line-height: 1.6;">
            Have questions? Reply to this email and I'll get back to you personally.
          </p>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <p style="color: #1B2F4E; font-size: 14px; margin: 0; font-weight: bold;">Mazen Deeb</p>
            <p style="color: #64748B; font-size: 12px; margin: 4px 0 0 0;">FlowGuard Asset Protection · Dallas, TX</p>
            <p style="color: #64748B; font-size: 12px; margin: 2px 0 0 0;">flowguardprotection.com</p>
          </div>
        </div>
      `,
    })

    // Notify Mazen
    await resend.emails.send({
      from: 'FlowGuard System <mazen@flowguardprotection.com>',
      to: 'mazen@flowguardprotection.com',
      subject: `🎯 New demo lead — ${first_name} from ${property_name || 'Unknown'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px;">
          <h2 style="color: #1B2F4E;">New Demo Lead</h2>
          <p><strong>Name:</strong> ${first_name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Property:</strong> ${property_name || 'Not specified'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
          <p><a href="https://flowguard-dashboard.vercel.app/ops/demo-leads" style="color: #29ABE2;">View in dashboard →</a></p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo lead error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
