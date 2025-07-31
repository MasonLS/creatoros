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

    // Insert the record into the creatoros_waitlist table
    const insertResult = await supabase
      .from('creatoros_waitlist')
      .insert([
        {
          name,
          email,
          creator_type: creatorType,
          platforms: platforms || [],
          followers,
          status: 'active'
        }
      ])
      .select()

    // Check for duplicate email
    if (insertResult.error && insertResult.error.code === '23505') {
      return Response.json(
        { error: 'Email already registered' },
        { status: 409 }
      )
    }

    if (insertResult.error) {
      console.error('Supabase error:', insertResult.error)
      return Response.json(
        { error: 'Failed to save to waitlist', details: insertResult.error.message },
        { status: 500 }
      )
    }

    // Get current waitlist position
    const { count } = await supabase
      .from('creatoros_waitlist')
      .select('*', { count: 'exact', head: true })

    return Response.json({
      success: true,
      message: 'Successfully added to waitlist',
      position: count || 1,
      data: insertResult.data[0]
    })

  } catch (error) {
    console.error('API error:', error)
    return Response.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    )
  }
}