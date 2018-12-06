import { Component, Input, Output, OnInit, EventEmitter, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
    selector: 'app-modal',
    styleUrls: ['./modal.component.css'],
    templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit {
  @Output() onModalClose:EventEmitter<any> = new EventEmitter();
  @Output() onModalInitialize:EventEmitter<any> = new EventEmitter();
  @Input() modalId: string;
  @Input() modalTitle: string;
  @Input() blocking = false;
  isOpen = false;

  @HostListener('keyup') onMouseEnter(event) {
    //this.keyup(event);
  }

  constructor(private modalService: ModalService) {
  }

  ngOnInit() {
    this.modalService.registerModal(this);
    this.onModalInitialize.emit('initialize');
  }

  ngAfterViewInit(){
    
  }

  close(checkBlocking = false): void {
    this.onModalClose.emit('close');
    this.modalService.close(this.modalId, checkBlocking);
  }

  private keyup(event: KeyboardEvent): void {
    if (event.keyCode === 27) {
      this.modalService.close(this.modalId, true);
    }
  }
}