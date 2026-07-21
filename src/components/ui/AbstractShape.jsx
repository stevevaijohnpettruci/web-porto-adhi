import { motion } from 'framer-motion';

function AbstractShape({ size = 480 }) {
  const s = size;
  const cx = s / 2;
  const cy = s / 2;
  const r1 = s * 0.417;
  const r2 = s * 0.333;
  const r3 = s * 0.25;

  return (
    <div className="relative" style={{ width: s, height: s }}>
      {/* 1. Ambient Glow (Animasi Pulse Membesar/Mengecil) */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          width: s * 0.58,
          height: s * 0.58,
          background:
            'radial-gradient(circle, rgba(0,212,255,0.18) 0%, rgba(0,212,255,0.05) 50%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* 2. Main SVG (Animasi Rotasi Lambat Searah Jarum Jam) */}
      <motion.svg
        width={s}
        height={s}
        viewBox={`0 0 ${s} ${s}`}
        fill="none"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <circle
          cx={cx}
          cy={cy}
          r={r1}
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
        <circle
          cx={cx}
          cy={cy}
          r={r2}
          stroke="rgba(0,212,255,0.22)"
          strokeWidth="1"
        />

        {/* 3. Dashed Circle (Animasi Rotasi Berlawanan Arah Jarum Jam) */}
        <motion.circle
          cx={cx}
          cy={cy}
          r={r3}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
          strokeDasharray="3 9"
          animate={{ rotate: -360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />

        {/* 4. Cyan Arc (Animasi Pulse Opacity) */}
        <motion.path
          d={`M ${cx} ${cy - r2} A ${r2} ${r2} 0 0 1 ${cx + r2} ${cy}`}
          stroke="#00D4FF"
          strokeWidth="2"
          strokeLinecap="round"
          animate={{ opacity: [0.85, 0.3, 0.85] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        <motion.path
          d={`M ${cx} ${cy + r2} A ${r2} ${r2} 0 0 1 ${cx - r2} ${cy}`}
          stroke="rgba(0,212,255,0.25)"
          strokeWidth="1"
          strokeLinecap="round"
          animate={{ opacity: [0.85, 0.3, 0.85] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.line
          x1={cx - r1 - 10}
          y1={cy}
          x2={cx + r1 + 10}
          y2={cy}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
         
        />
        <motion.line
          x1={cx}
          y1={cy - r1 - 10}
          x2={cx}
          y2={cy + r1 + 10}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth="1"
          a
        />
        <motion.ellipse
          cx={cx}
          cy={cy}
          rx={r1 * 1.04}
          ry={r1 * 0.46}
          stroke="rgba(255,255,255,0.045)"
          strokeWidth="1"
          transform={`rotate(-28 ${cx} ${cy})`}
          animate={{ rotate: 360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <circle
          cx={cx + r1 * 0.74}
          cy={cy - r1 * 0.56}
          r={s * 0.014}
          fill="rgba(0,212,255,0.65)"
        />
        <circle
          cx={cx + r1 * 0.74}
          cy={cy - r1 * 0.56}
          r={s * 0.03}
          stroke="rgba(0,212,255,0.2)"
          strokeWidth="1"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <circle cx={cx} cy={cy} r={s * 0.012} fill="#00D4FF" />
        <circle
          cx={cx}
          cy={cy}
          r={s * 0.042}
          stroke="rgba(0,212,255,0.28)"
          strokeWidth="1"
          fill="none"
        />
        <circle
          cx={cx}
          cy={cy - r2}
          r={s * 0.008}
          fill="rgba(0,212,255,0.55)"
        />
        <circle
          cx={cx + r2}
          cy={cy}
          r={s * 0.008}
          fill="rgba(0,212,255,0.35)"
        />
        <circle
          cx={cx}
          cy={cy + r2}
          r={s * 0.007}
          fill="rgba(255,255,255,0.2)"
        />
        <circle
          cx={cx - r2}
          cy={cy}
          r={s * 0.007}
          fill="rgba(255,255,255,0.15)"
        />
        <line
          x1={cx}
          y1={cy - r2 - 4}
          x2={cx}
          y2={cy - r2 - 12}
          stroke="rgba(0,212,255,0.6)"
          strokeWidth="2"
        />
        <line
          x1={cx + r2 + 4}
          y1={cy}
          x2={cx + r2 + 12}
          y2={cy}
          stroke="rgba(0,212,255,0.4)"
          strokeWidth="1.5"
        />
        <rect
          x={cx + r2 * 0.5 - 3}
          y={cy - r2 * 0.5 - 3}
          width="6"
          height="6"
          fill="rgba(0,212,255,0.18)"
          transform={`rotate(45 ${cx + r2 * 0.5} ${cy - r2 * 0.5})`}
        />
        <rect
          x={cx - r2 * 0.5 - 3}
          y={cy + r2 * 0.5 - 3}
          width="6"
          height="6"
          fill="rgba(255,255,255,0.1)"
          transform={`rotate(45 ${cx - r2 * 0.5} ${cy + r2 * 0.5})`}
        />
      </motion.svg>
    </div>
  );
}

export default AbstractShape;
