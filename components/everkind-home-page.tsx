import {
  ArrowRight,
  BedDouble,
  Brain,
  CalendarClock,
  Check,
  Clock3,
  Coffee,
  HandHeart,
  HeartHandshake,
  HeartPulse,
  Home,
  Mail,
  MapPin,
  MessageCircle,
  MessagesSquare,
  Phone,
  Pill,
  ShieldCheck,
  Sparkles,
  Star,
  UsersRound
} from "lucide-react";
import Image from "next/image";
import { CareEnquiryForm, CareerApplicationForm } from "./forms";
import { FAQAccordion } from "./faq-accordion";
import { MagneticAnchor, Reveal, Stagger, StaggerItem } from "./motion-primitives";
import { SiteHeader } from "./site-header";

const imageUrls = {
  hero: "/images/hero-care.svg",
  hands: "/images/hands-care.svg",
  family: "/images/family-care.svg",
  home: "/images/home-care.svg",
  carer: "/images/carer-care.svg"
};

const trustItems = [
  { icon: ShieldCheck, label: "CQC Registered Style Badge" },
  { icon: HeartHandshake, label: "Vetted Care Professionals" },
  { icon: CalendarClock, label: "Flexible Care Plans" },
  { icon: MessageCircle, label: "Family Communication" }
];

const problems = [
  {
    title: "Worried about safety at home?",
    copy:
      "We help reduce everyday risks with calm routines, mobility support, meal prompts and attentive check-ins that protect independence."
  },
  {
    title: "Need help with daily routines?",
    copy:
      "From mornings and medication reminders to meals, personal care and light household support, care is shaped around the way your loved one lives."
  },
  {
    title: "Looking for trusted dementia support?",
    copy:
      "Specialist carers use familiar routines, patient conversation and gentle reassurance to help families feel less alone."
  }
];

const services = [
  {
    icon: Home,
    title: "Daily Home Care",
    copy: "Reliable visits for meals, mobility, errands, personal routines and a reassuring presence at home."
  },
  {
    icon: BedDouble,
    title: "Live-In Care",
    copy: "Continuous one-to-one support for families who want their loved one to remain in familiar surroundings."
  },
  {
    icon: Brain,
    title: "Dementia Support",
    copy: "Calm, specialist care shaped around memory, reassurance, safety and consistent daily rhythms."
  },
  {
    icon: MessagesSquare,
    title: "Companionship",
    copy: "Conversation, outings, hobbies and meaningful time together to reduce loneliness and keep life feeling full."
  },
  {
    icon: HandHeart,
    title: "Personal Care",
    copy: "Respectful assistance with washing, dressing, continence care, grooming and confidence in private routines."
  },
  {
    icon: Coffee,
    title: "Respite Care",
    copy: "Short-term cover that gives family carers time to rest while their loved one remains carefully supported."
  },
  {
    icon: Pill,
    title: "Medication Reminders",
    copy: "Prompting and routine support that helps medication stay organised alongside wider daily care."
  },
  {
    icon: HeartPulse,
    title: "End-of-Life Care",
    copy: "Gentle, dignified support for families navigating comfort, presence and emotional care at home."
  }
];

const approach = [
  {
    title: "We listen first",
    copy: "A care conversation begins with the person, their home, family concerns and the details that make support feel respectful."
  },
  {
    title: "We create a personalised care plan",
    copy: "Every plan outlines routines, preferences, risk notes, companionship needs and the right level of practical help."
  },
  {
    title: "We match the right carer",
    copy: "Carers are matched for skill, personality, availability and the quiet chemistry that makes trust easier."
  },
  {
    title: "We support families continuously",
    copy: "Care coordinators keep plans under review and help families adapt as needs, timings or circumstances change."
  }
];

