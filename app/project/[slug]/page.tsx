import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { projects, getProjectBySlug } from "@/lib/projects";
import ProjectDetailContent from "@/components/ProjectDetailContent";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const slug = (await params).slug;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <Suspense fallback={null}>
      <ProjectDetailContent project={project} />
    </Suspense>
  );
}
