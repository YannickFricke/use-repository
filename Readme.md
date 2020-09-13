# React repository hook <!-- omit in toc -->

![CI workflow status](https://img.shields.io/github/workflow/status/YannickFricke/use-repository/CI)
[![codecov](https://codecov.io/gh/YannickFricke/use-repository/branch/develop/graph/badge.svg)](https://codecov.io/gh/YannickFricke/use-repository)
![GitHub watchers](https://img.shields.io/github/watchers/YannickFricke/use-repository?style=social)

- [About the project](#about-the-project)
- [Installation](#installation)
  - [NPM](#npm)
  - [Yarn](#yarn)
- [TypeScript support](#typescript-support)
- [Usage examples](#usage-examples)
- [License](#license)

## About the project

This package provides repository functions for an array of objects.

## Installation

### NPM

```
npm i --save @yannickfricke/use-repository
```

### Yarn

```
yarn add @yannickfricke/use-repository
```

## TypeScript support

This package includes TypeScript definition files - so with every good IDE you can read those declaration files
and get auto complete for the API.

## Usage examples

```ts
// Import the hook
import { useRepository } from '@yannickfricke/use-repository/dist';
```

HINT:

TypeScript users can also use generics to define the type of the state!

Then it will be correctly type hinted.

## License

This package is published under the MIT license.
