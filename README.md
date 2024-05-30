# Playground with Deno

This repository showcases a simple yet robust service API developed using Deno.

Deno is a secure runtime for JavaScript and TypeScript, designed to address some of the shortcomings of Node.js. For more information about Deno, visit:

- [Deno Official Website](https://deno.land/)
- [Deno Examples Repository](https://examples.deno.land/)

The service facilitates interactions with a sample API. Refer to the following for the API specification: [Open Library API Search](https://openlibrary.org/dev/docs/api/search).

## Getting Started

To begin, you'll need to install Deno. You can do this by running the following command:

```bash
irm https://deno.land/install.ps1 | iex
```

Once Deno is installed, navigate your terminal to the `src` folder of this project and execute the following command:

```bash
deno run --allow-net server.ts
```

This will launch the server, permitting necessary network access.

## Additional Information

### Configuration

Create a `deno.json` file in the project's root directory to customize settings.

For official documentation, see:

[Deno Configuration File](https://deno.land/manual/getting_started/configuration_file)

### Routing

Deno's default routing is straightforward. For an example, visit:

[Deno HTTP Server Routing](https://deno.land/examples/http-server-routing)

This project introduces a basic structure to segregate business logic:
- `routing.ts` manages URI matching and invokes corresponding functions, handling incorrect URIs and exceptions.
- Each endpoint triggers a function located in the `api` directory.

### To-Do List

- JSON handling:
  [Parsing and Serializing JSON](https://deno.land/examples/parsing-serializing-json)

- Environment variables:
  [Environment Variables Basics](https://deno.land/manual/runtime/basics/env_variables)
  [Using Environment Variables](https://deno.land/examples/environment-variables)

- Cron jobs:
  [Scheduling Cron Jobs with Deno](https://deno.land/blog/cron#using-deno-crons)

### Visual Studio Code Integration

For those utilizing Visual Studio Code, enhance your experience by installing the Deno extension:

- [Deno Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=denoland.vscode-deno)
