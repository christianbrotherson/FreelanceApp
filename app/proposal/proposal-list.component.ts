import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'ABC Company', 'http://christianbrotherson.com', 'Ruby on Rails', 150, 120, 15, 'christian.brotherson@gmail.com')
  proposalTwo: Proposal = new Proposal(99, 'XYZ Company', 'http://christianbrotherson.com', 'Ruby on Rails', 150, 120, 15, 'christian.brotherson@gmail.com')
  proposalThree: Proposal = new Proposal(200, 'Something Company', 'http://christianbrotherson.com', 'Ruby on Rails', 150, 120, 15, 'christian.brotherson@gmail.com')

  proposals: Proposal[] = [
    this.proposalOne, 
    this.proposalTwo, 
    this.proposalThree
  ]
}