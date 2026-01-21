"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CalendarOverlayAnimation() {
    const [showOverlay, setShowOverlay] = useState(false);
    const [timeFormat, setTimeFormat] = useState<"12h" | "24h">("12h");

    const days = ["Wed 06", "Thu 07", "Fri 08", "Sat 09", "Sun 10"];

    React.useEffect(() => {
        const interval = setInterval(() => {
            setShowOverlay((prev) => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-lg mx-auto bg-white rounded-sm border shadow-[10px_10px_0px_rgba(0,0,0,0.25)] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between gap-6 px-6 py-4 border-b border-gray-100">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => setShowOverlay(!showOverlay)}>
                    {/* Toggle Switch */}
                    <div className={`relative w-12 h-7 rounded-full transition-colors duration-300 ${showOverlay ? "bg-[#111]" : "bg-gray-200"}`}>
                        <motion.div
                            className="absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-sm"
                            animate={{ x: showOverlay ? 20 : 0 }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    </div>
                    {/* <span className="text-sm font-medium text-black">Overlay my calendar</span> */}
                </div>

                {/* 12h/24h Switch */}
                <div className="bg-gray-100 p-1 rounded-lg flex text-xs font-medium">
                    <button
                        className={`px-3 py-1 rounded-md transition-all ${timeFormat === "12h" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700"}`}
                        onClick={() => setTimeFormat("12h")}
                    >
                        12h
                    </button>
                    <button
                        className={`px-3 py-1 rounded-md transition-all ${timeFormat === "24h" ? "bg-white shadow-sm text-black" : "text-gray-500 hover:text-gray-700"}`}
                        onClick={() => setTimeFormat("24h")}
                    >
                        24h
                    </button>
                </div>
            </div>

            {/* Grid */}
            <div className="w-full">
                {/* Days Header */}
                <div className="grid grid-cols-5 border-b border-gray-100">
                    {days.map((day) => (
                        <div key={day} className="py-3 text-center text-sm font-medium text-gray-400">
                            {day}
                        </div>
                    ))}
                </div>

                {/* Calendar Body */}
                <div className="grid grid-cols-5 relative h-64 bg-white">
                    {/* Vertical Grid Lines (Columns) */}
                    {[0, 1, 2, 3, 4].map((col) => (
                        <div key={col} className={`border-r border-gray-100 h-full ${col === 4 ? "border-r-0" : ""}`}>
                            {/* Horizontal Lines for time slots */}
                            <div className="h-16 border-b border-gray-50 w-full"></div>
                            <div className="h-16 border-b border-gray-50 w-full"></div>
                            <div className="h-16 border-b border-gray-50 w-full"></div>
                            <div className="h-16 w-full"></div>
                        </div>
                    ))}

                    {/* Event: Coffee (Thu) */}
                    <AnimatePresence>
                        {showOverlay && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-8 left-[20%] w-[20%] px-1 z-10"
                            >
                                <div className="bg-purple-100 border-l-2 border-purple-300 rounded-r-md p-2 text-xs">
                                    <div className="font-semibold text-purple-700">Coffee</div>
                                    <div className="text-purple-500 text-[10px]">11 AM - 12 PM</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Event: Lunch Date (Wed) */}
                    <AnimatePresence>
                        {showOverlay && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2, delay: 0.05 }}
                                className="absolute top-24 left-0 w-[20%] px-1 z-10"
                            >
                                <div className="bg-purple-100 border-l-2 border-purple-300 rounded-r-md p-2 text-xs">
                                    <div className="font-semibold text-purple-700">Lunch date</div>
                                    <div className="text-purple-500 text-[10px]">12 PM - 1 PM</div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Static Event (Design) - Cut off at bottom */}
                    <div className="absolute top-48 left-[20%] w-[20%] px-1 opacity-50">
                        <div className="bg-gray-100 border-l-2 border-gray-300 rounded-r-md p-2 text-xs h-full">
                            <div className="font-semibold text-gray-500">Design</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
