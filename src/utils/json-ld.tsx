import Script from "next/script";

type JsonLdProps = {
  data: object;
  id: string;
};

function removeEmptyValues(value: unknown): unknown {
  if (Array.isArray(value)) {
    return value
      .map(removeEmptyValues)
      .filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value)
        .map(([key, item]) => [key, removeEmptyValues(item)])
        .filter(([, item]) => item !== undefined)
    );
  }

  return value === null || value === "" ? undefined : value;
}

export function JsonLd({ data, id }: JsonLdProps) {
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(removeEmptyValues(data)),
      }}
    />
  );
}
