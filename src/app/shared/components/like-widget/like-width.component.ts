import { UniqueServiceId } from './../../services/unique-id/unique-id.service';
import { Component, EventEmitter, Output, Input, OnInit } from '@angular/core';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
@Component({
    selector: 'app-like-width',
    templateUrl: './like-width.component.html',
    styleUrls: ['like-width.component.scss']
})

export class LikeWidthComponent implements OnInit {
    @Output() public liked = new EventEmitter<void>();
    @Input() public likes = 0;
    @Input() public id = null;
    public fonts = { faThumbsUp }

    constructor(private uniqueIdService: UniqueServiceId) {

    }
    ngOnInit(): void {
        if (!this.id) {
            this.id = this.uniqueIdService.generateUniqueIdWithPrefix('like')
        }
        // throw new Error('Method not implemented.');
    }

    public like(): void {
        this.liked.emit()
    }

}