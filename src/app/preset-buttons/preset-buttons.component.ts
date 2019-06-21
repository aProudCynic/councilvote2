import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { MemberState } from 'src/model/country.model';
import { Vote } from 'src/model/vote.model';

@Component({
  selector: 'app-preset-buttons',
  templateUrl: './preset-buttons.component.html',
  styleUrls: ['./preset-buttons.component.css']
})
export class PresetButtonsComponent implements OnInit {

  constructor(private votingService: VotingService) { }

  ngOnInit() {
  }

  setAllVotesTo(voteKey: Vote): void {
    MemberState.memberStates.forEach(memberState => 
      this.votingService.castVote(memberState, this.getVoteFor(voteKey))
    );
  }

  getVoteFor(voteKey: string): Vote {
    switch(voteKey) {
      case 'YES': {
        return Vote.YES;
      }
      case 'NO': {
        return Vote.NO;
      }
      case 'ABSTAINED': {
        return Vote.ABSTAINED;
      }
      case 'DID_NOT_VOTE': {
        return Vote.DID_NOT_VOTE;
      }
      default: {
        throw new Error('Invalid vote type!');
      }
    } 
  }

  getAllVoteTypes() {
    return Object.keys(Vote);
  }

  getVoteValueFor(key: string) {
    return Vote[key];
  }
}
