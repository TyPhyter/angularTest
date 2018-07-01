import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-factory',
    templateUrl: './factory.component.html',
    styleUrls: ['./factory.component.css']
})
export class FactoryComponent implements OnInit {
    //the unique string identifier
    @Input() factory: string;
    //event emitter to remove factories
    @Output() factoryToRemove = new EventEmitter<string>();
    name = "";
    lowerBound = 0;
    upperBound = 0;
    finishedEditing = false;
    numChildren = 0;
    children = [];

    constructor() {
        //generate some starting values
        this.name = 'Factory';
        this.lowerBound = Math.floor(Math.random() * 256);
        this.upperBound = this.lowerBound + 200;
        this.numChildren = 1 + Math.floor(Math.random() * 14);
    }

    ngOnInit() {
    }

    editFactory() {
        this.finishedEditing = false;
    }

    saveFactory() {
        if(this.numChildren <= 15 && this.numChildren >= 1 && this.name !== "" && this.lowerBound < this.upperBound){
            this.generateChildren();
            this.finishedEditing = true;
        } else if(this.numChildren > 15){
            alert("The max number of children is 15");
        } else if(this.numChildren < 1){
            alert("Factories must have at least 1 child");
        }else if(this.name === "") {
            alert("Factories must have names");
        } else if(this.lowerBound >= this.upperBound){
            alert("Upper bound must be greater than lower bound");
        }
    }

    removeFactory() {
        console.log('removeFactory', this.factory);
        this.factoryToRemove.emit(this.factory);
    }

    generateChildren() {
        //remove children on each generatione
        this.children = [];

        for (let i = 0; i < this.numChildren; i++) { 
            this.children.push({ 
                value: Math.floor(Math.random() * (this.upperBound - this.lowerBound)) + this.lowerBound
            });
        }
    }
}
