import { ReactNode } from 'react';

export default function MdxLayout({ children }: { children: ReactNode }) {
  return <article className="mx-auto max-w-3xl px-9 pt-12">{children}</article>;
}
