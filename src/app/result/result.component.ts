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
    console.log(voteResultKey);
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
}
