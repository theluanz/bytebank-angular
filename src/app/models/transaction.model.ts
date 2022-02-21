export default interface Transaction {
  id?: number;
  value: number;
  destiny: number | string;
  data?: Date | string;
}
