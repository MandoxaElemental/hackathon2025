import { Button, Label, TextInput } from 'flowbite-react'
import Link from 'next/link'
import React from 'react'

const SignUp = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className="m-2 p-5 bg-white md:w-[400px] rounded-lg">
    <div>
        <div className="mb-2 block">
          <Label htmlFor="name">Name</Label>
        </div>
        <TextInput id="name" type="name" required />
      </div>
    <div>
        <div className="mb-2 block">
          <Label htmlFor="email1">Email</Label>
        </div>
        <TextInput id="email1" type="email" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password2">Confirm Password</Label>
        </div>
        <TextInput id="password2" type="password" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1">Password</Label>
        </div>
        <TextInput id="password1" type="password" required />
      </div>
      <Link href={"/Home"}>
      <Button type="submit" className='bg-[#FF9F1C] hover:bg-[#FFBF69] pointer-cursor my-2'>Sign Up</Button>
      </Link>
      <div className="text-center flex justify-center gap-2">
        <p>Create User</p>
        <p> | </p>
        <Link href="/Login">
        <p className='underline text-blue-500'>Login</p>
        </Link>
      </div>
    </div>

</div>
  )
}

export default SignUp