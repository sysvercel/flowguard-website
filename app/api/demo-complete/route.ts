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
      from: 'Mazen Deeb <mazen@flowguardprotection.com>',
      to: email,
      subject: `${first_name}, quick question about your FlowGuard demo`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #374151;">
          <p>Hi ${first_name},</p>
          <p>You just finished the FlowGuard demo for ${prop}.</p>
          <p>I wanted to reach out personally — did anything stand out? Any questions about how it would work for your specific property?</p>
          <p>I'm happy to walk through it live and show you exactly what the install looks like, what the alerts feel like, and what the reporting gives you.</p>
          <p>Just reply here or book a quick call: <a href="https://flowguardprotection.com/contact" style="color: #29ABE2;">flowguardprotection.com/contact</a></p>
          <br/>
          <p>Mazen Deeb<br/>
          FlowGuard Asset Protection<br/>
          Dallas, TX</p>
        </div>
      `,
      text: `Hi ${first_name},\n\nYou just finished the FlowGuard demo for ${prop}.\n\nI wanted to reach out personally — did anything stand out? Any questions about how it would work for your specific property?\n\nI'm happy to walk through it live and show you exactly what the install looks like, what the alerts feel like, and what the reporting gives you.\n\nJust reply here or book a quick call: flowguardprotection.com/contact\n\nMazen Deeb\nFlowGuard Asset Protection\nDallas, TX`,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Demo complete error:', error)
    return NextResponse.json({ error: 'Failed to process completion' }, { status: 500 })
  }
}
