import { ResultComponent } from 'src/app/result/result.component';
import { Vote } from './vote.model';
import { PopulationAndNumberOfMemberStates } from './population-and-number-of-member-states.model';

export class VotingResult {
    result: Map<Vote, PopulationAndNumberOfMemberStates>;
}
