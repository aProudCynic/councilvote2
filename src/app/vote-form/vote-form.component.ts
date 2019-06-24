import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { VotingRecord } from 'src/model/voting-record.model';
import { Vote } from 'src/model/vote.model';
import { MemberState } from 'src/model/country.model';
import { PoliticalGroup } from 'src/model/political-group.model';

@Component({
  selector: 'app-vote-form',
  templateUrl: './vote-form.component.html',
  styleUrls: ['./vote-form.component.css']
})
export class VoteFormComponent implements OnInit {
  votingService: VotingService;
  votingRecord: VotingRecord;
  voteValues = Object.values(Vote);

  constructor(votingService: VotingService) {
    this.votingService = votingService;
    this.votingRecord = this.votingService.votingRecord;
    console.log(this.votingRecord.votes);
   }

  ngOnInit() {
  }

  log(countryVote) {
    console.log(countryVote);
  }

  castVote(memberState: MemberState, vote: Vote) {
    this.votingService.castVote(memberState, vote);
  }

  getPopulationPercentOfAll(memberState: MemberState): number {
    return memberState.population / this.votingService.totalMemberStateNumberAndPopulation.population * 100;
  }

  getBackgroundColorFor(politicalGroup: PoliticalGroup) {
    switch(politicalGroup) {
      case PoliticalGroup.EPP:
        return 'blue';
      case PoliticalGroup.SD:
        return 'red';
      case PoliticalGroup.RENEW_EUROPE:
        return 'yellow';
      case PoliticalGroup.ECR:
          return 'darkblue';
      case PoliticalGroup.GUE_NGL:
        return 'darkred';
      default:
        return '#FFFFFF';
    }
  }

}
