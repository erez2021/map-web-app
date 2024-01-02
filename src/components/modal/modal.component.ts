import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Output() closeModal: EventEmitter<void> = new EventEmitter<void>();

  onCloseModal() {
    this.closeModal.emit();
  }
}
