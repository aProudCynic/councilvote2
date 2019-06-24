import { PoliticalGroup } from './political-group.model';

export class Leader {
    name: string;
    politicalGroup: PoliticalGroup;
    type: LeaderType;

    constructor(name: string, politicalGroup: PoliticalGroup, type: LeaderType) {
        this.name = name;
        this.politicalGroup = politicalGroup;
        this.type = type;
    }
}

export enum LeaderType {
    HEAD_OF_STATE = 'államfő',
    HEAD_OF_GOVERNMENT = 'kormányfő'
}
