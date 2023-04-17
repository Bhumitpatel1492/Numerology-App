import React from 'react';
import Svg, {G, Path, TSpan, Text} from 'react-native-svg';

function Lucky5() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="177.948"
      height="198"
      viewBox="0 0 177.948 198">
      <G data-name="Group 201" transform="translate(-161 -118)">
        <G
          data-name="Group 154"
          transform="rotate(90 114.599 224.349)"
          style={{mixBlendMode: 'normal', isolation: 'isolate'}}>
          <Path
            fill="#656500"
            d="M18.453 51.675c3.26-22.484-.872-39.881 14.424-42.043 15.286-1.8 35.272-1.159 56.981-4.815 21.959-3.161 39.9-6.781 57.028-3.559 16.927 3.09 33.045 13.026 46.643 33.916 12.859 20.481 11.665 79.456 0 109.129-10.939 29.081-32.346 28.858-70.694 32.274-38.272 4.711-77.269-1.931-97.781-32.274-21.267-30.35-13.328-48.844-6.601-92.628z"
            data-name="Path 43"
            style={{mixBlendMode: 'multiply', isolation: 'isolate'}}></Path>
        </G>
        <Text
          fill="#fff"
          data-name="5"
          fontFamily="RobotoSlab-Regular, Roboto Slab"
          fontSize="150"
          transform="translate(209 275)">
          <TSpan x="0" y="0">
            5
          </TSpan>
        </Text>
      </G>
    </Svg>
  );
}

export default Lucky5;
