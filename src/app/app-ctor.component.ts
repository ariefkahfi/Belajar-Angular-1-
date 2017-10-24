import {Component} from '@angular/core';


@Component({
    selector : 'app-ctor',
    template : `
        <h2>Ini AppCtorComponent</h2>

        <div>
            these properties comes from constructor of AppCtorComponentClass<br/>
            Hello My Name is : {{name}}
        </div>

    `
})
export class AppCtorComponent {
    name: string ;
    
    constructor() {
        this.name = 'Arief';
    }
}
