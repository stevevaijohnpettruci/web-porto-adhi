import ProjectHero from '../components/sections/ProjectHero';
import ProjectMeta from '../components/sections/ProjectMeta';
import CaseStudyContent from '../components/sections/CaseStudyContent';
import NextProjectTeaser from '../components/sections/NextProjectTeaser';
// Pastikan path import ini sesuai dengan lokasi file useProjectsData kamu
import { useProjectsData } from '../data/projects'; 

function DetailPage({ project, onViewProject }) {
  // 1. Panggil hook untuk mengekstrak array PROJECTS
  const { PROJECTS } = useProjectsData();

  // 2. Sekarang variabel PROJECTS sudah tersedia dan bisa digunakan untuk mencari nextProject
  const nextProject = PROJECTS[(project.index + 1) % PROJECTS.length];

  return (
    <main>
      <ProjectHero project={project} />
      <ProjectMeta project={project} />
      <CaseStudyContent project={project} />
      <NextProjectTeaser project={nextProject} onView={onViewProject} />
    </main>
  );
}

export default DetailPage;