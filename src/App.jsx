import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import DetailPage from './pages/DetailPage';
import Nav from './components/layout/Nav';
// 1. Ubah import statis menjadi import hook
import { useProjectsData } from './data/projects'; 

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [view, setView] = useState('landing');
  const [projectId, setProjectId] = useState(null);

  // 2. Panggil hook untuk mendapatkan array PROJECTS
  const { PROJECTS } = useProjectsData();

  const handleViewProject = (id) => {
    setProjectId(id);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setView('landing');
    setProjectId(null);
    window.scrollTo({ top: 0 });
  };

  // Variabel PROJECTS sekarang sudah tersedia dan akan otomatis menyesuaikan bahasa
  const currentProject = PROJECTS.find((p) => p.id === projectId);

  return (
    <div className="bg-[var(--clr-bg)] min-h-screen text-[var(--clr-text)]">
      <Nav
        onLogoClick={handleBack}
        showBack={view === 'detail'}
        onBack={handleBack}
      />
      {view === 'landing' ? (
        <LandingPage onViewProject={handleViewProject} />
      ) : currentProject ? (
        <DetailPage
          project={currentProject}
          onViewProject={handleViewProject}
        />
      ) : null}
    </div>
  );
}