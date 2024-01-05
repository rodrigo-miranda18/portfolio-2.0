'use client';

function toggleTheme() {
  const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
  console.log(localStorage.theme, preferredTheme);
  const activeTheme = localStorage.theme || preferredTheme;
  const isLightTheme = activeTheme === 'light';

  document.documentElement.classList.toggle('dark', isLightTheme);
  localStorage.theme = isLightTheme ? 'dark' : 'light';
}

export default function ThemeToggle() {
  return (
    <button
      aria-label="Toggle dark mode"
      className="group rounded-md bg-zinc-300 px-3 py-3 transition hover:opacity-85 dark:bg-zinc-800"
      onClick={toggleTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
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
