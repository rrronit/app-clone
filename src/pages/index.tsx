import { SignInButton, SignOutButton, useUser} from "@clerk/nextjs";


import { api } from "~/utils/api";

export default function Home() {
  const user=useUser()
  const {data}=api.post.getAll.useQuery()

  return (
    <div>
     {user.isSignedIn ? <div>{user.user?.username} <SignOutButton/> </div>:<SignInButton />}
  {data?.map(emo=>{
    return <div key={emo.id}>
    {emo.content}
    </div>
  })}
     </div>

)
}
