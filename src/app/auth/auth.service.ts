import { BehaviorSubject, Observable, pipe } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import { filter, mergeMap } from 'rxjs/operators';
import { Role } from './auth.enum';
import { IUser, User } from '../user/user/user';
import { inject } from '@angular/core';
import { CacheService } from '../common/cache.service';

export abstract class AuthService implements IAuthService {
   private getAndUpdateUserIfAuthenticated = pipe(
      filter((status: IAuthStatus) => status.isAuthenticated),
      mergeMap(() => this.getCurrentUser())
   );

   protected readonly cache = inject(CacheService);

   readonly authStatus$ = new BehaviorSubject<IAuthStatus>(defaultAuthStatus);
   readonly currentUser$ = new BehaviorSubject<IUser>(new User());
   protected readonly resumeCurrentUser$ = this.authStatus$.pipe(
      this.getAndUpdateUserIfAuthenticated
   );

   constructor() {
      if (this.hasExpiredToken()) {
      }
   }

   protected abstract authProvider(
      email: string,
      password: string
   ): Observable<IServerAuthResponse> {}

   protected abstract transformJwtToken(token: unknown): IAuthStatus;

   protected abstract getCurrentUser(): Observable<void> {}

   login(email: string, password: string): Observable<void> {
      throw new Error('Method not implemented.');
   }

   logout(clearToken?: boolean | undefined): void {
      throw new Error('Method not implemented.');
   }

   protected setToken(jwt: string) {}

   getToken(): string {
      throw new Error('Method not implemented.');
   }

   protected clearToken() {
      this.cache.clear();
   }

   protected hasExpiredToken(): boolean {
      const jwt = this.getToken();
      if (jwt) {
         const payload = jwtDecode(jwt) as { exp: number };
         return Date.now() >= payload.exp * 1000;
      }
      return true;
   }

   protected getAuthStatusFromToken(): IAuthStatus {
      return this.transformJwtToken(jwtDecode(this.getToken()));
   }
}

export interface IAuthStatus {
   isAuthenticated: boolean;
   userRole: Role;
   userId: string;
}

export interface IServerAuthResponse {
   accessToken: string;
}

export const defaultAuthStatus: IAuthStatus = {
   isAuthenticated: false,
   userRole: Role.None,
   userId: '',
};

export interface IAuthService {
   readonly authStatus$: BehaviorSubject<IAuthStatus>;
   readonly currentUser$: BehaviorSubject<IUser>;
   login(email: string, password: string): Observable<void>;
   logout(clearToken?: boolean): void;
   getToken(): string;
}
