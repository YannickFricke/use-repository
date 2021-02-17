import concat from 'lodash/concat';
import filter from 'lodash/filter';
import find from 'lodash/find';
import reject from 'lodash/reject';

import { Identifiable } from './Identifiable';
import { IRepository } from './IRepository';

/**
 * A small function which provides repository functionalities for arrays.
 *
 * NOTE: The first function parameter must be the array.
 *       The second function parameter must be a callback, which accepts a new
 *       value and returns nothing (void).
 *
 * @param values The values of the data source
 * @param setValues The callback for updating the data source
 *
 * @example Use react local state as values for the repository
 *          const [values, setValues] = useState([]);
 *          const userRepository = useRepository(values, setValues);
 *          const users = userRepository.getAll();
 */
export const useRepository = <T extends Identifiable>(
    values: T[],
    setValues: (newValue: T[]) => void,
): IRepository<T> => {
    return {
        /**
         * Returns all entries
         *
         * @returns {T[]} All values from the data source
         */
        getAll: function () {
            return values;
        },

        /**
         * Returns the entry with the given id.
         * Undefined will be returned when no entry was found.
         *
         * @param id The unique identifier of the entry
         * @returns {T|undefined} The found entry or undefined when no entry was found
         */
        find: function (id: Identifiable['id']) {
            return this.findOneBy({
                id,
            } as Partial<T>) as T | undefined;
        },

        /**
         * Finds one entity with the given params
         *
         * @param params The properties which should match
         * @returns {T|undefined} The found entry or undefined when no entry was found
         */
        findOneBy: function (params: Partial<T>) {
            return find(values, params) as T | undefined;
        },

        /**
         * Returns all entities who properties match the params
         *
         * @param params The params which should match
         * @returns {T[]} The found entries
         */
        findBy: function (params: Partial<T>) {
            return filter(values, params) as T[];
        },

        /**
         * Inserts a new entity
         *
         * @param value The entity which should be added
         */
        insert: function (value: T) {
            if (this.find(value.id) !== undefined) {
                return;
            }

            const newValues = concat(values, value);
            setValues(newValues);
        },

        /**
         * Updates the entity with the given id and the given props
         *
         * @param id The unique identifier of the entity which should be updated
         * @param newProps The new properties for the entry
         */
        update: function (id: Identifiable['id'], newProps: Partial<T>) {
            if (this.find(id) === undefined) {
                return;
            }

            const newValues = values.map((entry) =>
                entry.id !== id
                    ? entry
                    : {
                          ...entry,
                          ...newProps,
                      },
            );
            setValues(newValues);
        },

        /**
         * Removes the entry with the given id from the values
         *
         * @param id The unique identifier of the entry
         */
        remove: function (id: Identifiable['id']) {
            setValues(values.filter((entry) => entry.id !== id));
        },

        /**
         * Removes entries by the given props
         *
         * @param props The props which should be matched
         */
        removeBy: function (props: Partial<T>) {
            setValues(reject(values, props) as T[]);
        },

        /**
         * Removes all entries
         */
        removeAll: function () {
            setValues([]);
        },
    };
};
