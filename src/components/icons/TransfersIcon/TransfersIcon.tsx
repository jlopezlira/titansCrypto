import Svg, { Path } from 'react-native-svg';

const TransfersIcon: React.FC = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        d="M15.2793 8.44977L18.9993 4.72974L15.2793 1.00977"
        stroke="#5ED5A8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M1 4.72949H19"
        stroke="#5ED5A8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M4.71997 11.5498L1 15.2698L4.71997 18.9898"
        stroke="#5ED5A8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <Path
        d="M19 15.2695H1"
        stroke="#5ED5A8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default TransfersIcon;
