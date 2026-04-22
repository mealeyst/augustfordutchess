/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                brand: {
                    navy: "#0f172a",
                    "navy-mid": "#1e293b",
                    steel: "#4F7FA1",
                    "steel-dark": "#3a6180",
                    "sky": "#8bcefe",
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
