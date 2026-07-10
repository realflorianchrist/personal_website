"use client";

import { useState } from "react";
import { FaPlay } from 'react-icons/fa';

export default function WelcomeOverlay() {
    const [visible, setVisible] = useState(true);

    if (!visible) return null;

    return (
        <div className="absolute left-4 top-4 z-100 w-90 rounded-2xl border-0.5 border-border bg-gray-500/20 p-4 backdrop-blur-sm">
            <h2 className="mb-2 text-lg font-semibold">
                👋 Hi, ich bin Florian.
            </h2>

            <p className="text-sm">
                Softwareentwicklung ist für mich mehr als nur Code.
            </p>

            <p className="mt-2 text-sm">
                Erkunde mein Zimmer und erfahre mehr über meine Projekte,
                Technologien und Erfahrungen.
            </p>

            <button
                onClick={() => setVisible(false)}
                className="flex mt-4 ml-auto items-center gap-4 rounded-lg border-0.5 border-border px-3 py-1.5 text-sm transition-colors hover:bg-white/10"
            >
                Los gehts
                <FaPlay />
            </button>
        </div>
    );
}