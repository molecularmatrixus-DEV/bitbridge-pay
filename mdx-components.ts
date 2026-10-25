import type { ComponentPropsWithoutRef } from 'react';

type MDXComponents = Record<string, React.ComponentType<any>>;

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
  };
}
