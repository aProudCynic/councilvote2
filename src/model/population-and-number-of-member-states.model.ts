import { MemberState } from './country.model';

export class PopulationAndNumberOfMemberStates {
    population: number;
    numberOfMemberStates: number;
    
    constructor(population: number, numberOfMemberStates: number) {
        this.population = population;
        this.numberOfMemberStates = numberOfMemberStates;
    }

    substractMemberState(memberState: MemberState) {
        this.population -= memberState.population;
        this.numberOfMemberStates--;
    }
    
    addMemberState(memberState: MemberState) {
        this.population += memberState.population;
        this.numberOfMemberStates++;
    }
}
