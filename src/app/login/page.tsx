"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    if (!password) {
      setError("Password is required");
      setLoading(false);
      return;
    }

    try {
      // Simulate API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Login Success:", { email });
      router.push("/");
    } catch (err: any) {
      setError("Invalid email or password. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center py-4 px-8 relative overflow-hidden bg-[#FAF8F5] font-sans">
      {/* Background Image with blur and overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/login-bg-pasta.png"
          alt="CookBook Hearth Background"
          className="w-full h-full object-cover filter blur-[3px] brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-[#3C3224]/40 backdrop-blur-md" />
      </div>

      {/* Centered Popup Card Container */}
      <div className="relative z-10 w-full max-w-lg bg-white rounded-[32px] shadow-2xl p-6 sm:p-8 border border-[#F0EAE1] transform transition-all duration-300">
        
        {/* Close Button back to home */}
        <Link
          href="/"
          className="absolute top-6 right-6 p-2 rounded-full text-[#8E7E65] hover:text-[#9A621C] hover:bg-[#FAF8F5] transition-all duration-200 border border-transparent hover:border-[#F0EAE1]"
          aria-label="Back to home"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </Link>

        {/* Brand Emblem */}
        <div className="flex flex-col items-center mb-2 text-center">
          <img src="/icon/logo.png" alt="CookBook Hearth Logo" className="mb-2 w-20 h-20" /> 
          <span className="font-bold text-lg tracking-wider text-[#9A621C]">
            Modern Hearth
          </span>
        </div>

        {/* Form Header */}
        <div className="mb-6 text-center">
          <h3 className="text-2xl font-bold text-[#4E4435] tracking-tight">
            Log In
          </h3>
          <p className="text-xs text-[#8E7E65] mt-1 font-medium">
            Welcome back to your cozy kitchen
          </p>
        </div>

        {/* Social Logins */}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <button
            type="button"
            onClick={() => console.log("Google Login")}
            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#F0EAE1] rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#6B5C4E] text-xs font-semibold shadow-sm transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path
                fill="#EA4335"
                d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.114-5.136 4.114A5.772 5.772 0 0 1 8.2 12.74a5.772 5.772 0 0 1 5.79-5.774c1.55 0 2.902.585 3.918 1.54l3.1-3.1C19.124 3.655 16.792 2.7 13.99 2.7 8.307 2.7 3.7 7.306 3.7 12.99s4.607 10.29 10.29 10.29c5.683 0 9.878-3.996 9.878-10.05 0-.585-.054-1.125-.162-1.656v-.289H12.24Z"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            onClick={() => console.log("Apple Login")}
            className="flex items-center justify-center gap-2 py-2.5 px-4 border border-[#F0EAE1] rounded-2xl bg-white hover:bg-[#FAF8F5] text-[#6B5C4E] text-xs font-semibold shadow-sm transition-all duration-200 cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current text-black" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.51-.64.73-1.2 1.87-1.05 2.98 1.12.09 2.27-.58 3-1.43Z" />
            </svg>
            Apple
          </button>
        </div>

        <div className="relative flex py-3 items-center">
          <div className="flex-grow border-t border-[#F0EAE1]"></div>
          <span className="flex-shrink mx-3 text-[10px] font-bold text-[#9B8C78] tracking-widest uppercase">
            Or continue with email
          </span>
          <div className="flex-grow border-t border-[#F0EAE1]"></div>
        </div>

        {/* Form Fields */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {error && (
            <div className="bg-red-50 text-red-600 text-xs font-semibold px-4 py-3 rounded-2xl border border-red-100 flex items-center gap-2">
              <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              {error}
            </div>
          )}

          <div>
            <label className="block text-xs font-bold text-[#6B5C4E] tracking-wider mb-1.5 uppercase">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#FAF8F5] border border-[#F0EAE1] hover:border-[#D5CBB9] rounded-2xl px-4 py-3 text-sm text-[#4E4435] placeholder-[#9B8C78]/70 focus:bg-white focus:border-[#E07E1B] focus:ring-2 focus:ring-[#E07E1B]/10 outline-none transition-all duration-200"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-bold text-[#6B5C4E] tracking-wider uppercase">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs text-[#E07E1B] hover:text-[#C97116] font-bold hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#FAF8F5] border border-[#F0EAE1] hover:border-[#D5CBB9] rounded-2xl pl-4 pr-12 py-3 text-sm text-[#4E4435] placeholder-[#9B8C78]/70 focus:bg-white focus:border-[#E07E1B] focus:ring-2 focus:ring-[#E07E1B]/10 outline-none transition-all duration-200"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8E7E65] hover:text-[#E07E1B] transition-colors focus:outline-none"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="flex items-center mt-1">
            <input
              type="checkbox"
              id="keep-logged-in"
              className="h-4.5 w-4.5 accent-[#E07E1B] border-[#F0EAE1] rounded text-[#E07E1B] focus:ring-[#E07E1B] cursor-pointer"
            />
            <label htmlFor="keep-logged-in" className="ml-2.5 text-xs text-[#8E7E65] leading-snug cursor-pointer select-none">
              Keep me logged in
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 w-full bg-[#E07E1B] hover:bg-[#C97116] active:scale-[0.99] disabled:opacity-75 disabled:pointer-events-none text-white font-bold py-3.5 px-6 rounded-2xl transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                <span>Logging in...</span>
              </>
            ) : (
              <span>Log In</span>
            )}
          </button>
        </form>

        {/* Footer Toggle */}
        <div className="mt-6 text-center text-xs text-[#8E7E65]">
          New to Modern Hearth?{" "}
          <Link
            href="/register"
            className="text-[#E07E1B] hover:text-[#C97116] font-bold hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}
