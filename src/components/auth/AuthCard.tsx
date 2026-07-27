type AuthCardProps = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
};

export default function AuthCard({
  title,
  subtitle,
  children,
}: AuthCardProps) {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6">
      <div className="w-full max-w-md rounded-3xl border border-purple-500/20 bg-white/5 p-6 backdrop-blur">
        <h1 className="text-2xl font-bold text-white">
          {title}
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          {subtitle}
        </p>

        <div className="mt-6">
          {children}
        </div>
      </div>
    </div>
  );
}
