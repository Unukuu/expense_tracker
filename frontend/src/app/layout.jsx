import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from "./context/user-context";
import { CategoryProvider } from "./context/category-context";
import { ChartProvider } from "./context/chartdata-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <UserProvider>
          <ChartProvider>
            <CategoryProvider>{children}</CategoryProvider>
          </ChartProvider>
        </UserProvider>

        <ToastContainer />
      </body>
    </html>
  );
}
