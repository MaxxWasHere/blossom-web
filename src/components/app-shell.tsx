import { Titlebar } from "./titlebar";
import { Sidebar } from "./sidebar";
import { Footer } from "./footer";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--bg-root)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1280,
          margin: "0 auto",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          minWidth: 0,
        }}
      >
        <Titlebar />
        <div style={{ display: "flex", alignItems: "flex-start", flex: 1, minWidth: 0 }}>
          <Sidebar />
          <main style={{ flex: 1, minWidth: 0 }}>
            {children}
            <Footer />
          </main>
        </div>
      </div>
    </div>
  );
}
