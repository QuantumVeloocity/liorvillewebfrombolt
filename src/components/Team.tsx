import { User } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    { name: 'Team Member 1', role: 'Position Title' },
    { name: 'Team Member 2', role: 'Position Title' },
    { name: 'Team Member 3', role: 'Position Title' },
    { name: 'Team Member 4', role: 'Position Title' },
    { name: 'Team Member 5', role: 'Position Title' }
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-light text-[#1C1C1C] mb-6">
            Meet Our <span className="text-[#9B6FD9]">Team</span>
          </h2>
          <p className="text-xl text-[#1C1C1C]/70 max-w-3xl mx-auto font-light">
            A passionate group of strategists, analysts, and market experts dedicated to your success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="relative mb-6 overflow-hidden rounded-3xl bg-gradient-to-br from-[#9B6FD9]/10 to-purple-100/10 aspect-square flex items-center justify-center border border-[#9B6FD9]/20 group-hover:border-[#9B6FD9]/40 transition-all duration-300 group-hover:shadow-xl">
                <User className="w-20 h-20 text-[#9B6FD9]/40 group-hover:scale-110 transition-transform duration-300" strokeWidth={1} />
              </div>

              <h3 className="text-xl font-light text-[#1C1C1C] mb-2 group-hover:text-[#9B6FD9] transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-[#1C1C1C]/60 font-light text-sm">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
