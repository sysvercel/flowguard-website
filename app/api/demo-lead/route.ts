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
      from: 'Mazen Deeb <mazen@flowguardprotection.com>',
      to: email,
      subject: `Hi ${first_name}, your FlowGuard demo is ready`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #374151;">
          <p>Hi ${first_name},</p>
          <p>Your personalized FlowGuard demo for ${property_name || 'your property'} is ready to walk through.</p>
          <p>You'll see exactly how we detect leaks, alert your team, and document every incident automatically — no app required.</p>
          <p>If you have questions at any point, just reply to this email. I check it personally.</p>
          <br/>
          <p>Mazen Deeb<br/>
          FlowGuard Asset Protection<br/>
          Dallas, TX<br/>
          flowguardprotection.com</p>
        </div>
      `,
      text: `Hi ${first_name},\n\nYour personalized FlowGuard demo for ${property_name || 'your property'} is ready to walk through.\n\nYou'll see exactly how we detect leaks, alert your team, and document every incident automatically — no app required.\n\nIf you have questions at any point, just reply to this email. I check it personally.\n\nMazen Deeb\nFlowGuard Asset Protection\nDallas, TX\nflowguardprotection.com`,
    })

    // Notify Mazen
    await resend.emails.send({
      from: 'Mazen Deeb <mazen@flowguardprotection.com>',
      to: 'mazen@flowguardprotection.com',
      subject: `New demo lead — ${first_name} from ${property_name || 'Unknown'}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #374151;">
          <p><strong>New Demo Lead</strong></p>
          <p><strong>Name:</strong> ${first_name || 'Not provided'}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Property:</strong> ${property_name || 'Not specified'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}</p>
          <p><a href="https://flowguard-dashboard.vercel.app/ops/demo-leads" style="color: #29ABE2;">View in dashboard</a></p>
        </div>
      `,
      text: `New Demo Lead\n\nName: ${first_name || 'Not provided'}\nEmail: ${email}\nProperty: ${property_name || 'Not specified'}\nTime: ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })}\n\nView in dashboard: https://flowguard-dashboard.vercel.app/ops/demo-leads`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo lead error:', error)
    return NextResponse.json({ error: 'Failed to save lead' }, { status: 500 })
  }
}
