module.exports = {
  env: {
    browser: true,
    es2021: true,
    es6: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "airbnb",
    "prettier", // Ensures ESLint doesn't conflict with Prettier formatting rules
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off", // Disable prop types rule if using TypeScript
    "react/react-in-jsx-scope": "off", // Not needed in Next.js or new React versions
    "no-console": "warn",
    "no-unused-vars": "warn",
    "react/jsx-props-no-spreading": "off",
    "prettier/prettier": "error",
  },
};
