export interface IReview {
  Id: number;
  UserId: number;
  ServiceId: number;
  Comment: string;
  Advantages: string;
  Disadvantages: string;
  Likes: number;
  Rate: number;
  CreateDate: Date;
}
