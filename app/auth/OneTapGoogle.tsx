'use client'

import React from 'react'
import Script from 'next/script'
import { createClient } from '@/utils/supabase/client'

const OneTapGoogle = () => {

  const supabase = createClient()

  async function handleSignInWithGoogle(response : any) {
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: 'google',
      token: response.credential,
    })
  }


  return (
    <>
      <Script src="https://accounts.google.com/gsi/client" async></Script>
      
      <div
        id="g_id_onload"
        data-client_id="339329314279-34gfppfqgo8jt600umesl8u012rb9517.apps.googleusercontent.com"
        data-login_uri="https://yuubtmxvlqkzydwjxuhf.supabase.co/auth/v1/callback"
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
        data-client_id="339329314279-34gfppfqgo8jt600umesl8u012rb9517.apps.googleusercontent.com"
        data-callback="handleSignInWithGoogle"
        data-context="signin"
        data-ux_mode="popup"
        data-prompt_parent_id="g_id_onload"
        data-login_uri="https://yuubtmxvlqkzydwjxuhf.supabase.co/auth/v1/callback"
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