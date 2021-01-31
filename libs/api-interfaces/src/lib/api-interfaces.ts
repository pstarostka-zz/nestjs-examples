export interface Message {
  message: string;
}

export interface TestDto {
  readonly username: string;
  readonly userId: number;
}

export interface UserDto {
  readonly firstName: string;
  readonly lastName: string;
  readonly age: number;
  readonly userId: string;
}
