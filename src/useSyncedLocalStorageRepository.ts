import { useSyncedLocalStorage } from '@yannickfricke/use-local-storage';

import { IRepository } from './IRepository';
import { IEntityType } from './types';
import { useRepository } from './useRepository';

export const useSyncedLocalStorageRepository = <T extends IEntityType>(
    tableName: string,
    idField: string = 'id',
): IRepository<T> => {
    const [value, setValue] = useSyncedLocalStorage<T[]>(tableName, []);

    return useRepository(value, setValue, idField);
};
