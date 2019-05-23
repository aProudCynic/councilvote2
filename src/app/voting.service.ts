import { Injectable, EventEmitter } from '@angular/core';
import { VotingRecord } from 'src/model/voting-record.model';
import { Vote } from 'src/model/vote.model';
import { MemberState } from 'src/model/country.model';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  votingRecord: VotingRecord = new VotingRecord('test');
  voteCast: EventEmitter<any> = new EventEmitter();

  constructor() { }

  getResult() {
    this.votingRecord.votes.forEach(vote => {
      console.log(vote); 
    });
  }

  castVote(memberState: MemberState, vote: Vote) {
    this.votingRecord.votes.set(memberState, vote);
  }
}
