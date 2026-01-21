"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type DropdownProps = {
    label: string;
    value: string;
    options: string[];
    isOpen: boolean;
    onToggle: () => void;
    onSelect: (val: string) => void;
};

const CustomDropdown = ({ label, value, options, isOpen, onToggle, onSelect }: DropdownProps) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <label className="text-sm font-medium text-black">{label}</label>
            <div className="relative">
                <div
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between cursor-pointer hover:border-gray-300 transition-colors"
                    onClick={onToggle}
                >
                    <span className="text-sm text-gray-800">{value}</span>
                    <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                    >
                        <ChevronDown size={16} className="text-gray-500" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-100 rounded-xl shadow-lg z-10 overflow-hidden"
                        >
                            {options.map((option) => (
                                <div
                                    key={option}
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors"
                                    onClick={() => onSelect(option)}
                                >
                                    {option}
                                </div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default function NoticeBufferAnimation() {
    const [minNoticeOpen, setMinNoticeOpen] = useState(false);
    const [minNoticeValue, setMinNoticeValue] = useState("3 hours");

    const [bufferBeforeOpen, setBufferBeforeOpen] = useState(false);
    const [bufferBeforeValue, setBufferBeforeValue] = useState("15 mins");

    useEffect(() => {
        let mounted = true;
        const sequence = async () => {
            if (!mounted) return;

            // Step 1: Open Min Notice
            setMinNoticeOpen(true);
            await new Promise(r => setTimeout(r, 1000));
            if (!mounted) return;

            // Step 2: Select new value
            setMinNoticeValue(prev => prev === "3 hours" ? "2 hours" : "3 hours");
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;
            setMinNoticeOpen(false);

            await new Promise(r => setTimeout(r, 1000));
            if (!mounted) return;

            // Step 3: Open Buffer Before
            setBufferBeforeOpen(true);
            await new Promise(r => setTimeout(r, 1000));
            if (!mounted) return;

            // Step 4: Select new value
            setBufferBeforeValue(prev => prev === "15 mins" ? "30 mins" : "15 mins");
            await new Promise(r => setTimeout(r, 500));
            if (!mounted) return;
            setBufferBeforeOpen(false);
        };

        const interval = setInterval(sequence, 6000);
        sequence(); // Start immediately

        return () => {
            mounted = false;
            clearInterval(interval);
        };
    }, []);

    return (
        <div className="w-full max-w-sm mx-auto bg-white rounded-sm p-6">
            <h3 className="text-xl font-bold text-black mb-6">Notice and buffers</h3>

            <div className="space-y-6">
                <CustomDropdown
                    label="Minimum notice"
                    value={minNoticeValue}
                    options={["1 hour", "2 hours", "3 hours", "4 hours", "24 hours"]}
                    isOpen={minNoticeOpen}
                    onToggle={() => setMinNoticeOpen(!minNoticeOpen)}
                    onSelect={(val) => { setMinNoticeValue(val); setMinNoticeOpen(false); }}
                />

                <div className="flex gap-4">
                    <CustomDropdown
                        label="Buffer before event"
                        value={bufferBeforeValue}
                        options={["None", "5 mins", "10 mins", "15 mins", "30 mins"]}
                        isOpen={bufferBeforeOpen}
                        onToggle={() => setBufferBeforeOpen(!bufferBeforeOpen)}
                        onSelect={(val) => { setBufferBeforeValue(val); setBufferBeforeOpen(false); }}
                    />
                    <CustomDropdown
                        label="Buffer after event"
                        value="15 mins"
                        options={["None", "5 mins", "10 mins", "15 mins", "30 mins"]}
                        isOpen={false}
                        onToggle={() => { }}
                        onSelect={() => { }}
                    />
                </div>

                <CustomDropdown
                    label="Time-slot intervals"
                    value="15 mins"
                    options={["15 mins", "30 mins", "45 mins", "60 mins"]}
                    isOpen={false}
                    onToggle={() => { }}
                    onSelect={() => { }}
                />
            </div>
        </div>
    );
}
