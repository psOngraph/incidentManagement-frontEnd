import React, { useState } from "react";

import { EyeIcon, EyeOffIcon, Bus } from "lucide-react";
import { Link } from "react-router-dom";
import InputBox from "../../components/InputBox";
import Button from "../../components/Button";

export default function SignIn() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left side - Bus Image */}
      <div className="hidden lg:block bg-[#003366]">
        <div className="h-full bg-[#FFD700]">
          {/* You can replace this with your actual bus image */}
          <div className="h-full bg-gradient-to-b from-[#FFD700] to-[#003366]" />
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="flex flex-col items-center justify-center px-6 py-12 lg:px-8">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <Bus className="h-8 w-8" />
            <h2 className="text-2xl font-bold">TryggRute</h2>
          </div>

          {/* Login Form */}
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Log in to continue
              </p>
            </div>

            <form className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Enter email address
                </label>
                <InputBox
                  id="email"
                  type="email"
                  placeholder="peter.paul@gmail.com"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Enter password
                  </label>
                </div>
                <div className="relative">
                  <InputBox
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="w-full pr-10"
                  />
                  <Button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="h-4 w-4" />
                    ) : (
                      <EyeIcon className="h-4 w-4" />
                    )}
                  </Button>
                </div>
                {/* <div className="flex justify-end">
                  <Link
                    href="/forgot-password"
                    className="text-sm text-yellow-600 hover:text-yellow-700"
                  >
                    Forgot password?
                  </Link>
                </div> */}
              </div>

              <Button className="w-full bg-[#FFD700] hover:bg-[#FFD700]/90 text-black">
                Login
              </Button>
            </form>

            {/* <div className="text-center text-sm">
              New here?{" "}
              <Link
                href="/signup"
                className="text-yellow-600 hover:text-yellow-700"
              >
                Create an account
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
