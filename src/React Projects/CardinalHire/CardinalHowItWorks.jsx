import bgImage from "./how-it-works-bg.png";
import cardin from "./cardin.png";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import linkedin from "./linkedin.png";
import union from "./union.png";
import EmblaCarousel from "./EmblaCarousel";
import cardinPhone from "./cardin-phone.png";
import mail from "./email_icon.png";
import resume from "./resume-lg.png";
import commentBox from "./comment-box.png";
import applicationChart from "./applicatoin-chart.png";

const OPTIONS = { align: "start", loop: false };
const SLIDES = [
  {
    image: resume,
    title: "Share your resume and contact info",
    description:
      "Use what you have, but be sure it reflects your most recent experiences. We’ll help you perfect your resume later on.",
  },
  {
    image: cardinPhone,
    title: "Cardin will give you a call",
    description:
      "She’ll get to know what you’re looking for. Share your goals and experiences, so that we can send the right connections your way.",
  },
  {
    image: mail,
    title: "Get introduced to professionals at top companies",
    description:
      "Gain access to exclusive networking opportunities that fit your unique goals.",
  },
];

export default function CardinalHowItWorks() {
  return (
    <div className="bg-gray-50">
      <div className="container min-h-screen px-4 py-10 mx-auto sm:px-6 lg:px-8 space-y-9">
        <section className="relative text-white">
          <div className="relative w-full overflow-hidden">
            <img
              src={bgImage}
              alt="Background"
              className="object-cover w-full"
            />

            <div className="absolute inset-0 px-4 py-8 sm:px-6 lg:px-8">
              <div className="z-20 flex flex-col justify-center h-full">
                <h1 className="font-semibold text-7xl">How does it work?</h1>
                <p className="text-2xl my-30">
                  Leverage the power of AI for your next job or candidate
                  search!
                </p>
                <p className="flex items-center space-x-3 text-2xl">
                  <span>Check out our socials:</span>
                  <span className="flex space-x-4">
                    <span>
                      <img src={facebook} className="size-8" alt="Facebook" />
                    </span>
                    <span>
                      <img src={instagram} className="size-8" alt="Instagram" />
                    </span>
                    <span>
                      <img src={linkedin} className="size-8" alt="LinkedIn" />
                    </span>
                  </span>
                </p>
              </div>
            </div>

            <div>
              <div className="absolute top-10 right-76 w-fit">
                <img src={union} className="w-60" alt="union" />
              </div>
              <p className="absolute text-2xl font-semibold text-black top-18 right-80 text-bla">
                Hi! I'm Cardin, your <br /> virtual recruiter pal.
              </p>

              <img
                src={cardin}
                className="absolute bottom-0 right-0"
                alt="Cardin"
              />
            </div>
          </div>
        </section>

        <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        <section className="px-20 mx-auto text-center max-w-fit">
          <h1 className="mb-3 text-5xl font-semibold text-red-500">Tools for everyone</h1>
          <p className="mb-6 text-xl">
            No matter if you’re a candidate, an employer, or a recruiter, <br />
            CardinalTalent has your back!
          </p>

          <div className="grid grid-cols-2 grid-rows-2 gap-8">
            <div className="flex flex-col items-center justify-between row-span-2 p-4 space-y-2 bg-blue-100 rounded-lg shadow-md">
              <div>
                <p className="-mb-20 text-2xl">
                  “I am a professional looking <br /> for my next career <br />{" "}
                  opportunity”
                </p>
                <img src={commentBox} />
              </div>

              <p className="mt-4 text-2xl">
                Over{" "}
                <span className="text-4xl font-semibold text-blue-500">
                  23%
                </span>{" "}
                percent of job applications <br /> through Cardinal result in an
                interview!
              </p>

              <img src={applicationChart} className="my-3" />

              <a href="#" className="mt-3 text-base text-blue-500 underline">
                See more...
              </a>
            </div>

            <div className="flex flex-col items-center justify-between col-start-2 row-start-1 p-4 bg-blue-100 rounded-lg shadow-md">
              <div>
                <p className="-mb-12 text-2xl">
                  “I am an independent <br /> recruiter”
                </p>
                <img src={commentBox} className="scale-x-[-1]" />
              </div>
              <p className="mt-4 text-2xl">
                Earn up to{" "}
                <span className="text-4xl font-semibold text-blue-500">
                  $10,000
                </span>{" "}
                by <br /> referring people you know!
              </p>

              <a href="#" className="mt-3 text-base text-blue-500 underline">
                See more...
              </a>
            </div>

            <div className="flex flex-col items-center justify-between col-start-2 row-start-2 p-4 bg-blue-100 rounded-lg shadow-md">
              <div>
                <p className="-mb-12 text-2xl">
                  “I work for an organization <br /> that is hiring”
                </p>
                <img src={commentBox} />
              </div>
              <p className="mt-4 text-2xl">
                Connect yourself with over <br />
                <span className="text-4xl font-semibold text-blue-500">
                  23788
                </span>{" "}
                top candidates today!
              </p>
              <a href="#" className="mt-3 text-base text-blue-500 underline">
                See more...
              </a>{" "}
            </div>
          </div>
        </section>

        <section className="text-center">
          <h1 className="mb-3 text-5xl font-medium text-red-500">Have more questions?</h1>
          <p className="text-xl font-light">
            Check out our{" "}
            <a className="font-medium text-blue-500 underline">FAQs</a> page for
            more!
          </p>
        </section>
      </div>
    </div>
  );
}
