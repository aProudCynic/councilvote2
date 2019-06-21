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

  setAllVotesToYes(): void  {
    MemberState.memberStates.forEach(memberState => 
      this.votingService.castVote(memberState, Vote.YES)
    );
  }

}
