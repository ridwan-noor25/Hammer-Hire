import React from 'react';

const projects = [
  {
    id: 1,
    title: 'High-Rise Apartment Complex',
    location: 'Westlands, Nairobi',
    image: 'https://media.istockphoto.com/id/2012482489/photo/office-skyscraper-in-new-york-city-manhattan.jpg?s=1024x1024&w=is&k=20&c=wMhz3ASkn6zvKCEkdBJ-tXwTTeAjz74LcPme0OCc2RQ=',
    description: 'A 20-floor residential complex with modern amenities.',
  },
  {
    id: 2,
    title: 'Industrial Warehouse',
    location: 'Industrial Area, Nairobi',
    image: 'https://images.unsplash.com/photo-1715696161726-e94cfa8cdd06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Large-scale storage warehouse for logistics operations.',
  },
  {
    id: 3,
    title: 'Commercial Mall Renovation',
    location: 'Karen, Nairobi',
    image: 'https://images.unsplash.com/photo-1624347652947-2982764f0250?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Full interior and exterior renovation of a shopping mall.',
  },
  {
    id: 4,
    title: 'Road Infrastructure Upgrade',
    location: 'Mombasa Road, Nairobi',
    image: 'https://media.istockphoto.com/id/2176257923/photo/highway-road-worker-in-construction-zone-holding-stop-sign.jpg?s=1024x1024&w=is&k=20&c=2-Agk0X3WduQhGvvmFQ2YVUa_YNolCHDb4t9q6nk3To=',
    description: 'Upgraded major highway sections to improve traffic flow.',
  },
  {
    id: 5,
    title: 'Luxury Villas Development',
    location: 'Runda, Nairobi',
    image: 'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Exclusive residential villas with smart home features.',
  },
  {
    id: 6,
    title: 'Corporate Office Complex',
    location: 'Upper Hill, Nairobi',
    image: 'https://plus.unsplash.com/premium_photo-1661958068511-94e74df3a799?q=80&w=2087&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: 'Modern office space with green building certification.',
  },
];

function Projects() {
  return (
    <section className="bg-white py-20 px-4 md:px-20 mt-7">
      <div className="max-w-7xl mx-auto">
        {/* Intro */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-black tracking-tight">Our Projects</h2>
          <p className="text-black mt-4 max-w-2xl mx-auto text-lg">
            At <span className="font-semibold text-yellow-400">Hammer-Hire</span>, every project reflects our dedication to quality and innovation. Discover the iconic developments shaping Nairobi’s skyline.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white border border-yellow-400 rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-t-2xl w-full h-56 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-1">{project.title}</h3>
                <p className="text-sm text-yellow-400 font-medium mb-3">{project.location}</p>
                <p className="text-black text-sm leading-relaxed">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="bg-yellow-400 text-black font-semibold px-8 py-3 rounded-full hover:bg-black hover:text-white transition duration-300 shadow-md hover:shadow-lg">
            View More Projects
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
