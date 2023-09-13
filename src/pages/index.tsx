import { SignInButton, SignOutButton, useUser} from "@clerk/nextjs";


import { api } from "~/utils/api";

export default function Home() {
  const user=useUser()
  console.log()
  return (
    <div>
     {user.isSignedIn ? <div>{user.user?.username} <SignOutButton/> </div>:<SignInButton />}
     </div>

  )
}
