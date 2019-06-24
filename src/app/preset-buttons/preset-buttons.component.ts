import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { MemberState } from 'src/model/country.model';
import { Vote } from 'src/model/vote.model';
import { PoliticalGroup } from 'src/model/political-group.model';

@Component({
  selector: 'app-preset-buttons',
  templateUrl: './preset-buttons.component.html',
  styleUrls: ['./preset-buttons.component.css']
})
export class PresetButtonsComponent implements OnInit {

  selectedPoliticalGroupKey: string;

  constructor(private votingService: VotingService) { }

  ngOnInit() {
  }

  setAllVotesTo(voteKey: Vote): void {
    MemberState.memberStates.forEach(memberState => 
      this.votingService.castVote(memberState, this.getVoteFor(voteKey))
    );
  }

  setAllVotesForV4To(voteKey: Vote): void {
    this.votingService.castVoteForMultipleMemberStates([
      MemberState.HUNGARY,
      MemberState.POLAND,
      MemberState.CZECH_REPUBLIC,
      MemberState.SLOVAKIA
    ], this.getVoteFor(voteKey));
  }

  setAllVotesForPoliticalGroup(voteKey: Vote): void {
    console.log(this.selectedPoliticalGroupKey);
    if (this.selectedPoliticalGroupKey != null) {
      console.log(this.selectedPoliticalGroupKey);
      MemberState.memberStates.forEach(memberState => 
        {
          console.log(memberState.leader.politicalGroup, this.selectedPoliticalGroupKey);
          if (memberState.leader.politicalGroup === PoliticalGroup[this.selectedPoliticalGroupKey]) {
            this.votingService.castVote(memberState, this.getVoteFor(voteKey));
          }
        }
      )
    }
  }

  // Necessary due to TypeScript enum deficiencies compared to Java; consider moving to Vote enum.
  getVoteFor(voteKey: string): Vote {
    switch (voteKey) {
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

  getPoliticalGroups(): [string, any][] {
    return Object.entries(PoliticalGroup);
  }
}
