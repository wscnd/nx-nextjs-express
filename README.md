# NxPokemon

This project was generated using [Nx](https://nx.dev).

## Commands to remember

Run `yarn create nx-workspace --package-manager=yarn` for yarn or `npx create nx-workspace` for npm to start a new project.

Run `nx run api:serve` or `nx serve api` to start express server.

Run `nx list` to list plugins that are available for nx.

- found `@nrlw/next`
- ran `nx list @nrlw/next` and it followed the advices that promped.
- ran `npx nx g @nrwl/next:app` to start the app.

Run `nx g @nrwl/node:lib shared-types` to create a node library called _shared-types_.

Run `nx serve next-pokemon` to start nextjs development mode.

Run `nx run-many --target=serve --projects=next-pokemon,api --parallel=true` to run both apps.

Run `nx e2e next-pokemon-e2e` to run cypress tests.

- integration with WSL2 is weird so had to **unset DISPLAY** before running it.
