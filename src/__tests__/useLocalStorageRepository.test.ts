import { renderHook } from '@testing-library/react-hooks';
import { useLocalStorageRepository } from '../useLocalStorageRepository';
import { ITestEntry } from './ITestEntry';

describe('useLocalStorageRepository', () => {
    const testTableName = 'testing.jest';

    beforeEach(() => {
        window.localStorage.clear();
    });

    it('should be defined', () => {
        expect(useLocalStorageRepository).toBeDefined();
    });

    it('should accept a table name', () => {
        const { result: { current: repository } } = renderHook(() => useLocalStorageRepository<ITestEntry>(testTableName));

        expect(repository).toBeDefined();
    });

    it('should provide common repository functions', () => {
        const { result: { current: repository } } = renderHook(() => useLocalStorageRepository<ITestEntry>(testTableName));

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
        renderHook(() => useLocalStorageRepository<ITestEntry>(testTableName));
        expect(typeof window.localStorage.getItem(testTableName)).toBe('string');
    });
});
