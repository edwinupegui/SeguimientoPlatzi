interface IRandomFox {
  image: string;
}
export const RandomFox = ({ image }: IRandomFox): JSX.Element => {
  return <img width={320} height="auto" className="rounded-lg" src={image} />;
};
