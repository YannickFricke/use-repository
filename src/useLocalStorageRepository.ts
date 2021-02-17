import { useLocalStorage } from '@yannickfricke/use-local-storage/dist/';

import { IRepository } from './IRepository';
import { useRepository } from './useRepository';

export const useLocalStorageRepository = <T extends Record<any, any>>(
    tableName: string,
): IRepository<T> => {
    const [value, setValue] = useLocalStorage<T[]>(tableName, []);

    return useRepository(value, setValue);
};
