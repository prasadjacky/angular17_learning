import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'rise-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  @Input() isExpanded: boolean = false;
	@Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

	handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
}
