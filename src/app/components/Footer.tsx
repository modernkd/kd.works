export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 mt-8 py-6">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex justify-center gap-6 mb-4">
          <a
            href="https://github.com/modernkd"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/kd-davis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://kd.works"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            kd.works
          </a>
        </div>
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} kd davis
        </p>
      </div>
    </footer>
  );
}
