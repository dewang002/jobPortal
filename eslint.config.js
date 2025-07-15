export default [
 // Your other ESLint configs...

 {
   files: ["app/generated/prisma/**/*.js"],
   rules: {
     "@typescript-eslint/no-unused-expressions": "off",
     "@typescript-eslint/no-unused-vars": "off",
     "@typescript-eslint/no-require-imports": "off",
   },
 },
];
