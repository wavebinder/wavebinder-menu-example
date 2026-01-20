import {Component, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {GuestSelectorComponent} from './guest-selector-component/guest-selector-component';
import {IngredientEditorComponent} from './ingredient-editor-component/ingredient-editor-component';
import {MenuViewerComponent} from './menu-viewer-component/menu-viewer-component';

@Component({
  selector: 'app-root',
  imports: [GuestSelectorComponent, IngredientEditorComponent, MenuViewerComponent],
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('front');
}
