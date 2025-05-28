import { FaXTwitter } from "react-icons/fa6";

export default function AuthLayout({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="flex flex-row items-center justify-center h-screen space-x-30">
        <FaXTwitter size={400} />
        <div className="flex flex-col justify-start space-y-4">
          <h1 className="font-extrabold text-6xl">{title}</h1>
          <h2 className="font-extrabold text-4xl">{subtitle}</h2>
          {children}
        </div>
      </div>
      <footer className="flex text-xs bg-gray-100 text-gray-600 px-20 py-5">
        <nav>
          <a href="#">About | </a>
          <a href="#">Download the X app | </a>
          <a href="#">Grok | </a>
          <a href="#">Help Center | </a>
          <a href="#">Terms of Service | </a>
          <a href="#">Privacy Policy | </a>
          <a href="#">Switch Policy | </a>
          <a href="#">Accessibility | </a>
          <a href="#">Adviser | </a>
          <a href="#">Blog | </a>
          <a href="#">Camera | </a>
          <a href="#">Brand Resources | </a>
          <a href="#">Advantage | </a>
          <a href="#">Marketing | </a>
          <a href="#">Web Business | </a>
          <a href="#">Development | </a>
          <a href="#">Directory | </a>
          <a href="#">Settings | </a>
          <a>@2025 X Copy</a>
        </nav>
      </footer>
    </main>
  );
}
