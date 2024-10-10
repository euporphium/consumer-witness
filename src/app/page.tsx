export default function Home() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="mb-6 text-3xl">Consumer</h1>

      <nav>
        <ul>
          <li>
            <a
              href="/templates"
              className="text-blue-600 visited:text-purple-700"
            >
              Desktop Templates
            </a>
          </li>

          <li>
            <a
              href="/mobile/templates"
              className="text-blue-600 visited:text-purple-700"
            >
              Mobile Templates
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
