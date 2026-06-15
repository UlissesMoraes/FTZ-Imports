interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-graphite-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-graphite-900 dark:text-white">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg text-graphite-500 dark:text-graphite-300 ${
            center ? "mx-auto max-w-2xl" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
