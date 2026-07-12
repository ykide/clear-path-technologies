import { redirect } from "next/navigation";

type ServicesSlugRedirectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicesSlugRedirectPage({ params }: ServicesSlugRedirectPageProps) {
  const { slug } = await params;
  redirect(`/capabilities#${slug}`);
}

