import { useState } from 'react';
import { Range } from 'react-range';

import * as S from './styles';

export interface IRangeProps {
  min?: number;
  max?: number;
  step?: number;
  onFinalChange?(values: number[]): void;
  initialValue?: [number] | [number, number];
  formatValue?(value: number): any;
  allowOverlap?: boolean;
  draggableTrack?: boolean;
}

const RangeInput = ({
  min = 0,
  max = 100,
  step = 1,
  onFinalChange,
  initialValue = [max / 2],
  formatValue = (val) => val,
  allowOverlap = false,
  draggableTrack = false,
}: IRangeProps) => {
  const [values, setValues] = useState<number[]>(initialValue);

  return (
    <S.RangeContainer>
      <Range
        step={step}
        min={min}
        max={max}
        values={values}
        onChange={(inputValues) => setValues(inputValues)}
        onFinalChange={onFinalChange}
        allowOverlap={allowOverlap}
        draggableTrack={draggableTrack}
        renderTrack={({ props, children }) => (
          <S.Track
            {...props}
            min={min}
            max={max}
            values={values}
            style={{
              ...props.style,
            }}
          >
            {children}
          </S.Track>
        )}
        renderThumb={({ props, value }) => {
          return (
            <S.Thumb
              {...props}
              style={{
                ...props.style,
              }}
            >
              <S.Value>{formatValue(value)}</S.Value>
            </S.Thumb>
          );
        }}
      />
    </S.RangeContainer>
  );
};

export default RangeInput;
