import { useLocalStorage } from '@yannickfricke/use-local-storage/dist/';

import { IRepository } from './IRepository';
import { IEntityType } from './types';
import { useRepository } from './useRepository';

export const useLocalStorageRepository = <T extends IEntityType>(
    tableName: string,
): IRepository<T> => {
    const [value, setValue] = useLocalStorage<T[]>(tableName, []);

    return useRepository(value, setValue);
};
