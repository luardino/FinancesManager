import { ThemeType } from "styled-components";
import styled from "styled-components/native";


export const Container = styled.View`
     flex: 1;
     justify-content: center;
     align-items: center;
     background-color: ${({ theme }: {theme: ThemeType}) => theme.colors.background};
`;

export const Title = styled.Text`
font-family: ${({theme} : {theme: ThemeType}) => theme.fonts.bold};
font-size: 24px;
font-weight: bold;
color: ${({theme}: {theme: ThemeType}) => theme.colors.title};
`;