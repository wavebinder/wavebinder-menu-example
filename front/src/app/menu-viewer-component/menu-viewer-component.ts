import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuItem} from '../models/models';

@Component({
  selector: 'app-menu-viewer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu-viewer-component.html'
})
export class MenuViewerComponent {
  menu: MenuItem[] = [];


  ngOnInit() {
// 🔌 FLOW SUBSCRIBE
// flowEngine.subscribe('menu:calculated', menu => this.menu = menu);
  }

}
