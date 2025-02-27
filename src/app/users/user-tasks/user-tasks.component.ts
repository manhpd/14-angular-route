import { Component, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRouteSnapshot, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userId = input.required<string>();
  userName = input.required<string>();
}

export const resolveUserName: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) => {
  const usersService = inject(UsersService);
  const userId = activatedRoute.paramMap.get('userId');
  const userName = userId ? usersService.getUserName(userId) : 'Unknown';
  return userName ? userName : Promise.resolve('Unknown');
}

export const resolveTitle: ResolveFn<string> = (activatedRoute: ActivatedRouteSnapshot, routerStateSnapshot: RouterStateSnapshot) => {
  const title = resolveUserName(activatedRoute, routerStateSnapshot) + "'s Tasks";
  return title ? title : Promise.resolve('Unknown');
}