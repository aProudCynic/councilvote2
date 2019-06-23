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
    Object.keys(Vote).forEach(
      vote => this.resultsByVotes.set(
        Vote[vote], new PopulationAndNumberOfMemberStates(0, 0)
      )
    );
    MemberState.memberStates.forEach(memberState => 
      {
        this.totalMemberStateNumberAndPopulation.addMemberState(memberState);
      }
    );
    this.resultsByVotes.set(Vote.DID_NOT_VOTE, new PopulationAndNumberOfMemberStates(
      this.totalMemberStateNumberAndPopulation.population,
      this.totalMemberStateNumberAndPopulation.numberOfMemberStates
    ));
    console.log(this.resultsByVotes);
  }

  getResult() {
    this.votingRecord.votes.forEach(vote => {
      // onInit is not called for services, this is why initialization is done here
      console.log(vote);
    });
  }

  castVote(memberState: MemberState, newVote: Vote) {
    const previousVote: Vote = this.votingRecord.votes.get(memberState);
    this.votingRecord.votes.set(memberState, newVote);
    const voteResultToBeReduced: PopulationAndNumberOfMemberStates = this.resultsByVotes.get(previousVote);
    voteResultToBeReduced.substractMemberState(memberState);
    const voteResultToIncremented: PopulationAndNumberOfMemberStates = this.resultsByVotes.get(newVote);
    voteResultToIncremented.addMemberState(memberState);
    console.log(this.resultsByVotes);
  }

  castVoteForMultipleMemberStates(memberStates: MemberState[], newVote: Vote) {
    memberStates.forEach(memberState => this.castVote(memberState, newVote));
  }

  getVoteShareInPopulation(vote: Vote): number {
    let populationOfMemberStatesForCorrespondingVote = this.resultsByVotes.get(vote).population;
    if (populationOfMemberStatesForCorrespondingVote === 0)  {
      return 0;
    }
    return populationOfMemberStatesForCorrespondingVote
      / this.getDividendForPopulationPercentageCalculation(vote)
      * 100;
  }

  getDividendForPopulationPercentageCalculation(vote: Vote): number {
    let dividend = this.totalMemberStateNumberAndPopulation.population;
    if (vote !== Vote.DID_NOT_VOTE) {
      dividend -= this.resultsByVotes.get(Vote.DID_NOT_VOTE).population;
    }
    return dividend;
  }

  getVoteShareInNumberOfMemberStates(vote: Vote): number {
    const numberOfMemberStatesForCorrespondingVote = this.resultsByVotes.get(vote).numberOfMemberStates;
    if (numberOfMemberStatesForCorrespondingVote === 0)  {
      return 0;
    }
    return numberOfMemberStatesForCorrespondingVote
      / this.getDividendForMemberStateNumberPercentageCalculation(vote)
      * 100;
  }

  getDividendForMemberStateNumberPercentageCalculation(vote: Vote): number {
    let dividend = this.totalMemberStateNumberAndPopulation.numberOfMemberStates;
    if (vote !== Vote.DID_NOT_VOTE) {
      dividend -= this.resultsByVotes.get(Vote.DID_NOT_VOTE).numberOfMemberStates;
    }
    return dividend;
  }

  isPassed(): boolean {
    return this.getVoteShareInPopulation(Vote.YES) >= 65
    && this.getVoteShareInNumberOfMemberStates(Vote.YES) >= 55;
  }
}
