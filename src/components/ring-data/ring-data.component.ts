import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Ring } from 'src/models/ring.interface';

@Component({
  selector: 'app-ring-data',
  templateUrl: './ring-data.component.html',
  styleUrls: ['./ring-data.component.scss'],
})
export class RingDataComponent {
  selectedItems: Ring[] = [];
  isAllChecked: boolean = false;
  @Input() ringData: Ring[];
  @Output() updateSelectedRings: EventEmitter<Ring[]> = new EventEmitter<
    Ring[]
  >();

  onCheckboxChange(item: Ring): void {
    item.isSelected = !item.isSelected;
    if (item.isSelected) {
      this.selectedItems.push(item);
      if (this.selectedItems.length === this.ringData.length) {
        this.isAllChecked = true;
      }
    } else {
      const index = this.selectedItems.findIndex(
        (selectedItem) => selectedItem === item
      );
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
        this.isAllChecked = false;
      }
    }
    this.updateRingData();
  }

  toggleAllCheckbox() {
    if (this.selectedItems.length === this.ringData.length) {
      this.clearSelection();
    } else {
      this.selectAll();
    }
    this.updateRingData();
  }

  clearSelection() {
    this.isAllChecked = false;
    this.selectedItems = [];
    this.ringData.forEach((item) => (item.isSelected = false));
  }

  selectAll() {
    this.isAllChecked = true;
    this.selectedItems = [...this.ringData];
    this.ringData.forEach((item) => (item.isSelected = true));
  }

  updateRingData() {
    this.updateSelectedRings.emit(this.selectedItems);
  }
}
