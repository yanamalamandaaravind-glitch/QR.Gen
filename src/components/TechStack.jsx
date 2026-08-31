import { Code2, Server } from 'lucide-react';

export default function TechStack() {
  const frontend = ['HTML5', 'CSS', 'JavaScript', 'React', 'Tailwind CSS'];
  const backend = ['Java', 'Spring Boot', 'Hibernate', 'MySQL'];

  return (
    <section className="py-24 bg-slate-50" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Project Architecture</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Built with modern, reliable technologies for a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Frontend Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <Code2 className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Frontend</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {frontend.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Backend Card */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 relative overflow-hidden group">
            <div className="absolute top-4 right-4 bg-amber-100 text-amber-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Planned
            </div>
            <div className="flex items-center gap-4 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                <Server className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Backend</h3>
            </div>
            <div className="flex flex-wrap gap-3 opacity-60 group-hover:opacity-100 transition-opacity">
              {backend.map((tech) => (
                <span key={tech} className="px-4 py-2 bg-slate-100 text-slate-700 font-medium rounded-lg">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
