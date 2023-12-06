// import '../styles/globals.css';
import '../../styles/globals.css';
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <section>
          { children}
    </section>
  );
}