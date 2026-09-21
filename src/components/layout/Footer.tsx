export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-center px-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Arayina. All rights reserved.
      </div>
    </footer>
  );
}