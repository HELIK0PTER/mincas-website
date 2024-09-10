'use client'

import React from 'react'
import Script from 'next/script'

import { useRouter } from 'next/router'
import { createClient } from '@/utils/supabase/client'

const OneTapGoogle = () => {

  const supabase = createClient()

  async function handleSignInWithGoogle(response : any) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `http://example.com/auth/callback`,
      },
    })

    if (error) {
      console.error('Error logging in with Google:', error)
      return
    }

    console.log('data', data)
  }


  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
      
      <div
        id="g_id_onload"
        data-client_id="339329314279-p45fpekcr62v3enjkn1lnd5j66hbhhjk.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-nonce=""
        data-auto_select="true"
        data-itp_support="true"
        data-use_fedcm_for_prompt="false"
        className='hidden'
      ></div>

      <div
        className="g_id_signin w-full flex justify-center"
        data-type="standard"
        data-shape="pill"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>

    </>
  )
}

export default OneTapGoogle