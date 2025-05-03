import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className="m-2 p-5 bg-white md:w-[400px] rounded-lg">
    <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Username or Password</Label>
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <div className="flex items-center gap-2 my-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Link href={"/Home"}>
      <Button type="submit" className='bg-[#FF9F1C] hover:bg-[#FFBF69] pointer-cursor'>Submit</Button>
      </Link>
      <div className="text-center flex justify-center gap-2">
        <Link href="/SignUp">
        <p className='underline text-blue-500'>Create User</p>
        </Link>
        <p> | </p> <p>Login</p>
      </div>
    </div>

</div>
  )
}

export default Login