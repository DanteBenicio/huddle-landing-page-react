import * as S from './styles';

type ButtonProps = {
  text: string
  width: string
  bgColor?: string
  boxShadow?: boolean
}

export default function Button({
  text, width, bgColor, boxShadow,
}: ButtonProps) {
  return (
    <S.Button
      type="button"
      width={width}
      bgColor={bgColor}
      boxShadow={boxShadow}
    >
      {text}

    </S.Button>
  );
}
