import React from "react";
import Link from "next/link";
import { FaCat, FaDiscord, FaGithub, FaHackerNews, FaTimes, FaTwitter } from 'react-icons/fa';

import { DISCORD_USER } from "@/constants";
import DiscordCopyButton from "./toast";

export default function Home() {
    return (
        <main className="flex flex-col items-center justify-start px-4 py-12 relative">
            <div className="w-full max-w-sm flex flex-col gap-8">
                <div className="flex flex-col gap-2 items-center justify-center text-center relative">
                    <img
                        className="w-full rounded-xl object-center object-cover -mb-12"
                        src={'banner.jpg'}
                    />
                    <img
                        className="h-20 w-20 border-4 border-white dark:border-zinc-800 rounded-full"
                        src={'avatar.png'}
                    />
                    <h1 className="text-2xl font-bold mt-2">LinC3e</h1>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Hey! I'm LinC3e, a Full Stack web developer.
                        Here are some projects where you can see!
                    </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-xl font-bold">Projects</h2>
                    <LinkButton
                        href="https://discord.com/oauth2/authorize?client_id=1433960923818754160"
                        text="Yomu - Discord Bot"
                        icon={<FaDiscord className="h-5 w-5" />}
                    />
                    <LinkButton
                        href="https://yomu-lat.onrender.com"
                        text="Yomu - Anime News Portal"
                        icon={<FaHackerNews className="h-5 w-5" />}
                    />
                    <LinkButton
                        href="https://nekolist-nextjs.vercel.app/"
                        text="NekoList - Manhwa Tracking Service"
                        icon={<FaCat className="h-5 w-5" />}
                    />
                </div>
                <div className="flex flex-col gap-2 w-full">
                    <h2 className="text-xl font-bold">Donate</h2>
                    <LinkButton
                        href="https://ko-fi.com/linc3e"
                        text="Ko-fi - Buy me a coffee!"
                        icon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                viewBox="0 0 32 32"
                            >
                                <path
                                    fill="currentColor"
                                    d="M31.844 11.932c-1.032-5.448-6.48-6.125-6.48-6.125H.964C.156 5.807.057 6.87.057 6.87S-.052 16.637.03 22.637c.22 3.228 3.448 3.561 3.448 3.561s11.021-.031 15.953-.067c3.251-.568 3.579-3.423 3.541-4.98c5.808.323 9.896-3.776 8.871-9.219zm-14.751 4.683c-1.661 1.932-5.348 5.297-5.348 5.297s-.161.161-.417.031c-.099-.073-.14-.12-.14-.12c-.595-.588-4.491-4.063-5.381-5.271c-.943-1.287-1.385-3.599-.119-4.948c1.265-1.344 4.005-1.448 5.817.541c0 0 2.083-2.375 4.625-1.281c2.536 1.095 2.443 4.016.963 5.751zm8.23.636c-1.24.156-2.244.036-2.244.036V9.714h2.359s2.631.735 2.631 3.516c0 2.552-1.313 3.557-2.745 4.021z"
                                ></path>
                            </svg>
                        }
                    />
                </div>
                <div className="h-px w-full bg-gray-300 dark:bg-zinc-800"></div>
                <div className="flex flex-row items-center justify-center gap-4">
                    <IconButton
                        icon={<FaGithub className="h-5 w-5" />}
                        href="https://github.com/linc3e"
                    />
                    <DiscordCopyButton />
                    <IconButton
                        icon={<FaTwitter className="h-5 w-5" />}
                        href="https://x.com/linc3e_dev"
                    />
                </div>
            </div>
        </main>
    );
}

function LinkButton({ href, icon, text }) {
    return (
        <Link
            href={href}
            className="flex flex-row items-center gap-3 p-3 rounded-xl bg-white hover:bg-gray-100 text-gray-600 dark:bg-zinc-800 dark:hover:bg-zinc-900 dark:text-zinc-400"
            target="_blank"
        >
            <div className="shrink-0">
                {icon ? icon : <div className="h-5 w-5"></div>}
            </div>
            <div className="font-medium flex-1 text-sm leading-6 line-clamp-1">
                {text}
            </div>
        </Link>
    );
}

function IconButton({ icon, href }) {
    return (
        <Link
            className="hover:scale-105 transition-all hover:text-orange-500"
            href={href}
            target="_blank"
        >
            {icon}
        </Link>
    );
}
