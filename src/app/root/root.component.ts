import { Component } from '@angular/core';

@Component({
    selector: 'app-tree-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.css']
})
export class RootComponent {

    rootText = 'Root';
    isDisabled = false;
    inputValue = 'val';
    showRoot = true;
    factories = [];

    constructor() {
        setTimeout(() => {
            // this.isDisabled = true;
            console.log('disabling');
        }, 2000);
    }

    getRootText() {
        return this.rootText;
    }

    genId() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
              .toString(16)
              .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    }

    onAddFactoryClick(evt) {
        console.log(evt.target);
        console.log('click');
        const currentTime = new Date();
        this.factories.push(this.genId());
    }

    inputHandler(evt) {
        this.inputValue = evt.target.value;
    }

    handleRemoveFactory(evt) {
        console.log(evt);
        const id = evt;
        const index = this.factories.indexOf(id);
        console.log(index);
        this.factories.splice(index, 1);
    }
}