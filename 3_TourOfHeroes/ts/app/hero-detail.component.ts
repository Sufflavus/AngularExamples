import {Component} from "angular2/core";

@Component({
    selector: "my-hero-detail",
    template: `
      <div *ngIf="hero">
          <h2>{{hero.name}} details!</h2>
          <div><label>id: </label>{{hero.id}}</div>
          <div>
            <label>name: </label>
            <div><input [(ngModel)]="hero.name" plaseholder="name"/></div>
          </div>
      </div>
      `,
    inputs: ["hero"]
})

export class HeroDetailComponent {
    public hero: Hero;
}