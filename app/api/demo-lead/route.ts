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

    // Send notification email to Mazen
    await resend.emails.send({
      from: 'FlowGuard Demo <alerts@flowguardprotection.com>',
      to: 'mazen@flowguardprotection.com',
      subject: `🎯 New Demo Lead — ${property_name || 'Unknown Property'}`,
      html: `
        <h2>New Demo Lead</h2>
        <p><strong>Name:</strong> ${first_name || 'Not provided'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Property:</strong> ${property_name || 'Not provided'}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
        <p>They just started the FlowGuard demo. Follow up within 24 hours.</p>
        <a href="mailto:${email}" style="background:#29ABE2;color:white;padding:12px 24px;text-decoration:none;border-radius:8px;display:inline-block;margin-top:16px;">Reply to ${first_name || 'this lead'}</a>
      `
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo lead error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
