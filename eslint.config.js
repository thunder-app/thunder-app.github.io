import js from "@eslint/js"
import typescript from "@typescript-eslint/eslint-plugin"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"

export default [
  { ignores: ["dist/"] },
  js.configs.recommended,
  ...typescript.configs["flat/recommended"],
  {
    files: ["src/**/*.{ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    },
  },
  {
    files: ["vite.config.ts"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    files: [
      "src/components/custom/theme-provider.tsx",
      "src/components/ui/button.tsx",
      "src/components/ui/navigation-menu.tsx",
    ],
    rules: {
      "react-refresh/only-export-components": ["warn", {
        allowConstantExport: true,
        allowExportNames: ["useTheme", "buttonVariants", "navigationMenuTriggerStyle"],
      }],
    },
  },
]
