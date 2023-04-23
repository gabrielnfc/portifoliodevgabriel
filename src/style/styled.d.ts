import 'styled-components';


interface IPalette {
  main: string;
  contrastText: string;
}
// we'll use a very simple theme with  palette and colors
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    borderRadius: string;
    padding: string;
    margin: string;
    bodyBackgroundColor: string;
    bodyTextColor: string; 
    logo: string;   
    backgroundImage: string;
    color: string;
  }
}
