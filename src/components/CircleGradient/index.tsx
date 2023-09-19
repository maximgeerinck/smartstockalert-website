import { Box } from "@chakra-ui/react";
import { colors } from "../../theme";

export const CircleGradient = () => {
  const SIZE = window.innerWidth;
  const HALF_SIZE = SIZE / 2;
  return (
    <Box position="fixed" bottom={-HALF_SIZE} right={-HALF_SIZE} opacity={0.4}>
      <svg height={SIZE} width={SIZE}>
        <defs>
          <radialGradient
            id="grad"
            cx={HALF_SIZE}
            cy={HALF_SIZE}
            rx={HALF_SIZE}
            ry={HALF_SIZE}
            fx={HALF_SIZE}
            fy={HALF_SIZE}
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor={colors.primary} stopOpacity="1" />
            <stop offset="30%" stopColor={colors.primary} stopOpacity="0.5" />
            <stop offset="95%" stopColor={colors.background} stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse
          cx={HALF_SIZE}
          cy={HALF_SIZE}
          rx={HALF_SIZE}
          ry={HALF_SIZE}
          fill="url(#grad)"
        />
      </svg>
    </Box>
  );
};
