export class User {
    constructor(
      public name: string,
      public surname: string,
      public phone: number,
      public email: string,
      private _token: string
    ) {}
  
    get token(){
      return this._token;
    }
  }