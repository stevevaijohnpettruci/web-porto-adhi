import { useLanguage } from '../../context/LanguageContext';

function ProjectCard({ project, onView }) {
  const { language, t } = useLanguage();
  const category =
    language === 'id' && project.category_id
      ? project.category_id
      : project.category;

  return (
    <div
      onClick={() => onView(project.id)}
      className="group relative rounded-xl overflow-hidden cursor-pointer bg-[var(--clr-surface)] border border-[rgba(255,255,255,0.05)] transition-colors duration-300 h-full min-h-[360px] md:min-h-full hover:border-[rgba(255,255,255,0.1)]"
    >
      <img
        src={`/image/${project.imageId[0]}`}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[650ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-all duration-400 group-hover:from-black/90 group-hover:via-black/45 group-hover:to-black/10" />

      <div className="absolute top-5 right-5 font-[var(--font-display)] text-xs font-semibold tracking-widest text-[rgba(255,255,255,0.2)]">
        0{project.index + 1}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-7">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-[var(--font-body)] text-[11px] font-medium text-[rgba(255,255,255,0.45)] tracking-widest uppercase mb-2">
              {category} — {project.year}
            </p>
            <h3 className="font-[var(--font-display)] font-bold text-[26px] tracking-tight text-white m-0 leading-tight">
              {project.title}
            </h3>
          </div>
          <div className="px-[18px] py-[10px] rounded-full bg-[var(--clr-accent)] text-[#080809] font-[var(--font-body)] text-[13px] font-medium whitespace-nowrap shrink-0 flex items-center gap-1.5 opacity-0 translate-y-2.5 scale-95 transition-all duration-[320ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100">
            {t('projectsSection.viewCaseStudy')}
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path
                d="M1.5 9.5L9.5 1.5M9.5 1.5H3.5M9.5 1.5V7.5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
