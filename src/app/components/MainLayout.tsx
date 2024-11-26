export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black overflow-hidden">
      <div
        className="absolute top-[-637px] left-[903px] w-[1202px] h-[1200px] rounded-full opacity-50 z-[1]"
        style={{
          background:
            "radial-gradient(circle closest-side, #F7931A, transparent)",
        }}
      />
      <div
        className="absolute top-[-737px] right-[803px] w-[1002px] h-[1000px] rounded-full opacity-50 z-[1]"
        style={{
          background:
            "radial-gradient(circle closest-side, #F7931A, transparent)",
        }}
      />
      {children}
    </main>
  );
};
