import { createClient } from '@/lib/supabase/client'
import { useEffect, useState } from 'react'

import type { User } from '@supabase/supabase-js'

export const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null)

  useEffect(() => {
    const fetchUserInfo = async () => {
      const { data, error } = await createClient().auth.getSession()
      if (error) {
        console.error(error)
      }

      setCurrentUser(data.session?.user ?? null)
    }
    fetchUserInfo()
  }, [])

  return currentUser
}
