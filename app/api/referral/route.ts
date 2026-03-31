import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const { your_name, company, phone, client_name, client_company, client_phone } = await req.json()

    if (!your_name || !phone || !client_name || !client_company || !client_phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    await resend.emails.send({
      from: 'FlowGuard <mazen@flowguardprotection.com>',
      to: 'mazen@flowguardprotection.com',
      subject: `New Partner Referral — ${client_name} at ${client_company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #374151;">
          <h2 style="color: #1B2F4E; margin-bottom: 24px;">New Partner Referral</h2>

          <div style="background: #F0FDF4; border-left: 4px solid #059669; padding: 16px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: 600; color: #065F46;">Referring Partner</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Name:</strong> ${your_name}</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Company:</strong> ${company || 'Not provided'}</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Phone:</strong> ${phone}</p>
          </div>

          <div style="background: #EFF6FF; border-left: 4px solid #29ABE2; padding: 16px; margin-bottom: 20px; border-radius: 4px;">
            <p style="margin: 0; font-weight: 600; color: #1B2F4E;">Referred Client</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Name:</strong> ${client_name}</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Company:</strong> ${client_company}</p>
            <p style="margin: 4px 0 0; font-size: 14px;"><strong>Phone:</strong> ${client_phone}</p>
          </div>

          <p style="font-size: 12px; color: #94A3B8;">Submitted at ${new Date().toLocaleString('en-US', { timeZone: 'America/Chicago' })} CT</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Referral submission error:', error)
    return NextResponse.json({ error: 'Failed to submit referral' }, { status: 500 })
  }
}
