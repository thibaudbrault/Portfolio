export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="mx-auto mb-3 mt-12 w-11/12 text-sm">
      <p>© Thibaud Brault | {year} | 👍 </p>
    </footer>
  );
};
