import { Identifiable } from './Identifiable';

export interface IRepository<T extends Identifiable> {
    find: (id: Identifiable['id']) => T | undefined;
    findOneBy: (params: Partial<T>) => T | undefined;
    findBy: (params: Partial<T>) => T[];
    insert: (value: T) => void;
    update: (id: Identifiable['id'], newProps: Partial<T>) => void;
    remove: (id: Identifiable['id']) => void;
    removeBy: (props: Partial<T>) => void;
    removeAll: () => void;
}
