import { Directive, HostBinding, HostListener, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { debounceTime } from 'rxjs/operators/debounceTime';
import { filter } from 'rxjs/operators/filter';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective implements OnInit {
  @HostBinding('class.top-nav-collapse') scrollTopCollapse = false
  @HostBinding('class.unique-color-dark') get scrollTopBackground() { return this.scrollTopCollapse }

  observer: Observer<number>;
  offset: Observable<number> = Observable.create((observer: Observer<number>) => this.observer = observer)

  constructor( @Inject(DOCUMENT) private document: Document) {

  }

  ngOnInit() {
    this.offset.pipe(filter((val: number) => (val < 500 && val > 100) || val < 20), debounceTime(50)).subscribe((numb) => {
      if (numb > 100) this.scrollTopCollapse = true; else if (numb < 20) this.scrollTopCollapse = false
    })
  }

  @HostListener('window:scroll')
  onWindowScroll() {
    let number = this.document.scrollingElement.scrollTop
    this.observer.next(number)
  }
}
