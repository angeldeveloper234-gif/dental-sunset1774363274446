export function ClinicMetrics() {
  return (
    <div className="grid grid-cols-3 gap-3 rounded-3xl border border-primary/10 bg-white p-5 sm:gap-6 sm:p-7">
      {[
        { value: "+500", label: "Pacientes tratados" },
        { value: "+15", label: "Años de experiencia" },
        { value: "8", label: "Áreas de atención" },
      ].map(({ value, label }) => (
        <div key={label} className="text-center">
          <p className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">{value}</p>
          <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">{label}</p>
        </div>
      ))}
    </div>
  );
}
