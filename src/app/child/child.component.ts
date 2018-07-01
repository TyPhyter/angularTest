import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-factory-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
    @Input() child: object;
    active = false;
    finishedEditing = true;
    startTime = new Date();
    endTime = new Date();
    

    constructor() {
        this.startTime.setHours(0,0,0);
        //set to next midnight
        this.endTime.setHours(0,0,0); 
        //this probably doesn't need to be checked so often, but it's useful for debugging/testing
        setInterval(() => { this.checkIfActive() }, 1000);
    }
        
    ngOnInit() {
    }

    handleClick(evt) {
        this.finishedEditing = false;
    }

    saveChild() {
        this.finishedEditing = true;
    }

    startTimeChange($event) {
        //avoid errors when time input is nulled out
        if($event){
            //get hours and minutes from input value string with split, change our time based on that
            this.startTime.setHours($event.split(':')[0], $event.split(':')[1]);
            this.checkIfActive();
        }
    }

    endTimeChange($event) {
        if($event){
            this.endTime.setHours($event.split(':')[0], $event.split(':')[1]);
            this.checkIfActive();
        }
    }

    checkIfActive() {
        const now = new Date();
        if( now > this.startTime && now < this.endTime){
            this.active = true;
        } else {
            this.active = false;
        }
    }
}
