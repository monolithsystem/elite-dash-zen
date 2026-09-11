import { useState, useRef, useEffect } from "react";
import {
  Lock,
  LogOut,
  AlertCircle,
  Eye,
  EyeOff,
  Users,
  TrendingUp,
  AlertTriangle,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface DirectorViewProps {
  unlocked: boolean;
  onUnlock: (value: boolean) => void;
}

/* ── Dados locais estáveis (painel 100% nativo, sem Looker Studio) ───────── */

const PROCEDURE_DATA = [
  { name: "Limpeza", value: 12 },
  { name: "Aparelho", value: 8 },
  { name: "Geral", value: 15 },
  { name: "Implante", value: 5 },
  { name: "Estetica", value: 9 },
];

const STATUS_DATA = [
  { name: "Confirmados", value: 34, hex: "#F59E0B" },
  { name: "Pendentes", value: 6, hex: "#334155" },
];

/* ── Tooltip supremo de altíssimo luxo (vidro fluido de elite) ──────────── */

const TOOLTIP_CONTENT_STYLE = {
  backgroundColor: "rgba(10, 10, 10, 0.75)",
  backdropFilter: "blur(12px)",
  border: "1px solid rgba(212, 175, 55, 0.25)",
  borderRadius: "8px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
  padding: "6px 10px",
};

const TOOLTIP_LABEL_STYLE = {
  color: "#94A3B8",
  fontSize: "11px",
  fontWeight: "500",
  marginBottom: "2px",
};

const TOOLTIP_ITEM_STYLE = {
  color: "#F59E0B",
  fontSize: "12px",
  fontWeight: "700",
};

export function DirectorView({ unlocked, onUnlock }: DirectorViewProps) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [fading, setFading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const targetPin = (import.meta.env["VITE_DIRETOR_PIN"] as string | undefined) || "2008";
  const pinLength = targetPin.length;

  const handleUnlock = () => {
    if (pin === targetPin) {
      setFading(true);
      setTimeout(() => {
        onUnlock(true);
        setFading(false);
      }, 400);
      setError(false);
    } else {
      setError(true);
      setPin("");
      inputRef.current?.focus();
      setTimeout(() => setError(false), 2500);
    }
  };

  useEffect(() => {
    if (unlocked) return;
    if (pinLength > 0 && pin.length >= pinLength && /^\d+$/.test(pin)) {
      handleUnlock();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin, pinLength, unlocked]);

  useEffect(() => {
    if (!unlocked) {
      setPin("");
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [unlocked]);

  if (unlocked) {
    return (
      <DirectorDashboard
        onLogout={() => {
          onUnlock(false);
          setPin("");
        }}
      />
    );
  }

  return (
    <div
      className={cn(
        "flex min-h-screen items-center justify-center px-4 pt-16 transition-opacity duration-500",
        fading ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="w-full max-w-md animate-fade-in-up">
        <div className="relative overflow-hidden rounded-2xl border border-amber-500/10 bg-black/50 p-8 shadow-[0_0_15px_rgba(212,175,55,0.03)] backdrop-blur-lg">
          <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-gold opacity-[0.08] blur-3xl" />

          <div className="relative flex flex-col items-center text-center">
            <Lock className="h-10 w-10 text-gold" strokeWidth={1.25} />

            <h2 className="mt-6 font-serif text-2xl font-semibold tracking-tight text-foreground">
              Área Restrita
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Insira o código de acesso para visualizar o painel executivo
            </p>

            <div className="mt-8 w-full">
              <div className="relative">
                <input
                  ref={inputRef}
                  type={showPin ? "text" : "password"}
                  value={pin}
                  onChange={(e) => setPin(e.target.value.replace(/\D/g, ""))}
                  onKeyDown={(e) => e.key === "Enter" && handleUnlock()}
                  placeholder={"•".repeat(pinLength || 4)}
                  inputMode="numeric"
                  maxLength={pinLength || 8}
                  autoFocus
                  className={cn(
                    "h-14 w-full rounded-xl border bg-black/60 px-4 pr-12 text-center text-2xl font-semibold tracking-[0.4em] text-white transition-all duration-300 placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1",
                    error
                      ? "border-rose-700/50 focus:ring-rose-700/40"
                      : "border-amber-500/15 focus:border-amber-500/40 focus:ring-amber-500/30",
                  )}
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                >
                  {showPin ? (
                    <EyeOff className="h-4 w-4" strokeWidth={1.5} />
                  ) : (
                    <Eye className="h-4 w-4" strokeWidth={1.5} />
                  )}
                </button>
              </div>

              {error && (
                <div className="mt-3 flex animate-fade-in-up items-center justify-center gap-2 text-sm text-rose-400">
                  <AlertCircle className="h-4 w-4" strokeWidth={1.5} />
                  <span>Código incorreto. Tente novamente.</span>
                </div>
              )}

              <button
                onClick={handleUnlock}
                className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-gold text-sm font-semibold text-black transition-all duration-300 hover:shadow-glow-gold active:scale-[0.98]"
              >
                <Lock className="h-4 w-4" strokeWidth={1.75} />
                Desbloquear
              </button>
            </div>

            <p className="mt-6 text-xs text-muted-foreground/60">
              Acesso exclusivo para direção médica
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DirectorDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="mx-auto max-w-7xl animate-fade-in px-4 pt-28 pb-16 sm:px-6 lg:px-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Painel do Diretor
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Métricas executivas consolidadas da clínica
          </p>
        </div>
        <button
          onClick={onLogout}
          className="flex items-center gap-2 rounded-full border border-gold/10 bg-black/50 px-4 py-2.5 text-sm font-medium text-muted-foreground backdrop-blur-lg transition-all duration-300 hover:border-gold/25 hover:text-foreground"
        >
          <LogOut className="h-4 w-4" strokeWidth={1.5} />
          Bloquear
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <SummaryCard
          icon={<Users className="h-5 w-5" strokeWidth={1.5} />}
          label="Total Agendados"
          value={40}
          accent="border-l-4 border-l-amber-500"
          iconColor="text-amber-400"
        />
        <SummaryCard
          icon={<TrendingUp className="h-5 w-5" strokeWidth={1.5} />}
          label="Taxa de Confirmação"
          value="85%"
          accent="border-l-4 border-l-emerald-600/40"
          iconColor="text-emerald-400"
        />
        <SummaryCard
          icon={<AlertTriangle className="h-5 w-5" strokeWidth={1.5} />}
          label="Pendências de Confirmação"
          value={6}
          accent="border-l-4 border-l-rose-700/40"
          iconColor="text-rose-400"
        />
        <SummaryCard
          icon={<Repeat className="h-5 w-5" strokeWidth={1.5} />}
          label="Campanhas de Reativação"
          value={14}
          accent="border-l-4 border-l-slate-400/40"
          iconColor="text-slate-300"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Panel
          title="Procedimentos mais Procurados"
          subtitle="Volume por procedimento no período"
        >
          <div className="mt-4 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PROCEDURE_DATA} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
                <defs>
                  <linearGradient id="goldArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#D4AF37" stopOpacity={0.15} />
                    <stop offset="100%" stopColor="#D4AF37" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  stroke="rgba(255,255,255,0.05)"
                  strokeDasharray="3 3"
                />
                <XAxis
                  dataKey="name"
                  tickLine={false}
                  axisLine={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  allowDecimals={false}
                  tick={{ fontSize: 11, fill: "#94A3B8" }}
                />
                <Tooltip
                  cursor={{ stroke: "rgba(212,175,55,0.2)" }}
                  contentStyle={TOOLTIP_CONTENT_STYLE}
                  labelStyle={TOOLTIP_LABEL_STYLE}
                  itemStyle={TOOLTIP_ITEM_STYLE}
                />
                <Area
                  type="monotone"
                  dataKey="value"
                  name="Agendamentos"
                  stroke="#D4AF37"
                  strokeWidth={1}
                  fill="url(#goldArea)"
                  dot={false}
                  activeDot={{ r: 3, fill: "#D4AF37", stroke: "none" }}
                  animationDuration={900}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Status dos Agendamentos" subtitle="Distribuição de confirmações">
          <div className="mt-4 h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={STATUS_DATA}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={82}
                  outerRadius={96}
                  paddingAngle={2}
                  stroke="none"
                  animationDuration={900}
                >
                  {STATUS_DATA.map((entry) => (
                    <Cell key={entry.name} fill={entry.hex} />
                  ))}
                </Pie>
                <Tooltip
                  cursor={false}
                  contentStyle={TOOLTIP_CONTENT_STYLE}
                  labelStyle={TOOLTIP_LABEL_STYLE}
                  itemStyle={TOOLTIP_ITEM_STYLE}
                />
                <Legend
                  wrapperStyle={{ fontSize: "11px", color: "#94A3B8" }}
                  iconType="circle"
                  iconSize={8}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </div>
  );
}

function Panel({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <div className="animate-fade-in rounded-xl border border-amber-500/10 bg-black/50 p-6 shadow-[0_0_15px_rgba(212,175,55,0.03)] backdrop-blur-lg">
      <h2 className="font-serif text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>
      {children}
    </div>
  );
}

function SummaryCard({
  icon,
  label,
  value,
  accent,
  iconColor,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  accent: string;
  iconColor: string;
}) {
  return (
    <div
      className={cn(
        "group relative animate-fade-in overflow-hidden rounded-xl border border-amber-500/10 bg-black/50 p-5 shadow-[0_0_15px_rgba(212,175,55,0.03)] backdrop-blur-lg transition-all duration-500 hover:border-amber-500/20",
        accent,
      )}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            {label}
          </p>
          <p className="mt-2 font-serif text-3xl font-semibold text-white">{value}</p>
        </div>
        <div className={cn("shrink-0", iconColor)}>{icon}</div>
      </div>
    </div>
  );
}
