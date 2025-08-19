import Link from "next/link";

const techLinks: Record<string, string> = {
  "Next.js": "https://nextjs.org",
  "React.js": "https://react.dev",
  TypeScript: "https://www.typescriptlang.org",
  "Tailwind CSS": "https://tailwindcss.com",
};

const highlights: string[] = ["PT. IRITEK"]; // hanya highlight, tanpa link

export function parseTextWithLinks(text: string) {
  const regex = new RegExp(
    `(${[...Object.keys(techLinks), ...highlights].join("|")})`,
    "g"
  );

  const parts = text.split(regex);

  return parts.map((part, i) => {
    if (techLinks[part]) {
      // Kalau ada link
      return (
        <Link
          key={i}
          href={techLinks[part]}
          target="_blank"
          className="text-teal-300"
        >
          {part}
        </Link>
      );
    }

    if (highlights.includes(part)) {
      // Kalau highlight saja (tanpa link)
      return (
        <span key={i} className="font-semibold text-teal-300">
          {part}
        </span>
      );
    }

    return part; // sisanya teks biasa
  });
}
