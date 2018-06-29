import { Component } from '@angular/core';

@Component({
    selector: 'app-tree-root',
    templateUrl: './root.component.html'
})
export class RootComponent {
    rootText = 'Root Text';
    isDisabled = false;
    inputValue = 'val';
    showRoot = true;
    factories = ['Factory 1', 'Factory 2', 'Factory 3'];

    constructor() {
        setTimeout(() => {
            // this.isDisabled = true;
            console.log('disabling');
        }, 2000);
    }

    getRootText() {
        return this.rootText;
    }

    onAddFactoryClick(evt) {
        console.log(evt.target);
        console.log('click');
        this.factories.push('Factory ' + (this.factories.length + 1));
    }

    inputHandler(evt) {
        this.inputValue = evt.target.value;
    }
}