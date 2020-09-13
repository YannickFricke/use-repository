import { Identifiable } from './Identifiable';
import find from 'lodash/find';
import filter from 'lodash/filter';
import concat from 'lodash/concat';
import reject from 'lodash/reject';
import { IRepository } from './IRepository';

export const useRepository = <T extends Identifiable>(values: T[], setValues: (newValue: T[]) => void): IRepository<T> => {
    return {
        /**
         * Returns the entry with the given id.
         * Undefined will be returned when no entry was found.
         *
         * @param {string} id The unique identifier of the entry
         * @return {T | undefined} The found entry or undefined when no entry was found
         */
        find: function(id: Identifiable['id']) {
            return this.findOneBy({
                id,
            } as Partial<T>) as T | undefined;
        },

        /**
         * Finds one entity with the given params
         *
         * @param {Partial<T>} params The properties which should match
         * @return {T | undefined} The found entry or undefined when no entry was found
         */
        findOneBy: function(params: Partial<T>) {
            return find(values, params) as T | undefined;
        },

        /**
         * Returns all entities who properties match the params
         *
         * @param {Partial<T>} params The params which should match
         * @return {T[]} The found entries
         */
        findBy: function(params: Partial<T>) {
            return filter(values, params) as T[];
        },

        /**
         * Inserts a new entity
         *
         * @param {T} value The entity which should be added
         */
        insert: function(value: T) {
            if (this.find(value.id) !== undefined) {
                return;
            }

            const newValues = concat(
                values,
                value,
            );
            setValues(newValues);
        },

        /**
         * Updates the entity with the given id and the given props
         *
         * @param id The unique identifier of the entity which should be updated
         * @param newProps The new properties for the entry
         */
        update: function(id: Identifiable['id'], newProps: Partial<T>) {
            if (this.find(id) === undefined) {
                return;
            }

            const newValues = values.map(entry => entry.id !== id ? entry : {
                ...entry,
                ...newProps,
            });
            setValues(newValues);
        },

        /**
         * Removes the entry with the given id from the values
         *
         * @param id The unique identifier of the entry
         */
        remove: function(id: Identifiable['id']) {
            setValues(values.filter(entry => entry.id !== id));
        },

        /**
         * Removes entries by the given props
         *
         * @param props The props which should be matched
         */
        removeBy: function(props: Partial<T>) {
            setValues(reject(values, props) as T[]);
        },

        /**
         * Removes all entries
         */
        removeAll: function() {
            setValues([]);
        },
    };
};
