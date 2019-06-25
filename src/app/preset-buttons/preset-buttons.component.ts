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

  private static readonly VOTE_KEY_YES = 'YES';
  private static readonly VOTE_KEY_NO = 'NO';
  private static readonly VOTE_KEY_ABSTAINED = 'ABSTAINED';
  private static readonly VOTE_KEY_DID_NOT_VOTE = 'DID_NOT_VOTE';

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
    if (this.selectedPoliticalGroupKey != null) {
      MemberState.memberStates.forEach(memberState => 
        {
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
      case PresetButtonsComponent.VOTE_KEY_YES: {
        return Vote.YES;
      }
      case PresetButtonsComponent.VOTE_KEY_NO: {
        return Vote.NO;
      }
      case PresetButtonsComponent.VOTE_KEY_ABSTAINED: {
        return Vote.ABSTAINED;
      }
      case PresetButtonsComponent.VOTE_KEY_DID_NOT_VOTE: {
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

  getButtonClass(voteKey: string): string {
    let changingClassPart: string;
    switch (voteKey) {
      case PresetButtonsComponent.VOTE_KEY_YES: {
        changingClassPart = 'success';
        break;
      }
      case PresetButtonsComponent.VOTE_KEY_NO: {
        changingClassPart = 'danger';
        break;
      }
      case PresetButtonsComponent.VOTE_KEY_ABSTAINED: {
        changingClassPart = 'warning';
        break;
      }
      case PresetButtonsComponent.VOTE_KEY_DID_NOT_VOTE: {
        changingClassPart = 'secondary';
        break;
      }
      default: {
        throw new Error('Invalid vote type!');
      }
    }
    return `btn btn-${changingClassPart} btn-sm`;
  }

}
