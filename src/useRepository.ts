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
export const useRepository = <EntityType extends Identifiable>(
    values: EntityType[],
    setValues: (newValue: EntityType[]) => void,
    idField: string = 'id',
): IRepository<EntityType> => {
    return {
        /**
         * Returns all entries
         *
         * @returns {EntityType[]} All values from the data source
         */
        getAll: function () {
            return values;
        },

        /**
         * Returns the entry with the given id.
         * Undefined will be returned when no entry was found.
         *
         * @param id The unique identifier of the entry
         * @returns {EntityType|undefined} The found entry or undefined when no entry was found
         */
        find: function (id: Identifiable['id']) {
            return this.findOneBy(({
                [idField]: id,
            } as unknown) as Partial<EntityType>) as EntityType | undefined;
        },

        /**
         * Finds one entity with the given params
         *
         * @param params The properties which should match
         * @returns {EntityType|undefined} The found entry or undefined when no entry was found
         */
        findOneBy: function (params: Partial<EntityType>) {
            return find(values, params) as EntityType | undefined;
        },

        /**
         * Returns all entities who properties match the params
         *
         * @param params The params which should match
         * @returns {EntityType[]} The found entries
         */
        findBy: function (params: Partial<EntityType>) {
            return filter(values, params) as EntityType[];
        },

        /**
         * Inserts a new entity
         *
         * @param value The entity which should be added
         */
        insert: function (value: EntityType) {
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
        update: function (
            id: Identifiable['id'],
            newProps: Partial<EntityType>,
        ) {
            if (this.find(id) === undefined) {
                return;
            }

            const newValues = values.map((entry: any) =>
                entry[idField] !== id
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
            setValues(values.filter((entry: any) => entry[idField] !== id));
        },

        /**
         * Removes entries by the given props
         *
         * @param props The props which should be matched
         */
        removeBy: function (props: Partial<EntityType>) {
            setValues(reject(values, props) as EntityType[]);
        },

        /**
         * Removes all entries
         */
        removeAll: function () {
            setValues([]);
        },
    };
};
