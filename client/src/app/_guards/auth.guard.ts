import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';
import { map } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountService);
  const toastrService = inject(ToastrService);

  return accountService.currentUser$.pipe(
    map((user: any) => {
      if (user) {
        return true;
      } else {
        toastrService.error('User cannot enter');
        return false;
      }
    })
  );
};