const familyTrust = [
  { icon: UsersRound, title: "Consistent carers", copy: "A familiar team wherever possible." },
  { icon: MessageCircle, title: "Transparent communication", copy: "Clear updates without chasing." },
  { icon: HandHeart, title: "Respectful personal care", copy: "Privacy, dignity and gentle routines." },
  { icon: Mail, title: "Regular family updates", copy: "Shared notes when families need them." },
  { icon: Clock3, title: "Flexible care hours", copy: "Visits shaped around real life." },
  { icon: MapPin, title: "Local care coordination", copy: "Support led by regional teams." },
  { icon: ShieldCheck, title: "Safeguarding-first approach", copy: "Care decisions made carefully." },
  { icon: Coffee, title: "Warm companionship", copy: "Human connection as part of care." }
];

const carePlans = [
  {
    title: "Visiting Care",
    bestFor: "Families who need reliable daily or weekly support while their loved one remains independent.",
    includes: ["Personal care and routines", "Meal support and hydration", "Medication reminders", "Companionship visits"]
  },
  {
    title: "Overnight Care",
    bestFor: "Families concerned about night-time safety, reassurance, toileting support or unsettled evenings.",
    includes: ["Sleeping or waking nights", "Safety checks", "Morning transitions", "Family handover notes"]
  },
  {
    title: "Live-In Care",
    bestFor: "Older adults who need continuous care and want to stay in the comfort of their own home.",
    includes: ["Dedicated live-in carer", "Daily routine support", "Companionship and outings", "Ongoing care coordination"]
  }
];

const testimonials = [
  {
    quote:
      "I was trying to arrange care for Mum while juggling work and children. EverKind explained everything calmly, matched her with a carer she genuinely likes, and gave our family breathing room again.",
    person: "Helen Ainsworth",
    role: "Daughter arranging care for her mother"
  },
  {
    quote:
      "Dad's dementia had made every week feel uncertain. The team brought structure without making the house feel clinical, and the updates helped me understand what was happening day to day.",
    person: "Marcus Ellery",
    role: "Son arranging dementia support for his father"
  },
  {
    quote:
      "Live-in care meant Gran could stay in the home she loves. The care feels gentle, practical and very human. We feel involved without having to manage every detail ourselves.",
    person: "The Whitcombe family",
    role: "Family using live-in care"
  }
];

const careerBenefits = [
  "Flexible shifts",
  "Training provided",
  "Supportive managers",
  "Meaningful work",
  "Career progression"
];

