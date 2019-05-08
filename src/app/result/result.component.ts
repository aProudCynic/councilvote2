import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting.service';

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

  onFaszfej() {
    this.votingService.getResult();
  }

}
