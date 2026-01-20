import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Guest} from '../models/models';
import {ApiService} from '../services/api.service';

@Component({
  selector: 'app-guest-selector',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './guest-selector-component.html'
})
export class GuestSelectorComponent {
  guests: Guest[] = [];
  active = new Set<string>();


  constructor(private api: ApiService) {
  }


  ngOnInit() {
    this.api.getGuests().subscribe(g => this.guests = g);
  }


  toggle(g: Guest, enabled: boolean) {
    enabled ? this.active.add(g.id) : this.active.delete(g.id);
// 🔌 FLOW TRACER
// flowEngine.setNode(`guest:${g.id}`, enabled ? g : null);
  }

}
