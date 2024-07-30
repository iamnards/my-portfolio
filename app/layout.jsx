import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import RetroGrid from "./components/retro";
import { ThemeProvider } from "next-themes";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Nard Sarroca",
  description: "Bernard Sarroca's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jakarta.className}>
        <ThemeProvider attribute="class">
          <AppRouterCacheProvider>
            <RetroGrid className="z-1" />
            {children}
          </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
