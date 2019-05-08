import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';
import { VotingRecord } from 'src/model/voting-record.model';
import { Vote } from 'src/model/vote.model';
import { MemberState } from 'src/model/country.model';

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

}
