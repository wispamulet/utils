// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;

    colors: {
      main: string;
      secondary: string;
      primary: string;
    };

    spaces: {
      one: string;
      two: string;
      three: string;
      four: string;
      five: string;
    };
  }
}
