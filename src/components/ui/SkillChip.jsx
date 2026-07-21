function SkillChip({ label }) {
  return (
    <span className="font-[var(--font-body)] text-sm text-white/60 border border-white/10 bg-white/5 px-[18px] py-2 rounded-full inline-block cursor-default tracking-wide transition-all duration-200 hover:text-[var(--clr-text)] hover:border-[#00D4FF]/35 hover:bg-[#00D4FF]/5">
      {label}
    </span>
  );
}

export default SkillChip;
