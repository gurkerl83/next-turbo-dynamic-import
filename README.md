# Next.js Project - Reproducing Turbopack Hydration Error with Dynamic Imports

This project demonstrates a **hydration error** when using **Turbopack** with dynamically imported named exports in components.

## Getting Started

First, install the dependencies using **pnpm**:

```bash
pnpm install
```

Running the Development Server
To run the project using the default Webpack configuration:

```bash
pnpm dev
```

Running with Turbopack
To run the project using Turbopack, use the following command:

```bash
pnpm dev:turbo
```

This uses the faster Turbopack build system, but you'll observe issues with hydration when using dynamic imports with named exports.

## Observation

### Using Webpack (pnpm dev):

- The application works correctly.
- Both dynamically imported components render as expected, including the one with the indirect named export.

### Using Turbopack (pnpm dev:turbo):

- The component using the indirect named export (module.SimpleComponent) causes an unexpected hydration error.
- This error is not expected behavior and may indicate a limitation or bug in how Turbopack handles named exports in dynamic imports.
- Specifically, using .then() to access a named export in a dynamic import seems to lead to issues with hydration, resulting in a mismatch between the server-rendered HTML and the client-side React tree.

## Accessing the App

Once the development server is running (using either Webpack or Turbopack), open your browser and visit:

http://localhost:3000