export function EverKindHomePage() {
  return (
    <main id="home" className="overflow-hidden">
      <SiteHeader />
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ApproachSection />
      <FamilyTrustSection />
      <CarePlansSection />
      <TestimonialsSection />
      <CareersSection />
      <FAQSection />
      <FinalCTASection />
      <ContactSection />
      <Footer />
      <StickyActions />
    </main>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-28">
      <div className="section-shell grid min-h-[calc(100dvh-7rem)] items-center gap-10 pb-12 lg:grid-cols-[1.02fr_0.98fr]">
        <Reveal className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold/12 px-4 py-2 text-sm font-semibold text-forest">
            <Sparkles size={16} strokeWidth={1.8} />
            Private care shaped around family peace
          </div>
          <h1 className="font-display text-[clamp(2.85rem,4.85vw,5.15rem)] leading-[0.96] tracking-[-0.03em] text-forest text-balance">
            Private Home Care Designed Around Dignity, Comfort & Family Peace of Mind
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted md:text-xl">
            EverKind provides personalised home care, companionship, dementia support, live-in care, and daily assistance for older adults across the UK.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <MagneticAnchor href="#contact">Arrange a Free Care Call</MagneticAnchor>
            <MagneticAnchor href="#services" variant="secondary">
              Explore Care Options
            </MagneticAnchor>
          </div>
        </Reveal>

        <Reveal className="relative" delay={0.12}>
          <div className="relative mx-auto max-w-[38rem] lg:mr-0">
            <div className="absolute -left-5 top-16 h-48 w-32 rounded-[3rem] bg-gold/20 blur-2xl" />
            <div className="absolute -bottom-6 -right-3 h-48 w-48 rounded-full bg-forest/12 blur-3xl" />
            <div className="image-lift grain-mask relative overflow-hidden rounded-[2.2rem] bg-sand">
              <Image
                src={imageUrls.hero}
                alt="An older woman smiling with family support in a warm home setting"
                width={1400}
                height={1200}
                priority
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="h-[34rem] w-full object-cover object-center sm:h-[42rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/55 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.6rem] border border-ivory/25 bg-forest/80 p-5 text-ivory backdrop-blur-sm">
                <p className="font-display text-3xl leading-none">Care begins with listening.</p>
                <p className="mt-2 text-sm leading-6 text-ivory/78">
                  A calm first conversation, then a plan built around the person you love.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal className="section-shell pb-8" delay={0.18}>
        <div className="grid gap-2 rounded-[1.4rem] border border-charcoal/10 bg-ivory/82 p-2 shadow-soft backdrop-blur md:grid-cols-4">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex items-center gap-3 rounded-[1rem] px-4 py-3">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-forest/8 text-forest">
                  <Icon size={18} strokeWidth={1.8} />
                </span>
                <span className="text-sm font-semibold text-charcoal">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}

function ProblemSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            For families noticing change
          </p>
          <h2 className="font-display text-[clamp(2.7rem,5vw,5rem)] leading-[0.98] tracking-[-0.025em] text-charcoal text-balance">
            When caring for a loved one becomes difficult, the right support changes everything.
          </h2>
        </Reveal>
        <Stagger className="grid gap-4">
          {problems.map((problem, index) => (
            <StaggerItem key={problem.title}>
              <article className="group grid gap-4 rounded-[1.6rem] border border-charcoal/10 bg-[#fff8ea]/74 p-6 shadow-[0_24px_80px_-64px_rgba(38,38,34,0.8)] transition duration-300 hover:-translate-y-1 hover:border-gold/45 md:grid-cols-[auto_1fr] md:p-8">
                <span className="grid size-12 place-items-center rounded-full bg-forest text-ivory transition-transform duration-300 group-hover:rotate-[-4deg]">
                  <span className="font-display text-2xl">{index + 1}</span>
                </span>
                <span>
                  <h3 className="font-display text-3xl text-forest">{problem.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-muted">{problem.copy}</p>
                </span>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="bg-forest py-24 text-ivory md:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Signature services
          </p>
          <h2 className="font-display text-[clamp(2.7rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.025em] text-balance">
            Practical support, delivered with uncommon warmth.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-ivory/13 border-y border-ivory/13">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={Math.min(index * 0.03, 0.18)}>
                <a
                  href="#contact"
                  className="group grid gap-5 py-7 transition duration-300 hover:bg-ivory/[0.035] md:grid-cols-[5rem_0.75fr_1.1fr_auto] md:items-center md:px-4"
                >
                  <span className="grid size-14 place-items-center rounded-full border border-ivory/18 bg-ivory/8 text-gold transition duration-300 group-hover:scale-105 group-hover:bg-gold group-hover:text-forest">
                    <Icon size={24} strokeWidth={1.65} />
                  </span>
                  <h3 className="font-display text-4xl leading-none md:text-5xl">{service.title}</h3>
                  <p className="max-w-2xl text-base leading-7 text-ivory/74">{service.copy}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold">
                    View details
                    <ArrowRight size={16} strokeWidth={1.8} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section id="approach" className="py-24 md:py-32">
      <div className="section-shell grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[2.2rem] bg-sand image-lift">
            <Image
              src={imageUrls.hands}
              alt="A carer gently holding an older adult's hands"
              width={1200}
              height={1000}
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="h-[31rem] w-full object-cover"
            />
          </div>
          <h2 className="mt-9 font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.95] tracking-[-0.025em] text-forest text-balance">
            Care that feels personal, not clinical.
          </h2>
        </Reveal>

        <div className="relative">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-1rem)] w-px bg-charcoal/12 md:block" />
          <Stagger className="grid gap-5">
            {approach.map((step, index) => (
              <StaggerItem key={step.title}>
                <article className="grid gap-5 rounded-[1.4rem] border border-charcoal/10 bg-ivory/72 p-6 md:grid-cols-[3rem_1fr] md:p-8">
                  <span className="relative z-[1] grid size-12 place-items-center rounded-full bg-gold text-forest">
                    <span className="font-display text-2xl">{index + 1}</span>
                  </span>
                  <span>
                    <h3 className="font-display text-4xl text-charcoal">{step.title}</h3>
                    <p className="mt-3 max-w-2xl text-base leading-7 text-muted md:text-lg">{step.copy}</p>
                  </span>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

function FamilyTrustSection() {
  return (
    <section id="families" className="bg-[#eee1cd] py-24 md:py-32">
      <div className="section-shell">
        <Reveal className="grid gap-7 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <h2 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95] tracking-[-0.025em] text-forest text-balance">
            Why families choose EverKind.
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted">
            Private care is deeply personal. Families choose EverKind when they want calm coordination, trusted carers and support that respects the home.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {familyTrust.map((item) => {
            const Icon = item.icon;
            return (
              <StaggerItem key={item.title}>
                <div className="border-t border-charcoal/14 pt-6">
                  <Icon className="mb-7 text-forest" size={28} strokeWidth={1.65} />
                  <h3 className="font-display text-3xl text-charcoal">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

function CarePlansSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Care plan comparison
          </p>
          <h2 className="font-display text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.96] tracking-[-0.025em] text-charcoal text-balance">
            Start with the level of support that fits this chapter.
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-5 lg:grid-cols-[1fr_1.12fr_1fr]">
          {carePlans.map((plan, index) => (
            <StaggerItem key={plan.title}>
              <article
                className={`flex h-full flex-col rounded-[1.8rem] border p-7 transition duration-300 hover:-translate-y-1 md:p-8 ${
                  index === 1
                    ? "border-forest bg-forest text-ivory shadow-soft lg:-mt-8"
                    : "border-charcoal/10 bg-[#fff8ea]/72 text-charcoal"
                }`}
              >
                <h3 className="font-display text-4xl">{plan.title}</h3>
                <p className={`mt-2 text-sm font-semibold ${index === 1 ? "text-gold" : "text-forest"}`}>
                  Custom quote after assessment.
                </p>
                <div className="mt-7">
                  <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${index === 1 ? "text-ivory/60" : "text-muted"}`}>
                    Best for
                  </p>
                  <p className={`mt-3 leading-7 ${index === 1 ? "text-ivory/78" : "text-muted"}`}>
                    {plan.bestFor}
                  </p>
                </div>
                <div className="mt-8">
                  <p className={`text-sm font-semibold uppercase tracking-[0.16em] ${index === 1 ? "text-ivory/60" : "text-muted"}`}>
                    What is included
                  </p>
                  <ul className="mt-4 grid gap-3">
                    {plan.includes.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Check className={index === 1 ? "text-gold" : "text-forest"} size={18} strokeWidth={1.8} />
                        <span className={index === 1 ? "text-ivory/82" : "text-charcoal/82"}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <MagneticAnchor
                  href="#contact"
                  variant={index === 1 ? "light" : "secondary"}
                  className="mt-9 w-full"
                >
                  Discuss This Care Plan
                </MagneticAnchor>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="relative bg-forest py-24 text-ivory md:py-32">
      <div className="absolute inset-y-0 right-0 hidden w-[44vw] overflow-hidden lg:block">
        <Image
          src={imageUrls.family}
          alt="Family members sharing a quiet moment together at home"
          width={1200}
          height={1200}
          sizes="44vw"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/80 to-forest/10" />
      </div>
      <div className="section-shell relative">
        <Reveal className="max-w-4xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Family words
          </p>
          <h2 className="font-display text-[clamp(2.7rem,5vw,5.2rem)] leading-[0.96] tracking-[-0.025em] text-balance">
            Reassurance families can feel in the everyday details.
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 lg:grid-cols-[1.1fr_0.9fr_1fr]">
          {testimonials.map((testimonial, index) => (
            <StaggerItem key={testimonial.person}>
              <figure className={`h-full rounded-[1.8rem] border border-ivory/13 bg-ivory/[0.055] p-7 backdrop-blur-sm ${index === 1 ? "lg:mt-12" : ""}`}>
                <div className="mb-8 flex gap-1 text-gold" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" strokeWidth={1.4} />
                  ))}
                </div>
                <blockquote className="font-display text-3xl leading-[1.12] text-pretty">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-8 border-t border-ivory/12 pt-5">
                  <p className="font-semibold text-ivory">{testimonial.person}</p>
                  <p className="mt-1 text-sm leading-6 text-ivory/62">{testimonial.role}</p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

function CareersSection() {
  return (
    <section id="careers" className="py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <div className="overflow-hidden rounded-[2.2rem] bg-sand image-lift">
            <Image
              src={imageUrls.carer}
              alt="A care professional smiling in a bright home environment"
              width={1200}
              height={1000}
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="h-[27rem] w-full object-cover object-center"
            />
          </div>
          <h2 className="mt-8 font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.95] tracking-[-0.025em] text-forest text-balance">
            Become part of a care team that values kindness.
          </h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {careerBenefits.map((benefit) => (
              <span
                key={benefit}
                className="rounded-full border border-forest/14 bg-forest/7 px-4 py-2 text-sm font-semibold text-forest"
              >
                {benefit}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-charcoal/10 bg-[#fff8ea]/78 p-6 shadow-soft md:p-9">
          <p className="mb-6 max-w-2xl text-lg leading-8 text-muted">
            We welcome carers who believe small details matter: arriving unrushed, listening properly and protecting dignity in every visit.
          </p>
          <CareerApplicationForm />
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="bg-[#eee1cd] py-24 md:py-32">
      <div className="section-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Questions families ask
          </p>
          <h2 className="font-display text-[clamp(2.7rem,5vw,5rem)] leading-[0.96] tracking-[-0.025em] text-forest">
            Clear answers before you decide.
          </h2>
        </Reveal>
        <Reveal>
          <FAQAccordion />
        </Reveal>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="section-shell">
        <Reveal className="relative overflow-hidden rounded-[2.4rem] bg-forest p-7 text-ivory shadow-soft md:p-14 lg:p-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
              <Image
                src={imageUrls.home}
                alt="A warm private home exterior representing care at home"
                width={1200}
                height={900}
                sizes="50vw"
                className="h-full w-full object-cover opacity-34"
              />
            <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/78 to-transparent" />
          </div>
          <div className="relative max-w-3xl">
            <h2 className="font-display text-[clamp(3rem,6vw,6rem)] leading-[0.92] tracking-[-0.03em]">
              Start with a simple conversation.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/76">
              Tell us what your loved one needs. We&apos;ll guide you through the next step with clarity, care, and no pressure.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <MagneticAnchor href="#contact" variant="light">
                Book a Free Care Call
              </MagneticAnchor>
              <MagneticAnchor href="tel:+442045768421" variant="ghost">
                Call the Care Team
              </MagneticAnchor>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactSection() {
  const details = [
    { icon: Phone, label: "Phone", value: "+44 20 4576 8421", href: "tel:+442045768421" },
    { icon: Mail, label: "Email", value: "hello@everkindhomecare.co.uk", href: "mailto:hello@everkindhomecare.co.uk" },
    { icon: MapPin, label: "Office location", value: "Marylebone, London W1", href: "#contact" },
    { icon: Clock3, label: "Opening hours", value: "Mon to Fri, 8am to 7pm", href: "#contact" }
  ];

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
        <Reveal>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-gold">
            Contact EverKind
          </p>
          <h2 className="font-display text-[clamp(2.8rem,5vw,5.2rem)] leading-[0.96] tracking-[-0.025em] text-forest text-balance">
            Private care guidance, without pressure.
          </h2>
          <div className="mt-9 grid gap-4">
            {details.map((detail) => {
              const Icon = detail.icon;
              return (
                <a
                  key={detail.label}
                  href={detail.href}
                  className="group flex items-center gap-4 rounded-[1.4rem] border border-charcoal/10 bg-[#fff8ea]/70 p-5 transition duration-300 hover:-translate-y-1 hover:border-gold/45"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-forest text-ivory">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-muted">{detail.label}</span>
                    <span className="block font-display text-2xl text-charcoal">{detail.value}</span>
                  </span>
                </a>
              );
            })}
          </div>
          <a
            href="#contact"
            className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-forest bg-forest px-6 py-3 text-sm font-semibold text-ivory transition duration-300 hover:bg-[#164534] active:translate-y-px"
          >
            <MessageCircle size={18} strokeWidth={1.8} />
            WhatsApp the care team
          </a>
        </Reveal>

        <Reveal className="rounded-[2rem] border border-charcoal/10 bg-[#fff8ea]/78 p-6 shadow-soft md:p-9">
          <CareEnquiryForm />
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  const serviceLinks = ["Daily Home Care", "Live-In Care", "Dementia Support", "Companionship"];
  const familyLinks = ["Care Assessment", "Family Updates", "Safeguarding", "Care Plan Reviews"];
  const legalLinks = ["Privacy Policy", "Safeguarding Policy", "Terms"];

  return (
    <footer className="bg-charcoal py-14 text-ivory">
      <div className="section-shell grid gap-10 lg:grid-cols-[1.2fr_0.7fr_0.7fr_0.9fr]">
        <div>
          <p className="font-display text-4xl">EverKind Home Care</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-ivory/62">
            Premium private home care for families who want dignity, comfort and calm coordination at home.
          </p>
        </div>
        <FooterColumn title="Care services" links={serviceLinks} />
        <FooterColumn title="Family support" links={familyLinks} />
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">Contact</p>
          <div className="mt-5 grid gap-3 text-sm text-ivory/70">
            <a href="tel:+442045768421">+44 20 4576 8421</a>
            <a href="mailto:hello@everkindhomecare.co.uk">hello@everkindhomecare.co.uk</a>
            <a href="#careers">Careers</a>
          </div>
        </div>
      </div>
      <div className="section-shell mt-12 flex flex-col gap-5 border-t border-ivory/12 pt-6 text-sm text-ivory/56 md:flex-row md:items-center md:justify-between">
        <p>&copy; 2026 EverKind Home Care. Demo frontend for private care agencies.</p>
        <div className="flex flex-wrap gap-4">
          {legalLinks.map((link) => (
            <a key={link} href="#contact" className="hover:text-ivory">
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">{title}</p>
      <div className="mt-5 grid gap-3 text-sm text-ivory/70">
        {links.map((link) => (
          <a key={link} href="#contact" className="transition hover:text-ivory">
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

function StickyActions() {
  return (
    <>
      <a
        href="#contact"
        className="fixed bottom-5 right-5 z-30 hidden size-14 items-center justify-center rounded-full bg-forest text-ivory shadow-[0_18px_50px_-24px_rgba(15,56,44,0.9)] transition duration-300 hover:-translate-y-1 md:flex"
        aria-label="WhatsApp EverKind Home Care"
      >
        <MessageCircle size={23} strokeWidth={1.8} />
      </a>
      <div className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-[1fr_auto] gap-2 rounded-full border border-charcoal/10 bg-ivory/90 p-2 shadow-soft backdrop-blur md:hidden">
        <a
          href="#contact"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-forest px-5 text-sm font-semibold text-ivory"
        >
          Arrange Care
        </a>
        <a
          href="tel:+442045768421"
          className="grid size-12 place-items-center rounded-full border border-charcoal/10 text-forest"
          aria-label="Call EverKind Home Care"
        >
          <Phone size={18} strokeWidth={1.8} />
        </a>
      </div>
    </>
  );
}
