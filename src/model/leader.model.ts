import { PoliticalGroup } from './political-group.model';

export class MemberState {
    name: string;
    politicalGroup: PoliticalGroup;
    type: LeaderType;
}

export enum LeaderType {
    PRESIDENT = 'elnök',
    PRIME_MINISTER = 'miniszterelnök'
}
