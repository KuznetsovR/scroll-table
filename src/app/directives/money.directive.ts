import {Directive, ElementRef, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[appMoney]'
})
export class MoneyDirective {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @Input('appMoney') set appMoney(moneyAmount: number){
    if (moneyAmount > 0){
      this.r.setStyle(this.el.nativeElement, 'color', '#68c791')
    } else if (moneyAmount < 0){
      this.r.setStyle(this.el.nativeElement, 'color', '#fa516a')
    } else{
      this.r.setStyle(this.el.nativeElement, 'color', '#bac1ca')
    }
  }
}
