type LinkProps = React.ComponentProps<"a"> & {
  children: React.ReactNode;
  href: string;
};

const Link = ({ children, href, ...props }: LinkProps) => (
  <a
    className="bg-slate-800 hover:bg-slate-700 transition-all"
    href={href}
    {...props}
  >
    {children}
  </a>
);

export default Link;
