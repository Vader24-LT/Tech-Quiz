const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",  // Replace with your frontend port if different
    setupNodeEvents(on, config) {
      // Set up any Node events (e.g., API mocking, etc.)
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "webpack",  // Adjust if you're using a different bundler (e.g., Vite)
    },
  },
});
