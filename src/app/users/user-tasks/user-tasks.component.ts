import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();

  private userServices = inject(UsersService);

  userName = computed(() => {
    const user = this.userServices.getUser(this.userId());
    return user ? user.name : 'Unknown';
  });
}
