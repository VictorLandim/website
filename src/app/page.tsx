import Link from "@/components/Link";

const Nabla = () => (
  <svg
    viewBox="0 0 99 108"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className="w-10 mb-16 scale-y-90"
  >
    <path
      d="M48.66 99.96L4.42 1.4V0H94.3V1.4L50.06 99.96H48.66ZM53.42 78.82L85.62 5.88H21.92L53.42 78.82Z"
      shapeRendering="geometricPrecision"
    />
  </svg>
);

const intro = () => (
  <div>
    <h1 className="text-3xl font-bold mb-8">Victor Landim</h1>
    <div className="flex flex-col gap-6">
      <p>
        {`Hey, I'm Victor – a passionate Software Engineer and creative coder.\n`}
        {`I've been crafting web experiences for 6 years.\n`}
        <br />
        {"Working at "}
        <Link href="https://www.beachbody.com/" target="_blank">
          beachbody.com
        </Link>
        .
      </p>
      <p>
        {"Feel free to take a look at "}
        <Link href="/cv.pdf" target="_blank">
          my CV
        </Link>
        .
      </p>
      <p>
        {
          "Outside of programming I really enjoy hiking, making music and photography."
        }
        <br />
        {"You can check out my photos at "}
        <Link href="https://victor.photos" target="_blank">
          victor.photos
        </Link>
        .
      </p>
      <p>Currently exploring glsl shader art.</p>
    </div>
  </div>
);

const contact = () => (
  <div>
    <h3 className="text-xl font-bold mt-8 mb-4">Contact</h3>
    <p>
      Reach out at{" "}
      <Link href="mailto:hi@victorlandim.com">hi@victorlandim.com</Link> or at{" "}
      <Link href="https://www.linkedin.com/in/victor-landim" target="_blank">
        linkdin
      </Link>
      .
    </p>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col mb-40 lg:mt-24 mt-12">
      <Nabla />
      <div className="flex flex-col gap-6">
        {intro()}
        {contact()}
      </div>
    </div>
  );
}
