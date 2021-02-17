# React repository hook <!-- omit in toc -->

![CI workflow status](https://img.shields.io/github/workflow/status/YannickFricke/use-repository/CI)
[![codecov](https://codecov.io/gh/YannickFricke/use-repository/branch/develop/graph/badge.svg)](https://codecov.io/gh/YannickFricke/use-repository)
![GitHub watchers](https://img.shields.io/github/watchers/YannickFricke/use-repository?style=social)

- [About the project](#about-the-project)
- [Installation](#installation)
  - [NPM](#npm)
  - [Yarn](#yarn)
- [TypeScript support](#typescript-support)
  - [Identifiable objects](#identifiable-objects)
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

### Identifiable objects

The identifiable interface defines the `id` property.
The `id` must have the type of string or number.

## Usage examples

```ts
import { useState } from 'react';

// Import the hook
// The "useRepository" provides basic repository functions for an array of entities
import {
    useRepository,
    useLocalStorageRepository,
} from '@yannickfricke/use-repository/dist';

// Define the values for the repository
const [entities, setEntities] = useState([]);

// Initialize the repository
// The first argument is an array of identifiables
// The second argument is an function which will update the data source with the new values
const repository = useRepository(entities, setEntities);

// Returns all entities
const allEntries = repository.getAll();

// Find an entry by its id
const foundEntryById = repository.find('idToSearch');

// Find a single entity with the given props
const foundEntryByProps = repository.findOneBy({
    id: 1,
});

// Find multiple entities by their matching props
const findEntriesByProps = repository.findBy({
    name: 'My name',
});

// Insert a new entry
// NOTE: The "useRepository" makes no assumptions about your data structures,
// so thats why you have to assign ids on yourself
repository.insert({
    name: 'testing useRepository hook',
});

// Update the entity with the given id
repository.update('idToUpdate', {
    name: 'My cool new name!',
});

// Removes the entity with the given ID from data source
repository.remove('idToRemove');

// Remove all entries with the name "Delete me"
repository.removeBy({
    name: 'Delete me',
});

// Remove all entities from the data source
repository.removeAll();

// Initialize the repository with the given table name
// NOTE: The "useLocalStorageRepository" hook returns the same API as the "useRepository" hook.
// The only difference is that the "useLocalStorageRepository"
// will use the local storage of a browser as data source.
const users = useLocalStorageRepository<User>('users');
```

HINT:

TypeScript users can also use generics to define the type of the entities!

Then it will be correctly type hinted.

## License

This package is published under the MIT license.
