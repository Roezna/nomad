import { Icon } from "@chakra-ui/react";
import { iconName } from "../../shared/constants/iconName";
import { iconSvg } from "../../shared/constants/IconSvg";

interface Props {
  name: keyof typeof iconName;
  fontSize?: string;
  boxSize?: string;
  height?: string;
  width?: string;
  fill?: string;
}

const IconCustom = (props: Props) => {
  const { name, boxSize, fontSize, height, width, fill } = props;
  const { element, viewBox } = iconSvg[iconName[name]];

  return (
    <Icon
      viewBox={viewBox}
      height={height}
      width={width}
      fontSize={fontSize}
      boxSize={boxSize}
      fill={fill}
    >
      {element}
    </Icon>
  );
};

export default IconCustom;
