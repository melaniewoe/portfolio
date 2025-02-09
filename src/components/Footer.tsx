interface ArrowSvgProps {
  className?: string;
}

const ArrowSvg: React.FC<ArrowSvgProps> = ({ className }) => {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.94922 10.2192V4.44453H4.17451"
        stroke="currentColor"
        strokeWidth="0.583333"
        strokeMiterlimit="10"
      ></path>
      <path
        d="M9.9481 4.44301L3.89062 10.5005"
        stroke="currentColor"
        strokeWidth="0.583333"
        strokeMiterlimit="10"
      ></path>
    </svg>
  );
};

export default function Footer() {
  return (
    <footer className="relative h-[800px] w-full bg-secondary">
      <div
        className="relative h-[800px]"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0 flex h-[800px] w-full flex-col justify-center justify-between p-14 text-primary md:p-28 md:pb-20">
          <hr className="my-4 w-full sm:my-6" />
          <h2 className="text-6xl font-bold capitalize tracking-tighter xl:text-9xl">
            Want to <br /> reach <span className="italic">out?</span>
          </h2>
          <div className="align flex flex-col md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col">
              <a
                className="group flex flex-row items-center uppercase"
                target="_blank"
                href="https://www.linkedin.com/in/melaniewoe"
              >
                linkedin{" "}
                <ArrowSvg className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              {/* <a
                className="group flex flex-row items-center uppercase"
                target="_blank"
                href="https://github.com/melaniewoe"
              >
                github{" "}
                <ArrowSvg className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </a> */}
              <a
                className="group flex flex-row items-center uppercase"
                href="mailto:melaniewoe@gmail.com"
              >
                melaniewoe@gmail.com{" "}
                <ArrowSvg className="transform transition-transform duration-300 group-hover:translate-x-2" />
              </a>
              <br />
            </div>
            <div className="items-end md:text-right">
              <div className="uppercase">
                <p>designed</p> <p>and</p>
                <p>developed</p> by melanie woe.
              </div>
              <div className="font-normal text-gradient-primary">
                © 2025 Melanie Woe
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
