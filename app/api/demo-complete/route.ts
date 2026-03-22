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
    const { email, first_name, property_name } = await req.json()

    if (!email) {
      return NextResponse.json({ error: 'Email required' }, { status: 400 })
    }

    const prop = property_name || 'your property'

    // Mark lead as completed in Supabase
    await supabase
      .from('demo_leads')
      .update({ completed: true })
      .eq('email', email)

    // Send completion email to lead
    await resend.emails.send({
      from: 'Mazen at FlowGuard <mazen@flowguardprotection.com>',
      to: email,
      subject: `${first_name}, here's what FlowGuard can do for ${prop}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #ffffff;">
          <div style="background: #1B2F4E; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #29ABE2; margin: 0; font-size: 22px; font-weight: bold;">FlowGuard</h1>
            <p style="color: #94A3B8; margin: 4px 0 0 0; font-size: 12px;">Asset Protection LLC · Dallas, TX</p>
          </div>
          <h2 style="color: #1B2F4E;">You just saw FlowGuard in action</h2>
          <p style="color: #64748B; line-height: 1.6;">
            Now you know exactly how we protect properties like ${prop} —
            real sensors, real alerts, real response. 24/7. Automatically.
          </p>
          <div style="background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 20px; margin: 20px 0;">
            <p style="color: #059669; margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">What FlowGuard gives you:</p>
            <ul style="color: #059669; margin: 0; padding-left: 20px; font-size: 14px; line-height: 1.8;">
              <li>Water leak detection in seconds — not hours</li>
              <li>Automatic alerts to your maintenance team</li>
              <li>Full incident timeline for insurance documentation</li>
              <li>Monthly reports generated automatically</li>
              <li>No app required — everything via SMS</li>
            </ul>
          </div>
          <div style="text-align: center; margin: 28px 0;">
            <a href="https://flowguardprotection.com/contact"
              style="background: #29ABE2; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 16px; display: inline-block;">
              Talk to Mazen →
            </a>
          </div>
          <p style="color: #64748B; font-size: 14px; line-height: 1.6;">
            Questions? Reply directly to this email. I respond personally.
          </p>
          <div style="margin-top: 24px; padding-top: 20px; border-top: 1px solid #E2E8F0;">
            <p style="color: #1B2F4E; font-size: 14px; margin: 0; font-weight: bold;">Mazen Deeb</p>
            <p style="color: #64748B; font-size: 12px; margin: 4px 0 0 0;">Founder, FlowGuard Asset Protection · Dallas, TX</p>
            <p style="color: #64748B; font-size: 12px; margin: 2px 0 0 0;">flowguardprotection.com</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo complete error:', error)
    return NextResponse.json({ error: 'Failed to process completion' }, { status: 500 })
  }
}
