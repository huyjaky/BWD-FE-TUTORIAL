import useAuth from "@/hooks/useAuth"
import { useRouter } from "next/router";
import { useEffect } from "react";

export interface AuthProps {
  children: any
}

const Auth = ({children}: AuthProps) => {
  const router = useRouter();
  const {profile, firstLoading} = useAuth();

  useEffect(()=>{
    if (!firstLoading && !profile?.username) {
      router.push('/homepage');
    }
  }, [router, profile, firstLoading]);

  if (!profile?.username) return <h1>Loading...</h1>

  return(
    <div>
      {children}
    </div>
  )
}

export default Auth
