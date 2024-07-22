import React from "react";
import { useState, useEffect } from "react";
import { cn, scrollTo } from "@/lib/utils";
import styles from "@/styles/Container.module.css";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

type IconProps = {
  ["data-hide"]: boolean;
};

type NavProps = {
  text: string;
  href: string;
  i: number;
  className?: string;
};

const navLinks = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#experience", text: "Experience" },
  // { href: "#projects", text: "Projects" },
  // { href: "#services", text: "Services" },
  // { href: "#contact", text: "Contact" },
];

const variants = {
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.12,
    },
  }),
  hidden: { opacity: 0 },
};

function handleClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  const href = e.currentTarget.getAttribute("href");

  if (href && href.startsWith("#")) {
    e.preventDefault();
    const section = document.querySelector(href);
    scrollTo(section);
  }
}

function NavItem(props: NavProps) {
  return (
    <motion.li
      className={props.className}
      variants={variants}
      custom={props.i}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <a
        href={props.href}
        onClick={handleClick}
        className={cn(props.i === 0 && "nav-active", "nav-link")}
      >
        {props.text}
      </a>
    </motion.li>
  );
}

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  // handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    !isScrolled && (
      <nav
        className={cn(
          styles.nav,
          isScrolled
            ? "bg-gradient-to-br from-background to-transparent shadow-md backdrop-blur transition"
            : "bg-transparent",
        )}
      >
        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              styles.burger,
              "inline-flex transform items-center justify-center rounded-md p-2 transition-all duration-300 focus:outline-none",
            )}
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <MenuIcon data-hide={isOpen} />
            <CrossIcon data-hide={!isOpen} />
          </button>
        </div>
        <Link href="/">
          <svg
            className={styles["logo-image"]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 375 375"
          >
            <g clipPath="url(#aa8c1e9741)">
              <g clipPath="url(#995db60847)">
                <g clipPath="url(#e85b4d9a3d)">
                  <path
                    fill="currentColor"
                    d="M 304.289062 38.160156 L 302.683594 38.160156 L 302.683594 35.734375 C 302.683594 35.238281 302.398438 34.835938 302.042969 34.835938 L 87.496094 34.835938 C 87.140625 34.835938 86.855469 35.238281 86.855469 35.734375 L 86.855469 38.160156 L 85.527344 38.160156 C 85.171875 38.160156 84.886719 38.5625 84.886719 39.058594 L 84.886719 339.207031 C 84.886719 339.703125 85.171875 340.105469 85.527344 340.105469 L 304.289062 340.105469 C 304.640625 340.105469 304.929688 339.703125 304.929688 339.207031 L 304.929688 39.058594 C 304.929688 38.5625 304.640625 38.160156 304.289062 38.160156 Z M 301.402344 36.628906 L 301.402344 38.160156 L 90.378906 38.160156 L 90.378906 36.628906 Z M 88.136719 334.984375 L 88.136719 39.957031 L 89.097656 39.957031 L 89.097656 334.984375 Z M 90.378906 39.957031 L 299.433594 39.957031 L 299.433594 334.984375 L 90.378906 334.984375 Z M 300.714844 39.957031 L 301.402344 39.957031 L 301.402344 334.984375 L 300.714844 334.984375 Z M 88.136719 36.628906 L 89.097656 36.628906 L 89.097656 38.160156 L 88.136719 38.160156 Z M 86.167969 39.957031 L 86.851562 39.957031 L 86.851562 335.882812 C 86.851562 336.378906 87.140625 336.777344 87.492188 336.777344 L 89.097656 336.777344 L 89.097656 338.308594 L 86.167969 338.308594 Z M 90.378906 338.308594 L 90.378906 336.777344 L 299.433594 336.777344 L 299.433594 338.308594 Z M 303.644531 338.308594 L 300.714844 338.308594 L 300.714844 336.777344 L 302.042969 336.777344 C 302.398438 336.777344 302.683594 336.378906 302.683594 335.882812 L 302.683594 39.957031 L 303.644531 39.957031 Z M 303.644531 338.308594 "
                    fillOpacity="1"
                    fillRule="nonzero"
                  />
                </g>
              </g>
            </g>
            <g clip-path="url(#614b27e1a6)">
              <g clip-path="url(#264a69debd)">
                <g clip-path="url(#f37de6a3ed)">
                  <path
                    strokeLinecap="butt"
                    transform="matrix(0.75, 0, 0, 0.75, 84.873376, 34.668766)"
                    fill="none"
                    strokeLinejoin="miter"
                    d="M 0.0021657 18.99894 L 0.0021657 388.545862 C 0.0021657 399.040655 8.507375 407.545865 18.996959 407.545865 L 274.424059 407.545865 C 284.913643 407.545865 293.42406 399.040655 293.42406 388.545862 L 293.42406 18.99894 C 293.42406 8.504146 284.913643 -0.00106295 274.424059 -0.00106295 L 18.996959 -0.00106295 C 8.507375 -0.00106295 0.0021657 8.504146 0.0021657 18.99894 Z M 0.0021657 18.99894 "
                    stroke="currentColor"
                    strokeWidth="30"
                    strokeOpacity="1"
                    strokeMiterlimit="4"
                  />
                </g>
              </g>
            </g>
            <g fill="currentColor" fillOpacity="1">
              <g transform="translate(120.499225, 187.242958)">
                <g>
                  <path d="M 56.578125 0 L 47.828125 -72.6875 L 50.578125 -73.03125 L 65.65625 -14.578125 L 82.96875 -14.578125 L 98.234375 -73.03125 L 100.8125 -72.6875 L 92.0625 0 L 144.515625 0 L 134.75 -120 L 85.71875 -120 L 75.609375 -52.796875 L 73.03125 -52.796875 L 63.09375 -120 L 13.890625 -120 L 4.28125 0 Z M 56.578125 0 " />
                </g>
              </g>
            </g>
            <g fill="currentColor" fillOpacity="1">
              <g transform="translate(269.320196, 190.394215)">
                <g>
                  <path d="M -56.578125 0 L -47.828125 72.6875 L -50.578125 73.03125 L -65.65625 14.578125 L -82.96875 14.578125 L -98.234375 73.03125 L -100.8125 72.6875 L -92.0625 0 L -144.515625 0 L -134.75 120 L -85.71875 120 L -75.609375 52.796875 L -73.03125 52.796875 L -63.09375 120 L -13.890625 120 L -4.28125 0 Z M -56.578125 0 " />
                </g>
              </g>
            </g>
          </svg>
        </Link>

        {/* Desktop menu */}
        <ul className={styles["desktop-nav"]}>
          {navLinks.map((link, i) => (
            <NavItem
              key={link.href}
              href={link.href}
              text={link.text}
              i={i}
              className="text-base font-semibold"
            />
          ))}
        </ul>

        {/* Mobile menu */}
        <AnimatePresence key="menu">
          {isOpen && (
            <motion.div
              className="fixed right-0 top-0 z-40 flex h-screen w-full flex-col justify-start overflow-y-hidden bg-background"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 1, type: "spring", bounce: 0.25 }}
            >
              {/* Expandable menu */}
              <div className="flex h-20 max-h-20 min-h-[60px] w-full items-center justify-between border-b pl-[22px] pr-1">
                <span className="text-base font-medium lowercase">Menu</span>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className={styles.burger}
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <CrossIcon data-hide={!isOpen} />
                </button>
              </div>
              <div className="flex h-full flex-col items-start justify-between overflow-y-auto">
                {/* Links */}
                <ul className="flex min-h-fit w-full flex-col items-start space-y-6 px-[22px] py-[58px]">
                  {navLinks.map((link, i) => (
                    <button key={link.href} onClick={() => setIsOpen(false)}>
                      <NavItem
                        href={link.href}
                        text={link.text}
                        i={i}
                        className="text-xl"
                      />
                    </button>
                  ))}
                </ul>

                {/* Footer */}
                <div className="flex min-h-fit w-full flex-col space-y-8 px-[22px] py-10">
                  <span className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} wendo. All rights reserved.
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <style jsx global>{`
          html,
          body {
            overflow-y: ${isOpen ? "hidden" : "initial"};
            scrollbar-width: ${isOpen ? "none" : "unset"};
            -ms-overflow-style: ${isOpen ? "none" : "unset"};
            touch-action: ${isOpen ? "none" : "unset"};
            -ms-touch-action: ${isOpen ? "none" : "unset"};
          }
        `}</style>
      </nav>
    )
  );
};
function MenuIcon(props: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute h-5 w-5 text-neutral-100"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        d="M2.5 2.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 7.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2.5 12.5H17.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossIcon(props: IconProps) {
  return (
    <svg
      className="absolute h-5 w-5 text-neutral-100"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      shapeRendering="geometricPrecision"
      {...props}
    >
      <path d="M18 6L6 18" />
      <path d="M6 6l12 12" />
    </svg>
  );
}

export default Nav;
