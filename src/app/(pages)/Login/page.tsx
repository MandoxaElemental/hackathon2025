import { Button, Checkbox, Label, TextInput } from 'flowbite-react'
import React from 'react'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
    <div className="m-2 p-5 bg-white md:w-[400px] rounded-lg">
    <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" className='dark:text-black'>Username or Password</Label>
        </div>
        <TextInput id="email1" type="email" required className='bg-white dark:bg-white' />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password1" className='dark:text-black'>Password</Label>
        </div>
        <TextInput id="password1" type="password" className='bg-white dark:bg-white' required />
      </div>
      <div className="flex items-center gap-2 mt-3">
        <Checkbox id="remember" className='bg-gray-50 dark:bg-gray-50' />
        <Label htmlFor="remember" className='dark:text-black'>Remember me</Label>
      </div>
      <Button type="submit" className='mt-5'>Submit</Button>
    </div>
</div>
  )
}

export default Login