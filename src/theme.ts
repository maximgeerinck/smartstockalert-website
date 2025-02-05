import { extendTheme } from "@chakra-ui/react";
// https://coolors.co/f2bb05-d74e09-96e6b3-242423-568259
// export const colors = {
//   primary: "#ffdd32", // amber color
//   secondary: "#242423", // black
//   primary2: "#D74E09", // red orange
//   secondary2: "#96E6B3", // green
//   tertiary: "#568259", // fern green
// };
export const colors = {
  primary: "#63e9e1", // amber color
  // primary: "#63e9e1", // amber color
  secondary: "#242423", // black
  primary2: "#D74E09", // red orange
  secondary2: "#96E6B3", // green
  tertiary: "#568259", // fern green
  background: "#191919", // darkish black
};

// https://github.com/chakra-ui/chakra-ui/tree/main/packages/components/theme/src/foundations
export const theme = extendTheme({
  components: {
    Table: {
      parts: ["th", "td"],
      baseStyle: {
        th: {
          borderColor: "gray.100",
          color: "blue",
        },
        td: {
          borderColor: "gray.300",
        },
      },
    },
  },
  // colors: {
  //   brand: {
  //     100: "#f7fafc",
  //     // ...
  //     900: "#1a202c",
  //   },
  // },
});
