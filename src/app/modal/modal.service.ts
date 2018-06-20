import { Injectable } from '@angular/core';
import { ModalComponent } from './modal.component';

@Injectable()
export class ModalService {
  private modals: Array<ModalComponent>;

  constructor() {
    this.modals = [];
  }

  registerModal(newModal: ModalComponent): void {
    const modal = this.findModal(newModal.modalId);

    // Delete existing to replace the modal
    if (modal) {
      this.modals.splice(this.modals.indexOf(modal));
      alert('modal deleted'+newModal.modalId);
    }

    this.modals.push(newModal);
    localStorage.setItem('modalBucket', JSON.stringify(this.modals));
  }

  open(modalId: string): void {
    let modal = this.findModal(modalId);

    if (modal) {
      modal.isOpen = true;
    }
  }

  close(modalId: string, checkBlocking = false): void {
    let modal = this.findModal(modalId);

    if (modal) {
      if (checkBlocking && modal.blocking) {
        return;
      }

      modal.isOpen = false;
    }

    switch(modalId) {
        case 'avModal':
            this.triggerWindowEvent('onAVModalClose', {'event': 'onAVModalClose', 'msgObj': {}});
            break;
        default:
            console.log('all good');
    }
  }

  private findModal(modalId: string): ModalComponent {
    let modals = JSON.parse(localStorage.getItem('modalBucket'));
    if(modals !== null){
      for (let modal of modals) {
        if (modal.modalId === modalId) {
          return modal;
        }
      }
      return null;
    }
  }


  private triggerWindowEvent(eventType: string, evtObj: any) {
    let evt = new CustomEvent(eventType, {'detail': evtObj});
    window.dispatchEvent(evt);
  }
}
