'use client';

// TEMP PATCH: removing broken db imports for clean build

export default function WorkspaceLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {/* Placeholder layout while db modules are rebuilt */}
      {children}
    </div>
  );
}
