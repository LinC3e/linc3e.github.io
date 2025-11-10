import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "LinC3e",
    description: " Hey! I'm LinC3e, a Full Stack web developer. Here are some projects where you can see!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href={`avatar.png`} />
            </head>
            <body className={inter.className}>{children}</body>
        </html>
    );
}
