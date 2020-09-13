import { useRepository } from '../useRepository';
import { ITestEntry } from './ITestEntry';

describe('useRepository', () => {
    let entries: ITestEntry[];
    const setEntries = (newEntries: ITestEntry[]) => {
        entries = newEntries;
    };

    beforeEach(() => {
        entries = [];
    });

    const testEntry: ITestEntry = {
        id: 1,
        name: 'test entry',
    };

    it('should be defined', () => {
        expect(useRepository).toBeDefined();
    });

    it('should return all entries', () => {
        entries.push(testEntry);

        const repository = useRepository(entries, setEntries);
        const savedEntries = repository.getAll();

        expect(savedEntries).toHaveLength(1);
    });

    describe('find', () => {
        it('should find a single entry', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);

            const result = repository.find(1);

            expect(result).toBeDefined();
            expect(result).toStrictEqual(testEntry);
        });

        it('should find a single entry by the given props', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);

            const result = repository.findOneBy({
                id: 1,
            });

            expect(result).toBeDefined();
            expect(result).toStrictEqual(testEntry);
        });

        it('should find multiple entries', () => {
            entries.push(testEntry);
            entries.push({
                id: 2,
                name: testEntry.name,
            });
            entries.push({
                id: 3,
                name: 'Finish tests',
            });

            const repository = useRepository(entries, setEntries);

            const result = repository.findBy({
                name: testEntry.name,
            });

            expect(result).toHaveLength(2);
            expect(result).toContainEqual(testEntry);
            expect(result).toContainEqual({
                id: 2,
                name: testEntry.name,
            });
        });
    });

    describe('insert new entries', () => {
        it('should not insert an entry twice', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);
            repository.insert(testEntry);

            expect(entries).toHaveLength(1);
        });

        it('should insert new entries', () => {
            const repository = useRepository(entries, setEntries);
            repository.insert(testEntry);

            expect(entries).toHaveLength(1);
        });
    });

    describe('update entries', () => {
        it('should update entries', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);

            repository.update(testEntry.id, {
                name: 'TDD with jest rocks!',
            });

            expect(entries).toHaveLength(1);
            expect(
                entries,
            ).toStrictEqual([
                {
                    id: testEntry.id,
                    name: 'TDD with jest rocks!',
                },
            ]);
        });

        it('should do nothing, when no entry with the given id was found', () => {
            entries.push({
                id: 2,
                name: 'TDD with jest rocks!',
            });

            const repository = useRepository(entries, setEntries);

            repository.update(1, {
                name: 'New name',
            });

            expect(entries).toHaveLength(1);
            expect(entries).toStrictEqual([
                {
                    id: 2,
                    name: 'TDD with jest rocks!',
                },
            ]);
        });

        it('should return the original value when the id not matches', () => {
            entries.push(testEntry);
            entries.push({
                id: 2,
                name: 'Testing jest',
            });

            const repository = useRepository(entries, setEntries);

            repository.update(testEntry.id, {
                name: 'TDD with jest rocks!',
            });

            expect(entries).toHaveLength(2);
            expect(
                entries,
            ).toStrictEqual([
                {
                    id: testEntry.id,
                    name: 'TDD with jest rocks!',
                },
                {
                    id: 2,
                    name: 'Testing jest',
                },
            ]);
        });
    });

    describe('remove entries', () => {
        it('should remove entry by id', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);
            repository.remove(testEntry.id);

            expect(entries).toHaveLength(0);
        });

        it('should remove entries by props', () => {
            entries.push(testEntry);
            entries.push(testEntry);
            entries.push({
                id: 2,
                name: 'Unit testing with jest',
            });

            const repository = useRepository(entries, setEntries);

            repository.removeBy({
                name: 'test entry',
            });

            expect(entries).toHaveLength(1);
        });

        it('should remove all entries', () => {
            entries.push(testEntry);

            const repository = useRepository(entries, setEntries);
            repository.removeAll();

            expect(entries).toHaveLength(0);
        });
    });
});
