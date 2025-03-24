# Infinity Electronics Workspace
## 🚀 Live Demo

A deployed version of this project is available at:

🔗 [https://infinity.wewebdo.com/](https://infinity.wewebdo.com/)

Feel free to explore the features (Home, Products, Cart, etc.) and experience the overall user journey.

> ⚠️ **Note:** The live demo is currently based on the latest refactored components using the Single Responsibility and DRY principles, which are implemented in the [`refactor/components/use-single-responsibility-and-dry`](https://github.com/hereisamin/infinity-electronics/tree/refactor/components/use-single-responsibility-and-dry) branch.

---

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer">
  <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"/>
</a>

Welcome to your new **Nx monorepo**! This repository houses the InfinityElectronics frontend apps, libraries, and tooling for a streamlined, scalable workflow.

## Getting Started

1. **Install pnpm (if you haven’t yet)**  
   We recommend using `pnpm` for faster, more consistent dependency installation.  
   ```bash
   npm install -g pnpm
   ```
   Or visit the [pnpm docs](https://pnpm.io/installation) for alternative install methods.

2. **Install dependencies**  
   In the root of your repository, run:
   ```bash
   pnpm install
   ```
   This will install all required packages for every project in this Nx workspace.

3. **Explore the workspace**  
   Check out the Nx docs specific to [Nuxt integrations](https://nx.dev/nx-api/nuxt?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects), or run:
   ```bash
   pnpx nx graph
   ```
   This visually explores the structure and dependencies of your projects.

---

## Running Your App

To start a local dev server for your main SPA (Nuxt 3) app:

```bash
pnpx nx serve spa
```

## Building for Production

```bash
pnpx nx build spa
```

## Other Project Tasks

List all available targets for the `spa` project:

```bash
pnpx nx show project spa
```

These tasks (build, serve, test, etc.) are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined within `project.json` / `package.json`.

[More about running Nx tasks &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

---

## Adding New Projects

You can add more applications or libraries using Nx generators. For example:

```bash
pnpx nx g @nx/nuxt:app demo
```
Creates a new Nuxt-based app named `demo`.

```bash
pnpx nx g @nx/vue:lib mylib
```
Generates a Vue library named `mylib`.

Use `pnpx nx list` to see all installed plugins, and `pnpx nx list <plugin-name>` for more details about a specific plugin. Alternatively, install [Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) to explore generators within your IDE.

[More about Nx plugins &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) | [Plugin registry &raquo;](https://nx.dev/plugin-registry?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

---

## Nx in CI

Learn how to set up Nx with your favorite CI provider:

- [Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And if you haven’t finished your CI setup, you can:

[Click here to finalize your Nx Cloud connection &raquo;](https://cloud.nx.app/connect/YJLXhRYNjI)

---

## Nx Console

[Nx Console](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) is an IDE extension for VSCode or JetBrains that:

- Runs tasks
- Generates code
- Provides IntelliSense for Nx commands

It’s highly recommended to install for a better developer experience.

---

## Useful Links

- **Nx + Nuxt**:  
  [Setup details &raquo;](https://nx.dev/nx-api/nuxt?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
  
- **Nx on CI**:  
  [Intro to Nx in CI &raquo;](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
  
- **Releasing Packages**:  
  [Using Nx release &raquo;](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
  
- **Nx Plugins**:  
  [What are Nx plugins? &raquo;](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

Join the Nx community:

- [Nx Discord](https://go.nx.dev/community)  
- [Follow Nx on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)  
- [YouTube Channel](https://www.youtube.com/@nxdevtools)  
- [Nx Blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
