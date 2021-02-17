import { IDType, IEntityType } from './types';

/**
 * Defines common repository functionalities
 *
 * @export
 * @interface IRepository
 * @template T The type of the entity which must extend the Identifiable interface
 */
export interface IRepository<T extends IEntityType> {
    /**
     * Returns all entities from the data source
     *
     * @memberof IRepository
     * @returns {T[]} All known entities
     */
    getAll: () => T[];

    /**
     * Finds an entry by the given id
     *
     * @memberof IRepository
     * @param id The id which should be matched
     * @returns {T|undefined} The found entry when it was found by the given id.
     *                          Or undefined when no entry was found.
     */
    find: (id: IDType) => T | undefined;

    /**
     * Finds an entry with the given params
     *
     * @memberof IRepository
     * @param {Partial<T>} params The properties which should be matched
     * @returns {T|undefined} The found entry when it was found by given params.
     *                          Or undefined when no entry was found.
     */
    findOneBy: (params: Partial<T>) => T | undefined;

    /**
     * Finds entries based of the params
     *
     * @memberof IRepository
     * @param {Partial<T>} params The properties which should be matched
     * @returns {T[]} The found entries
     */
    findBy: (params: Partial<T>) => T[];

    /**
     * Inserts a new entity to the data store
     *
     * @memberof IRepository
     * @param {T} value The entity to insert
     */
    insert: (value: T) => void;

    /**
     * Updates an entry with the given id
     *
     * @memberOf IRepository
     * @param {IDType} id The id of the entry which should be updated
     * @param {Partial<T>} newProps The new values
     */
    update: (id: IDType, newProps: Partial<T>) => void;

    /**
     * Removes the entity with the given id
     *
     * @memberOf IRepository
     * @param id The id of the entity
     */
    remove: (id: IDType) => void;

    /**
     * Removes the entities where the properties match
     *
     * @memberOf IRepository
     * @param {Partial<T>} newProps The new values
     */
    removeBy: (props: Partial<T>) => void;

    /**
     * Removes all entities from the data source
     *
     * @memberOf IRepository
     */
    removeAll: () => void;
}
