interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  center?: boolean;
  theme?: "light" | "dark";
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  center = true,
  theme = "light",
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : "text-left"}`}>
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] ${
            isDark ? "text-graphite-400" : "text-graphite-400"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.03em] ${
          isDark ? "text-white" : "text-graphite-900 dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg md:text-xl leading-relaxed ${
            isDark ? "text-graphite-300" : "text-graphite-500 dark:text-graphite-300"
          } ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
