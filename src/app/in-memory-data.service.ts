import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            {id: 0, name: 'Zero'},
            { id: 11, name: 'Cú chulainn' },
            { id: 12, name: 'Medb' },
            { id: 13, name: 'Fergus Mac Roich' },
            { id: 14, name: 'Cú Roí' },
            { id: 15, name: 'Aed Ruad' },
            { id: 16, name: 'Lir' },
            { id: 17, name: 'Lugh' },
            { id: 18, name: 'Badb' },
            { id: 19, name: 'Macha' },
            { id: 20, name: 'An Morrigan' }
        ];

        return {heroes};
    }
}
