import { RotatingLines } from "react-loader-spinner";

interface ILoaderProp {
  style?: string
}
const SmallLoader = ({ style }: ILoaderProp) => {
  return (
    <div className={`max-w-6xl mx-auto w-full flex flex-row items-center justify-center ${style ? style : 'py-40'}`}>
      <RotatingLines
        strokeColor="grey"
        strokeWidth="3"
        animationDuration="0.75"
        width="25"
        visible={true}
      />
    </div>
  );
};

export default SmallLoader;
