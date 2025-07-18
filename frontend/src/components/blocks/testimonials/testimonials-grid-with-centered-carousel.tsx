"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import { Transition } from "@headlessui/react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-background">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-[--color-deep-charcoal] text-lg md:text-2xl">
          Trusted by Bitcoin DeFi pioneers
        </h1>
        <p className="text-base text-[--color-text-secondary]">
          Leading Bitcoin holders, DeFi farmers, and wallet partners rely on our decentralized lending protocol.
        </p>
      </div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-[--color-text-secondary] opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};
export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-border bg-card shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-[--color-deep-charcoal] py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-[--color-text-secondary] max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Marcus Chen",
    quote:
      "The first truly decentralized Bitcoin lending protocol I trust with my BTC. The transparency and security measures are unmatched.",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Bitcoin Investor",
  },
  {
    name: "Sarah Rodriguez",
    quote:
      "Consistent yields and transparent operations make this my preferred lending platform. The returns are reliable and the risk management is excellent.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "DeFi Yield Farmer",
  },
  {
    name: "Alex Thompson",
    quote:
      "Seamless integration with our ICP wallet infrastructure. The API is robust and the technical support team is incredibly knowledgeable.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Wallet Integration Partner",
  },
  {
    name: "David Kim",
    quote:
      "Finally, a Bitcoin DeFi protocol that doesn't compromise on decentralization. I can sleep soundly knowing my assets are secure.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Bitcoin Investor",
  },
  {
    name: "Lisa Johnson",
    quote:
      "The user experience is intuitive and the yield farming opportunities are diverse. It's refreshing to see such attention to user needs.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "DeFi Yield Farmer",
  },
  {
    name: "Michael Zhang",
    quote:
      "Our users love the seamless Bitcoin lending experience. The integration was smooth and the ongoing support has been exceptional.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Wallet Integration Partner",
  },
  {
    name: "Emma Wilson",
    quote:
      "Trust is everything in DeFi, and this protocol delivers. The smart contract audits and transparent governance give me confidence.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Bitcoin Investor",
  },
  {
    name: "Robert Garcia",
    quote:
      "The yields are competitive and the platform is rock-solid. I've been farming here for months with zero issues.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "DeFi Yield Farmer",
  },
  {
    name: "Jennifer Lee",
    quote:
      "The technical documentation is excellent and the integration process was straightforward. Our developers were impressed.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Wallet Integration Partner",
  },
  {
    name: "Thomas Brown",
    quote:
      "As a long-term Bitcoin holder, I appreciate the non-custodial approach and the ability to earn yield without giving up control.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Bitcoin Investor",
  },
  {
    name: "Anna Martinez",
    quote:
      "The platform offers diverse strategies and the risk-adjusted returns are impressive. It's become my primary DeFi destination.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "DeFi Yield Farmer",
  },
  {
    name: "James Taylor",
    quote:
      "The partnership has been seamless. Our users get access to best-in-class Bitcoin lending with minimal friction.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Wallet Integration Partner",
  },
  {
    name: "Sophie Anderson",
    quote:
      "The security audits and transparent operations give me peace of mind. This is how Bitcoin DeFi should be done.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Bitcoin Investor",
  },
  {
    name: "Chris Miller",
    quote:
      "Excellent yields with professional-grade risk management. The team clearly understands the DeFi landscape.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "DeFi Yield Farmer",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}

          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-[--color-bitcoin-orange]/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-background after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <img
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="text-base text-[--color-deep-charcoal] md:text-xl font-bold">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border border-transparent text-[--color-text-secondary] transition duration-150 ease-in-out bg-card relative before:absolute before:inset-0 before:bg-[--color-text-secondary]/10 before:rounded-full before:pointer-events-none ${
                      active === index
                        ? "border-[--color-bitcoin-orange]/50 text-[--color-bitcoin-orange]"
                        : "border-transparent opacity-70"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-[--color-deep-charcoal] font-bold">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};