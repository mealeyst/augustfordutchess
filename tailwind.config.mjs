/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: "#0f172a",
                    "navy-mid": "#1e293b",
                    cranberry: "#9b1b30",
                    gold: "#d4af37",
                    light: "#f2f5f9",
                },
            },
            fontFamily: {
                display: ["Outfit", "sans-serif"],
                body: ["Lora", "serif"],
            },
        },
    },
    plugins: [],
};
