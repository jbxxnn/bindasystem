"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Copy } from "lucide-react";

type DaySchedule = {
    day: string;
    isEnabled: boolean;
    start: string;
    end: string;
};

export default function AvailabilityAnimation() {
    const [schedule, setSchedule] = useState<DaySchedule[]>([
        { day: "Mon", isEnabled: false, start: "8:30 am", end: "5:00 pm" },
        { day: "Tue", isEnabled: true, start: "9:00 am", end: "6:30 pm" },
        { day: "Wed", isEnabled: false, start: "10:00 am", end: "7:00 pm" },
    ]);

    const toggleDay = (index: number) => {
        setSchedule((prev) =>
            prev.map((item, i) =>
                i === index ? { ...item, isEnabled: !item.isEnabled } : item
            )
        );
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setSchedule((prev) => {
                const dayIndex = prev.findIndex((day) => !day.isEnabled);
                if (dayIndex !== -1) {
                    return prev.map((item, i) => i === dayIndex ? { ...item, isEnabled: true } : item);
                } else {
                    // If all enabled, disable one by one or reset? Let's just toggle randomly or sequentially
                    // Let's do sequentially: Mon -> Tue -> Wed
                    return prev;
                }
            });
            // Actually, simpler logic: just toggle sequentially
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    // Effect for sequential toggling
    React.useEffect(() => {
        let currentIndex = 0;
        const interval = setInterval(() => {
            toggleDay(currentIndex);
            currentIndex = (currentIndex + 1) % 3;
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-sm border shadow-[10px_10px_0px_rgba(0,0,0,0.25)] p-6">
            <div className="flex flex-col gap-4">
                {schedule.map((item, index) => (
                    <div key={item.day} className="flex flex-col md:flex-row items-center gap-4">
                        {/* Toggle Switch */}
                        <div>
                            <div
                                className={`relative w-11 h-6 rounded-full cursor-pointer transition-colors duration-300 ${item.isEnabled ? "bg-[#111]" : "bg-gray-200"
                                    }`}
                                onClick={() => toggleDay(index)}
                            >
                                <motion.div
                                    className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-sm"
                                    animate={{ x: item.isEnabled ? 20 : 0 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                />
                            </div>
                        </div>

                        {/* Day Label */}
                        <div className="w-8 text-sm font-medium text-gray-400">
                            {item.day}
                        </div>

                        <div>
                            {/* Time Slots & Actions */}
                            <div className="flex-1 flex items-center gap-2">
                                <div className={`relative flex items-center gap-2 transition-opacity duration-300 ${item.isEnabled ? "opacity-100 pointer-events-auto" : "opacity-30 pointer-events-none select-none"}`}>
                                    <div className="px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white">
                                        {item.start}
                                    </div>
                                    <span className="text-gray-400 font-medium">-</span>
                                    <div className="px-3 py-1.5 rounded-md border border-gray-200 text-xs font-medium text-gray-600 bg-white">
                                        {item.end}
                                    </div>
                                </div>

                                <div className="ml-auto flex items-center gap-3 text-gray-400">
                                    <Plus size={16} className="cursor-pointer hover:text-gray-600 transition-colors" />
                                    <Copy size={14} className="cursor-pointer hover:text-gray-600 transition-colors" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
