"use client"
import { FaDiscord } from 'react-icons/fa';
import { useState } from 'react';

import { DISCORD_USER } from "@/constants";

export default function DiscordCopyButton() {
    const [showToast, setShowToast] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(DISCORD_USER);
            setShowToast(true);
            setTimeout(() => setShowToast(false), 5000);
        } catch (err) {
            console.error("Error al copiar:", err);
        }
    };

    return (
        <div className="relative inline-block">
            {/* Botón con icono */}
            <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 text-white hover:text-orange-500 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
                title="Copiar username de Discord"
            >
                <FaDiscord className="h-5 w-5" />
            </button>

            {/* Toast flotante */}
            {showToast && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 px-4 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-xl whitespace-nowrap animate-bounce">
                    <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Discord Username copied!
                    </span>
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-8 border-transparent border-b-gray-900"></div>
                </div>
            )}
        </div>
    );
}