import { useEffect, useState } from "react"

type Theme = 'light' | 'dark';

const ThemeToggle = () => {
  const themeStorage = localStorage.getItem('theme') as Theme | null;
  const initialTheme: Theme = themeStorage || 'light'; 

  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    document.body.setAttribute('data-mode', theme);
    localStorage.setItem('theme' , theme);
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <>
    <div>
      <button onClick={toggleTheme} className={`theme-toggle theme-${theme} relative flex items-center justify-between rounded-3xl px-1 py-1 border-solid border border-white min-w-16`}>
        <span className="theme-toggle-icon icon--dark">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="_theme-toggle__dark_lpxmc_42"><path d="M10.502 16h-.226a5.818 5.818 0 0 1-4.124-1.829A6.07 6.07 0 0 1 4.5 9.9a6.062 6.062 0 0 1 1.79-4.213A5.81 5.81 0 0 1 10.474 4c.126 0 .251.034.36.1.11.066.2.16.26.274a.76.76 0 0 1 0 .749 4.64 4.64 0 0 0-.216 4.684 4.53 4.53 0 0 0 1.626 1.757 4.339 4.339 0 0 0 2.274.643c.127 0 .252.034.36.1.11.066.2.161.26.275a.722.722 0 0 1 0 .739 5.95 5.95 0 0 1-2.12 1.964 5.804 5.804 0 0 1-2.776.714ZM9.242 5.623A4.472 4.472 0 0 0 6.76 7.481a4.636 4.636 0 0 0 .678 5.863 4.417 4.417 0 0 0 2.84 1.216 4.47 4.47 0 0 0 3.12-1.085 5.777 5.777 0 0 1-1.608-.672A5.982 5.982 0 0 1 9.61 10.5a6.134 6.134 0 0 1-.696-3.13c.03-.595.14-1.183.33-1.747Z"></path></svg>
        </span>
        <span className="theme-toggle-icon icon--light">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" class="_theme-toggle__light_lpxmc_42"><path d="M12.716 7.982c.18.015.36-.04.502-.154l1.736-1.738a.715.715 0 0 0 0-.966.733.733 0 0 0-.964 0l-1.737 1.738a.715.715 0 0 0 0 .966c.131.105.295.16.463.154ZM6.87 10a.705.705 0 0 0-.705-.705H3.714a.714.714 0 0 0 0 1.43h2.45A.703.703 0 0 0 6.87 10ZM6.792 7.828a.714.714 0 0 0 1.237-.483c0-.18-.07-.353-.195-.483L6.097 5.124a.733.733 0 0 0-.965 0 .715.715 0 0 0 0 .966l1.66 1.738ZM10.005 6.862a.704.704 0 0 0 .723-.705V3.705a.705.705 0 1 0-1.408 0v2.452a.705.705 0 0 0 .685.705ZM13.218 12.22a.714.714 0 0 0-.965 0 .695.695 0 0 0 0 .966l1.737 1.738a.713.713 0 0 0 .964 0 .715.715 0 0 0 0-.965l-1.736-1.738Z"></path><path d="M10.005 7.297a2.7 2.7 0 0 0-2.704 3.2 2.704 2.704 0 0 0 3.678 2.005 2.702 2.702 0 0 0 .902-4.394 2.71 2.71 0 0 0-1.876-.811ZM11.298 10a1.294 1.294 0 0 1-2.207.915 1.294 1.294 0 0 1 .914-2.209A1.282 1.282 0 0 1 11.298 10ZM6.792 12.22 5.055 13.96a.705.705 0 0 0 .502 1.197c.184 0 .36-.074.492-.203l1.785-1.738A.715.715 0 0 0 7.6 12.08a.725.725 0 0 0-.81.142ZM16.296 9.295h-2.451a.704.704 0 0 0 0 1.41h2.45a.704.704 0 1 0 0-1.41ZM10.005 13.138a.704.704 0 0 0-.705.705v2.452a.705.705 0 1 0 1.41 0v-2.452a.705.705 0 0 0-.705-.705Z"></path></svg>
        </span>
        {/* Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode */}
      </button>
    </div>
    </>
  );
}



export default ThemeToggle;