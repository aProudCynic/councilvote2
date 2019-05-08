import { Vote } from './vote.model';
import { MemberState } from './country.model';
import { VotingResult } from './vote-result.model';

export class VotingRecord {
    votes: Map<MemberState, Vote> = new Map();
    name: string;

    constructor(name: string) {
        this.name = name;
        MemberState.memberStates.forEach(
            memberState => {
                return this.votes.set(memberState, Vote.DID_NOT_VOTE)
            }
        );
    }
}
