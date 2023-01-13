import { Component, EventEmitter, Output,Input } from '@angular/core';
@Component ({
    selector: 'app-like-width',
    templateUrl: './like-width.component.html',
    styleUrls: ['like-width.component.scss']
})

export class LikeWidthComponent {
    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id = 0;
    
}