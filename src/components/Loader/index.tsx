import { useCallback } from "react";

import * as S from "./styles";

export interface ILoaderProps {
  size?: "small" | "regular" | "large";
  rings?: number;
  ringSectors?: number;
  ringRadius?: string;
  text?: string;
}

const Loader = ({
  size = "regular",
  rings = 2,
  ringSectors = 38,
  ringRadius = "4.5rem",
  text = "Carregando...",
}: ILoaderProps) => {
  const createSectors = useCallback(() => {
    const sectorsArr = [];

    for (let s = 0; s < ringSectors; s += 1) {
      sectorsArr.push(
        <S.Sectors
          ringSectors={ringSectors}
          ringRadius={ringRadius}
          size={size}
        >
          {text[s] || ""}
        </S.Sectors>
      );
    }
    return sectorsArr;
  }, [ringRadius, ringSectors, size, text]);

  const createRings = useCallback(() => {
    const ringsArr = [];

    for (let r = 0; r < rings; r += 1) {
      ringsArr.push(<S.Ring size={size}>{createSectors()}</S.Ring>);
    }

    return ringsArr;
  }, [createSectors, rings, size]);

  return <S.Loader>{createRings()}</S.Loader>;
};

export default Loader;
