'use client';

function toggleTheme() {
  const isLightTheme = !document.documentElement.classList.contains('dark');

  document.documentElement.classList.toggle('dark', isLightTheme);
  document.cookie = `theme=${isLightTheme ? 'dark' : 'light'}`;
}

export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle dark mode"
      className="group rounded-md bg-zinc-300 px-3 py-3 transition hover:opacity-85 dark:bg-zinc-800"
      onClick={toggleTheme}
    >
      <svg
        fill="none"
        strokeWidth="1.5"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="stroke-stone-500 group-hover:stroke-stone-500/90 dark:hidden"
        width="24"
        height="24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className="hidden dark:block"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M19.5 20.65C18.03 21.5 16.32 22 14.5 22C8.98 22 4.5 17.52 4.5 12C4.5 6.48 8.98 2 14.5 2C16.32 2 18.03 2.5 19.5 3.35C16.51 5.08 14.5 8.3 14.5 12C14.5 15.7 16.51 18.92 19.5 20.65ZM6.5 12C6.5 16.41 10.09 20 14.5 20C14.84 20 15.18 19.98 15.51 19.93C13.6 17.77 12.5 14.95 12.5 12C12.5 9.05 13.6 6.23 15.51 4.07C15.18 4.02 14.84 4 14.5 4C10.09 4 6.5 7.59 6.5 12Z"
          className="fill-stone-500 group-hover:fill-zinc-500"
        />
      </svg>
    </button>
  );
}
