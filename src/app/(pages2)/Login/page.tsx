import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
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
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
      </div>
      <Button type="submit">Submit</Button>
    </div>
</div>
  )
}

export default Login