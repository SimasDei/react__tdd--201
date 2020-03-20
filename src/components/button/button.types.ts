export interface IProps {
  buttonText: string;
  emitEvent: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
