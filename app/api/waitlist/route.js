import { supabase } from '../../../lib/supabase'

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, creatorType, platforms, followers } = body

    // Validate required fields
    if (!name || !email || !creatorType || !followers) {
      return Response.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email already exists for CreatorOS
    const { data: existingUser } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .eq('product', 'creatoros')
      .single()

    if (existingUser) {
      return Response.json(
        { error: 'Email already registered for CreatorOS' },
        { status: 409 }
      )
    }

    // Insert new waitlist entry with product namespace
    const { data, error } = await supabase
      .from('waitlist')
      .insert([
        {
          product: 'creatoros',
          name,
          email,
          creator_type: creatorType,
          platforms: platforms || [],
          followers,
          created_at: new Date().toISOString(),
          status: 'active',
          metadata: {
            source: 'landing_page',
            user_agent: request.headers.get('user-agent'),
            referrer: request.headers.get('referer')
          }
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return Response.json(
        { error: 'Failed to save to waitlist' },
        { status: 500 }
      )
    }

    // Get current waitlist position for CreatorOS specifically
    const { count } = await supabase
      .from('waitlist')
      .select('*', { count: 'exact', head: true })
      .eq('product', 'creatoros')
      .eq('status', 'active')

    return Response.json({
      success: true,
      message: 'Successfully added to CreatorOS waitlist',
      position: count,
      product: 'creatoros',
      data: data[0]
    })

  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}