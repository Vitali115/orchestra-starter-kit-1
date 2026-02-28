import { Navbar } from '@/components/ui/navbar'

export default function ShowcasePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
      {/* Gradient overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          backgroundColor: 'var(--overlay-bg)',
          maskImage: 'linear-gradient(transparent 65%, black 100%)',
          WebkitMaskImage: 'linear-gradient(transparent 65%, black 100%)',
        }}
      />

      <Navbar />

      {/* Center content */}
      <div className="flex flex-col items-center gap-4 px-4 md:flex-row md:gap-5">
        {/* Icon */}
        <svg
          className="w-8 h-8 md:w-8 md:h-8 shrink-0"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor"
        >
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 6C5.55228 6 6 5.55228 6 5C6 4.44772 5.55228 4 5 4C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 10.5V9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 15V13.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M5 20C5.55228 20 6 19.5523 6 19C6 18.4477 5.55228 18 5 18C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M19 20C19.5523 20 20 19.5523 20 19C20 18.4477 19.5523 18 19 18C18.4477 18 18 18.4477 18 19C18 19.5523 18.4477 20 19 20Z" fill="currentColor" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10.5 19H9" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M15 19H13.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        {/* Title */}
        <h1 className="text-lg md:text-xl font-semibold">
          Starter kit
        </h1>

        {/* Divider — hidden on mobile, vertical on desktop */}
        <div className="hidden md:block w-px h-6 bg-border" />

        {/* Versions — stacked on mobile, inline on desktop */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[12px] md:text-[13px] text-muted">
          <span>Next.js 16.1.6</span>
          <span className="opacity-65">Tailwind CSS 4.2.1</span>
          <span className="opacity-35">Theme Switch</span>
        </div>
      </div>

    
    </div>
  )
}
