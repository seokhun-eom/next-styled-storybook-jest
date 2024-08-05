"use client";

import Link from "next/link";
import styled, { css } from "styled-components";

type ButtonProps = {
  color: string;
  backgroundColor: string;
};

const redBox = css`
  padding: 0.25em 1em;
  border: 3px solid #ffeeee;
  border-radius: 10px;
`;

const font = css`
  color: #1e90ff;
  font-size: 2em;
`;

export const Badge = styled.span`
  padding: 8px 16px;
  font-weight: bold;
  text-align: center;
  color: white;
  background-color: red;
  border-radius: 16px;
`;

export const Button = styled.button<ButtonProps>`
  color: ${(props) => props.color};
  background-color: ${(props) => props.backgroundColor};
  border: 2px solid ${(props) => props.color};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 8px;
  cursor: pointer;
`;

export const RedButton = styled.button`
  background: transparent;
  margin: 1em;
  cursor: pointer;
  ${redBox}
  ${font}
`;

export const Text = styled.p`
  font-weight: bold;
  ${font}
`;

export const BorderedText = styled(Text)`
  padding: 8px 16px;
  border: 3px solid blue;
  border-radius: 8px;
`;

export const StyledLink = styled(Link)`
  color: #1e90ff;
  font-size: 2em;
`;

export const ThemeText = styled.span`
  color: ${(props) => props.theme.colors.red};
  font-size: ${(props) => props.theme.fontSizes[3]};
  margin: ${(props) => props.theme.space[2]};
`;
