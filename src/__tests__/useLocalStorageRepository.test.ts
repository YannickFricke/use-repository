import { renderHook, RenderHookResult } from '@testing-library/react-hooks';

import { IRepository } from '../IRepository';
import { useLocalStorageRepository } from '../useLocalStorageRepository';
import { ITestEntry } from './ITestEntry';

describe('useLocalStorageRepository', () => {
    const testTableName = 'testing.jest';

    beforeEach(() => {
        window.localStorage.removeItem(testTableName);
    });

    it('should be defined', () => {
        expect(useLocalStorageRepository).toBeDefined();
    });

    it('should accept a table name', () => {
        const repository = getRepositoryFromRenderResult(
            renderHook(() =>
                useLocalStorageRepository<ITestEntry>(testTableName),
            ),
        );

        expect(repository).toBeDefined();
    });

    it('should provide common repository functions', () => {
        const repository = getRepositoryFromRenderResult(
            renderHook(() =>
                useLocalStorageRepository<ITestEntry>(testTableName),
            ),
        );

        expect(typeof repository.find).toBe('function');
        expect(typeof repository.findOneBy).toBe('function');
        expect(typeof repository.findBy).toBe('function');
        expect(typeof repository.insert).toBe('function');
        expect(typeof repository.update).toBe('function');
        expect(typeof repository.remove).toBe('function');
        expect(typeof repository.removeBy).toBe('function');
        expect(typeof repository.removeAll).toBe('function');
    });

    it('should create the local storage item when it not exists', () => {
        expect(window.localStorage.getItem(testTableName)).toBeNull();
        renderHook(() => useLocalStorageRepository<ITestEntry>(testTableName));
        expect(typeof window.localStorage.getItem(testTableName)).toBe(
            'string',
        );
    });

    describe('Finding entries', () => {
        it('should find an entry by its ID', () => {
            window.localStorage.setItem(
                testTableName,
                JSON.stringify([{ id: 1 }]),
            );

            const repository = getRepositoryFromRenderResult(
                renderHook(() =>
                    useLocalStorageRepository<ITestEntry>(testTableName),
                ),
            );
            const foundEntity = repository.find(1);

            expect(foundEntity).toBeDefined();
        });
    });
});

const getRepositoryFromRenderResult = (
    renderResult: RenderHookResult<unknown, IRepository<ITestEntry>>,
): IRepository<ITestEntry> => renderResult.result.current;
