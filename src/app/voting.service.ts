import { Injectable, Predicate } from '@angular/core';
import { VotingRecord } from 'src/model/voting-record.model';
import { VotingResult } from 'src/model/vote-result.model';
import { Vote } from 'src/model/vote.model';
import { MemberState } from 'src/model/country.model';
import { EventEmitter } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class VotingService {
  votingRecord: VotingRecord = new VotingRecord('test');
  voteCast: EventEmitter = new EventEmitter();

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
