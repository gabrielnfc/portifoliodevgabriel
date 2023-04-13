import StyledComponentsRegistry from './registry';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
