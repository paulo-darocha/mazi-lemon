import { Role } from '../../auth/auth.enum';

export interface IUser {
   _id: string;
   email: string;
   name: IName;
   picture: string;
   role: Role | string;
   userStatus: boolean;
   dateOfBirth: Date | null | string;
   level: number;
   address: {
      line1: string;
      line2?: string;
      city: string;
      state: string;
      zip: string;
   };
   phones: IPhone[];
   readonly fullName?: string;
}

export class User implements IUser {
   constructor(
      public _id = '',
      public email = '',
      public name = { first: '', middle: '', last: '' } as IName,
      public picture = '',
      public role = Role.None,
      public dateOfBirth: Date | null = null,
      public userStatus = false,
      public level = 0,
      public address = {
         line1: '',
         city: '',
         state: '',
         zip: '',
      },
      public phones: IPhone[] = []
   ) {}
}

export interface IName {
   first: string;
   middle?: string;
   last: string;
}

export interface IPhone {
   type: PhoneType;
   digits: string;
   id: number;
}

export enum PhoneType {
   None = 'none',
   Mobile = 'mobile',
   Home = 'home',
   Work = 'work',
}
