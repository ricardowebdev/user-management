import { Component,
         OnInit,
         ViewChild,
         ElementRef,
         Input,
         Output,
         EventEmitter } from '@angular/core';
import { trigger,
         style,
         animate,
         transition  } from '@angular/animations';

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss'],
    animations: [
        trigger('fade', [
            transition('void => *', [
                style({ opacity: 0 }),
                animate(800)
            ]),

            transition('* => void', [
                style({ opacity: 1, backgroundColor: '#ff3547' }),
                animate(500)
            ])

        ])
    ]
})
export class AlertComponent implements OnInit {
    @ViewChild('alert') alert: ElementRef;
    @Input() message: String;
    @Input() type: String;
    @Output() close = new EventEmitter();

    constructor() { }

    ngOnInit() {
    }

    closeAlert() {
        this.close.emit();
    }

}
