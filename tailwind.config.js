/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

const hoveredParentPlugin = plugin(function ({ addVariant, e }) {
  addVariant("hovered-parent", ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:hover > .hovered-parent\\:${rule.selector.slice(1)}`;
    });
  });
});

const focusedWithinParentPlugin = plugin(function ({ addVariant, e }) {
    addVariant("focused-within-parent", ({ container }) => {
      container.walkRules((rule) => {
        rule.selector = `:focus-within > .focused-within-parent\\:${rule.selector.slice(1)}`;
      });
    });
});
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    // ...
    hoveredParentPlugin,
    focusedWithinParentPlugin,
  ],
}

