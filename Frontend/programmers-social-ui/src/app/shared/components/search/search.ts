import {
  Component,
  effect,
  OnDestroy,
  signal,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search implements OnDestroy {

  // 🔹 input state
  searchText = signal('');
  debouncedText = signal('');
  isLoading = signal(false);

  private timer: any;

  // 🔥 Emit search on Enter
  @Output() searchSubmit = new EventEmitter<string>();

  constructor() {
    effect(() => {
      const value = this.searchText();

      clearTimeout(this.timer);
      if (!value.trim()) {
        this.isLoading.set(false);
        return;
      }

      this.isLoading.set(true);

      this.timer = setTimeout(() => {
        this.debouncedText.set(value);
        this.isLoading.set(false);
      }, 400);
    });
  }

  onInput(value: string) {
    this.searchText.set(value);
  }

  // 🔥 ENTER key handler
  onEnter() {
    const value = this.debouncedText().trim();
    if (!value) return;

    this.searchSubmit.emit(value);
  }

  clear() {
    this.searchText.set('');
    this.debouncedText.set('');
  }

  ngOnDestroy() {
    clearTimeout(this.timer);
  }
}
