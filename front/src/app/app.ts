import {AfterViewInit, ChangeDetectorRef, Component} from '@angular/core';

import {WaveBinder} from '../../node_modules/wave-binder/lib/wave-binder';
import {HttpServiceSetting} from '../../node_modules/wave-binder/lib/wvb/httpService/http-service';
import {NgForOf} from '@angular/common';
import {Dish, Guest, Ingredient} from './models/models';
import {asyncScheduler, observeOn} from 'rxjs';
import {NgOptionComponent, NgSelectComponent} from '@ng-select/ng-select';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgForOf, NgSelectComponent, FormsModule, NgOptionComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {

  public wb: WaveBinder;
  uninvited: Guest[] = [];

  season = 'Scegli una Stagione';

  constructor(private cdr: ChangeDetectorRef) {
    const extApis = new Map<string, HttpServiceSetting>();
    extApis.set('api', require('./wb/extapi.json'));

    const LICENSE = require('./wb/license_menu-config-001.json')
    const PROTO_NODES = require('./wb/protonodes.json')

    this.wb = new WaveBinder(LICENSE, PROTO_NODES, extApis, []);
  }

  ngAfterViewInit(): void {
    this.wb.tangleNodes();

    this.wb.getNodeByName('guests')
      .pipe(observeOn(asyncScheduler))
      .subscribe(() => this.cdr.markForCheck());

    this.wb.getNodeByName('ingredients')
      .pipe(observeOn(asyncScheduler))
      .subscribe(() => this.cdr.markForCheck());

    this.wb.getNodeByName('dishes')
      .pipe(observeOn(asyncScheduler))
      .subscribe(() => this.cdr.markForCheck());
  }

  updateSeason($event: string) {
    this.wb.getNodeByName('season').next($event);
  }

  toggleGuest(g: Guest, target: EventTarget) {
    const isChecked = (target as HTMLInputElement).checked;
    const guests = this.guests();

    if (isChecked) {
      this.uninvited = this.uninvited.filter(u => u.id !== g.id);
      guests.push(g);
      this.wb.getNodeByName('guests').next(guests);
    } else {
      this.uninvited.push(g);
      this.wb.getNodeByName('guests').next(guests.filter(guest => g.id !== guest.id));
    }
  }

  guests(): Guest[] {
    return this.wb.getNodeByName('guests').value;
  }
  ingredients(): Ingredient[] {
    return this.wb.getNodeByName('ingredients').value;
  }
  dishes(): Dish[] {
    return this.wb.getNodeByName('dishes').value;
  }
}
