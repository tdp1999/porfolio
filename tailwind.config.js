/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "theme-black-88": "#1F1F1F",
                "theme-black-80": "#333333",
                "theme-white-80": "#CCCCCC",
                // "theme-white-80": "#F1F1F1",
                "theme-white-90": "#F7F7F7",
                "theme-white": "#FFFFFF",
                "theme-primary": "#5A96E3",
                "theme-accent": "#FF9657",
                // "theme-primary": "#E65F78",
            },
        },
        transitionProperty: {
            selected:
                "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
            height: "height",
            width: "width",
            spacing: "margin, padding",
        },
    },
    plugins: [],
};
