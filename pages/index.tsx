import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

// Works with both Webpack and Turbopack (direct file path import)
const ComponentDirectImport = dynamic(
  () => import("@module/first/src/SimpleComponent")
);

// Works with Webpack but causes hydration error with Turbopack (dynamic import with named export)
const ComponentNamedImportWithIssue = dynamic(() =>
  import("@module/first").then((module) => module.SimpleComponent)
);

export default function Home() {
  return (
    <>
      <Head>
        <title>Turbopack Hydration Error with Dynamic Imports</title>
        <meta
          name="description"
          content="This page reproduces a hydration error with Turbopack caused by dynamic imports with named exports."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.wrapper}>
        <main className={styles.main}>
          {/* This component works fine with both Webpack and Turbopack */}
          <ComponentDirectImport>
            This component uses a direct file path import and works with both
            Webpack and Turbopack.
          </ComponentDirectImport>

          {/* This component works with Webpack but causes hydration issues with Turbopack */}
          <ComponentNamedImportWithIssue>
            This component uses a dynamic import with a named export and works
            with Webpack but causes a hydration error with Turbopack.
          </ComponentNamedImportWithIssue>
        </main>
      </div>
    </>
  );
}
