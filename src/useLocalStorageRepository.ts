import { useLocalStorage } from '@yannickfricke/use-local-storage/dist/useLocalStorage';
import { Identifiable } from './Identifiable';
import { useRepository } from './useRepository';
import { IRepository } from './IRepository';

export const useLocalStorageRepository = <T extends Identifiable>(tableName: string): IRepository<T> => {
    const { value, setValue } = useLocalStorage<T[]>(tableName, []);

    return useRepository(value, setValue);
};
