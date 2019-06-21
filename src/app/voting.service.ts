import { Injectable, EventEmitter, OnInit } from '@angular/core';
import { VotingRecord } from 'src/model/voting-record.model';
import { Vote } from 'src/model/vote.model';
import { MemberState } from 'src/model/country.model';
import { PopulationAndNumberOfMemberStates } from 'src/model/population-and-number-of-member-states.model';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  
  votingRecord: VotingRecord = new VotingRecord('test');
  voteCast: EventEmitter<any> = new EventEmitter();
  resultsByVotes: Map<Vote, PopulationAndNumberOfMemberStates> = new Map();
  totalMemberStateNumberAndPopulation: PopulationAndNumberOfMemberStates = 
    new PopulationAndNumberOfMemberStates(0, 0);

  constructor() {this.init(); }

  init(): void {
    console.log('Oh hi!');
    Object.keys(Vote).forEach(
      vote => this.resultsByVotes.set(
        Vote[vote], new PopulationAndNumberOfMemberStates(0, 0)
      )
    )
    MemberState.memberStates.forEach(memberState => 
      {
        this.totalMemberStateNumberAndPopulation.addMemberState(memberState);
      }
    )
    this.resultsByVotes.set(Vote.DID_NOT_VOTE, new PopulationAndNumberOfMemberStates(
      this.totalMemberStateNumberAndPopulation.population,
      this.totalMemberStateNumberAndPopulation.numberOfMemberStates
    ));
    console.log(this.resultsByVotes);
  }

  getResult() {
    this.votingRecord.votes.forEach(vote => {
      console.log(vote); 
    });
  }

  castVote(memberState: MemberState, newVote: Vote) {
    let previousVote: Vote = this.votingRecord.votes.get(memberState);
    this.votingRecord.votes.set(memberState, newVote);
    let voteResultToBeReduced: PopulationAndNumberOfMemberStates = this.resultsByVotes.get(previousVote);
    voteResultToBeReduced.substractMemberState(memberState);
    let voteResultToIncremented: PopulationAndNumberOfMemberStates = this.resultsByVotes.get(newVote);
    voteResultToIncremented.addMemberState(memberState);
    console.log(this.resultsByVotes);
  }

  getVoteShareInPopulation(vote: Vote): number {
    let populationOfMemberStatesForCorrespondingVote = this.resultsByVotes.get(vote).population;
    if(populationOfMemberStatesForCorrespondingVote === 0)  {
      return 0;
    }
    return populationOfMemberStatesForCorrespondingVote
      / this.totalMemberStateNumberAndPopulation.population
      * 100;
  }

  getVoteShareInNumberOfMemberStates(vote: Vote): number {
    let numberOfMemberStatesForCorrespondingVote = this.resultsByVotes.get(vote).numberOfMemberStates;
    if(numberOfMemberStatesForCorrespondingVote === 0)  {
      return 0;
    }
    return numberOfMemberStatesForCorrespondingVote
      / this.totalMemberStateNumberAndPopulation.numberOfMemberStates
      * 100;
  }
}
