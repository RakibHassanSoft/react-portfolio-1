// src/data/navbarData.ts
export interface NavItem {
  label: string;
  href: string;
  subMenu?: NavItem[];
}

export const navbarItems: NavItem[] = [
  { label: "Home", href: "/#hero" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#featured-projects" },
  { label: "Skills", href: "/#skills" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "Contact", href: "/#contact" },
  {
    label: "More", // Parent dropdown label
    href: "#",
    subMenu: [
      { label: "Tools", href: "/#tools" },
      { label: "About", href: "/#about" },
      { label: "Process", href: "/#process" },
    ],
  },
];
