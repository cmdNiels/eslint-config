- Write concise, readable, functional code
- Follow DRY (Don't Repeat Yourself) principle
- Implement early returns for better readability
- Ignore all eslint related warnings as these will get fixed on save from the user

- Prefer interfaces over types for object shapes
- Reusable types should be stored in the correct place inside of @/types
- Avoid enums; use const objects/maps instead
- Use `satisfies` operator for type validation
- No explicit `any`; use `unknown` if necessary with proper narrowing
- Use the nullish coalescing operator (??) instead of logical OR (||)

- Remove unused imports automatically
- Enforce `@/` alias for imports from root
- Enforce one default export per file
- Enfore a single function per file

- Use descriptive names with auxiliary verbs (isLoading, hasError)
- Use lowercase with dashes for directories (components/onboarding)
- Use IPascalCase for types and interfaces and their file names
- Use camelCase for variables, functions, and methods
- Use UPPER_SNAKE_CASE for constants
- Always prefix interfaces with I (e.g. IConfig)
- Double quotes, no template literals for static strings
