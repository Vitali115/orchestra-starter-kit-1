import { ThemeToggle } from '@/components/theme-toggle'

export function Navbar() {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-12 md:h-9 backdrop-blur-xl border-b flex items-center justify-between px-4 z-50 text-xs font-medium select-none"
      style={{ backgroundColor: 'var(--bar-bg)', borderColor: 'var(--bar-border)', color: 'var(--bar-text)' }}
    >
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ transform: 'rotate(168.54deg)' }}
        >
          <path d="M12 3c5.72 0 9 3.28 9 9s-3.28 9-9 9-9-3.28-9-9 3.28-9 9-9" />
        </svg>
        <span className="font-bold text-sm">Orchestra</span>
      </div>
      <ThemeToggle />
    </div>
  )
}
