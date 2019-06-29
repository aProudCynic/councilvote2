import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { Vote } from 'src/model/vote.model';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  votingService: VotingService;

  constructor(votingService: VotingService) {
    this.votingService = votingService;
  }

  ngOnInit() {
  }

  getProgressBarClass(voteResultKey: string): string {
    let voteSpecificClassPart: string;
    switch (voteResultKey) {
      case Vote.YES: {
        voteSpecificClassPart = ' progress-bar-success';
        break;
      }
      case Vote.NO: {
         voteSpecificClassPart = ' progress-bar-danger';
         break;
      }
      case Vote.ABSTAINED: {
         voteSpecificClassPart = ' progress-bar-warning';
         break;
      }
   }
    return 'progress-bar' + voteSpecificClassPart;
  }

  getPopulationThresholdPercent() {
    return VotingService.POPULATION_THRESHOLD_PERCENT;
  }

  getMemberStateThresholdPercent() {
    return VotingService.MEMBER_STATE_THRESHOLD_PERCENT;
  }

  getNumberOfMemberStatesThatHaventVoted() {
    return this.votingService.resultsByVotes.get(Vote.DID_NOT_VOTE).numberOfMemberStates;
  }

  allMemberStatesHaveVoted() {
    return this.getNumberOfMemberStatesThatHaventVoted() === 0;
  }

  getResult() {
    let result: string;
    if (!this.allMemberStatesHaveVoted()) {
      result = 'Még ' + this.getNumberOfMemberStatesThatHaventVoted() + ' tagállam nem szavazott';
    } else if (this.votingService.isPassed()) {
      result = 'Átment';
      if (this.votingService.isUnsuccessfulBlockingMinorty()) {
        result += ' (legalább '
          + VotingService.MINIMUM_NUMBER_OF_MEMBER_STATES_FOR_BLOCKING_MINORITY
          + ' tagállam kell a blokkoló kisebbséghez)';
      }
    } else {
      result = 'Nem ment át';
    }
    return result;
  }

  isNotDidNotVote(vote: Vote): boolean {
    return vote !== Vote.DID_NOT_VOTE;
  }

  getDidNotVoteResults() {
    return this.votingService.resultsByVotes.get(Vote.DID_NOT_VOTE);
  }

  getDidNotVote() {
    return Vote.DID_NOT_VOTE;
  }

  getWidthForMemberStateThreshold(): string {
    return this.getMemberStateThresholdPercent() + '%';
  }


  getWidthForPopulationThreshold(): string {
    return this.getPopulationThresholdPercent() + '%';
  }

  getBackgroundColorForResult(): string {
    console.log(this.allMemberStatesHaveVoted());
    if (!this.allMemberStatesHaveVoted()) {
      return 'grey';
    }
    if (this.votingService.isPassed()) {
      return 'green';
    }
    return 'red';
  }
}
