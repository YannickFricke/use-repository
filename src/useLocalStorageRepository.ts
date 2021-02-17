import { useLocalStorage } from '@yannickfricke/use-local-storage/dist/';

import { Identifiable } from './Identifiable';
import { IRepository } from './IRepository';
import { useRepository } from './useRepository';

export const useLocalStorageRepository = <T extends Identifiable>(
    tableName: string,
): IRepository<T> => {
    const [value, setValue] = useLocalStorage<T[]>(tableName, []);

    return useRepository(value, setValue);
};
