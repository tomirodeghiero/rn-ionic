"use client";

import Image from "next/image";
import { Smartphone, Building2 } from "lucide-react";

export default function HeaderHero() {
  return (
    <header className="text-center mb-0 relative min-h-screen justify-center items-center flex-col bg-red">
      <div className="flex justify-center">
        <img
          src={"/Logocolor.png"}
          className="w-60 mb-8 flex justify-center"
        ></img>
      </div>

      {/* Company badge */}
      <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-ink/10 shadow-md hover:shadow-lg transition-all">
        <span className="text-ink font-medium tracking-wide flex items-center gap-2">
          <Building2 className="w-4 h-4 text-ink/70" />
          Empresa Oliver
        </span>
      </div>

      {/* Main title */}
      <div className="relative mt-6">
        {/* Card container */}
        <div className="relative mx-auto max-w-4xl rounded-3xl border border-ink/10 px-6 py-8 md:px-10 md:py-10 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-brand grid place-items-center shadow-md rotate-3 md:hover:rotate-0 transition-transform">
                <Smartphone className="w-8 h-8 md:w-10 md:h-10 text-black" />
              </div>
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-ink text-xs font-extrabold grid place-items-center shadow">
                3.0
              </div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-ink">
            <span className="text-ink">IT Móvil</span>
            <span className="ml-3 md:ml-4 text-brand">3.0</span>
          </h1>

          <div className="mt-2">
            <div className="mx-auto mt-3 h-1 w-40 md:w-56 bg-gradient-to-r from-transparent via-brand to-transparent rounded-full" />
          </div>

          {/* Tech badges with official logos */}
          <div className="mt-6 flex items-center justify-center gap-4 md:gap-6">
            <div className="group flex items-center gap-3 border border-ink/10 px-4 py-2 rounded-2xl transition-all hover:shadow">
              <span className="text-ink font-semibold">React Native</span>
            </div>

            <span className="text-ink/50 text-xl md:text-2xl font-light">
              vs
            </span>

            <div className="group flex items-center gap-3 border border-ink/10 px-4 py-2 rounded-2xl transition-all hover:shadow">
              <span className="text-ink font-semibold">Ionic</span>
            </div>
          </div>
        </div>
      </div>

      <p className="flex items-center justify-center mt-5 gap-2 text-center text-gray-800 font-open-sans">
        Desarrollado por
        <span className="font-medium">💻 Tomás Rodeghiero.</span>
      </p>
    </header>
  );
}
