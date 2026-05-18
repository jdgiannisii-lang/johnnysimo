import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Iowa Hawkeyes Athletics",
    category: "Sports Cinematography",
    year: "2024",
    image: "https://picsum.photos/seed/hawkeyes24/1200/800",
  },
  {
    id: 2,
    title: "Saint Ignatius Football",
    category: "High School Athletics",
    year: "2023–24",
    image: "https://picsum.photos/seed/ignatfb24/800/1000",
  },
  {
    id: 3,
    title: "Flight Crew 319",
    category: "Team Video",
    year: "2024",
    image: "https://picsum.photos/seed/flightcrew319/800/1000",
  },
  {
    id: 4,
    title: "IFC Campaign",
    category: "Institutional Marketing",
    year: "2024",
    image: "https://picsum.photos/seed/ifccampaign/1200/800",
  },
  {
    id: 5,
    title: "Branded Content",
    category: "Commercial",
    year: "2023",
    image: "https://picsum.photos/seed/branded2023/1920/700",
  },
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path
        d="M2 7h10M8 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({
  project,
  className = "",
  height = 360,
}: {
  project: (typeof projects)[0];
  className?: string;
  height?: number;
}) {
  return (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-[4px] ${className}`}
      style={{ height }}
    >
      <Image
        src={project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1320px) 66vw, 880px"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.18) 50%, rgba(0,0,0,0.08) 100%)",
        }}
      />

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-between p-5 lg:p-6">
        {/* Top: category */}
        <span
          className="self-start rounded-[2px] px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.18em]"
          style={{
            color: "var(--accent)",
            background: "rgba(200,169,110,0.1)",
          }}
        >
          {project.category}
        </span>

        {/* Bottom: title + year + arrow */}
        <div>
          <h3
            className="mb-1 text-lg font-semibold leading-tight text-white transition-colors duration-200 group-hover:text-[var(--accent)]"
          >
            {project.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
              {project.year}
            </span>
            <span
              className="flex translate-x-2 items-center gap-1 text-sm text-white opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100"
            >
              View <ArrowIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section
      id="work"
      className="mx-auto px-8 py-28 lg:px-16"
      style={{ maxWidth: 1320 }}
    >
      {/* Section header */}
      <div className="mb-12 flex items-end justify-between">
        <div>
          <span className="section-label">Portfolio</span>
          <h2
            className="font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--text-1)",
            }}
          >
            Selected work
          </h2>
        </div>
        <a
          href="https://x.com/simoprods"
          target="_blank"
          rel="noopener noreferrer"
          className="hover-text-1 hidden items-center gap-2 text-sm md:inline-flex"
        >
          All projects <ArrowIcon />
        </a>
      </div>

      {/* Asymmetric grid */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {/* Row 1: featured (2 cols) + tall single */}
        <ProjectCard
          project={projects[0]}
          className="md:col-span-2"
          height={380}
        />
        <ProjectCard project={projects[1]} height={380} />

        {/* Row 2: tall single + featured (2 cols) */}
        <ProjectCard project={projects[2]} height={380} />
        <ProjectCard
          project={projects[3]}
          className="md:col-span-2"
          height={380}
        />

        {/* Row 3: full-width wide shot */}
        <ProjectCard
          project={projects[4]}
          className="md:col-span-3"
          height={260}
        />
      </div>
    </section>
  );
}
