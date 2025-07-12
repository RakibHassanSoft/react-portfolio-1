import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  category: 'Branding' | 'Marketing' | 'Creative' | 'Visual';
  title: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    category: 'Branding',
    title: 'Pressed Juicery',
    imageUrl: 'https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    category: 'Marketing',
    title: 'Nouri Probiotic',
    imageUrl: 'https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    category: 'Creative',
    title: 'Joborba',
    imageUrl: 'https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    category: 'Visual',
    title: 'Visual X',
    imageUrl: 'https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    category: 'Branding',
    title: 'Juice Pop',
    imageUrl: 'https://th.bing.com/th/id/R.eeed0f38a43651ff834c82edff98566f?rik=9dgnK9RF33AwTA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-wC6M_4vZRsY%2fT2wQ85IW11I%2fAAAAAAAAGKM%2fy2R4nyW96Rg%2fs1600%2fCat-05.jpg&ehk=OIoBuajkA%2bckV20zAdo%2bSP3z4MPIuMtfg%2f82ojD0BoM%3d&risl=&pid=ImgRaw&r=0',
  },
];

const categories = ['All', 'Branding', 'Creative', 'Marketing', 'Visual'];

const FeaturedProjects: React.FC = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <section
      id="featured-projects"
      className="bg-gradient-to-r from-black to-green-800 text-white py-20 px-4 sm:px-6"
    >
      <div className="max-w-6xl mx-auto">
        <p className="text-sm text-gray-400 mb-2">Works</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">FEATURED PROJECTS</h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-10 text-sm font-medium">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-1 rounded-full border transition-all duration-200 ${
                activeTab === cat
                  ? 'bg-white text-black border-white font-bold'
                  : 'border-gray-100 text-gray-50 hover:bg-gray-800 font-bold'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Projects */}
        <motion.div
          layout
          className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title + idx}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="relative rounded-xl overflow-hidden bg-gray-800 group cursor-pointer"
                whileHover={{
                  scale: 1.03,
                  zIndex: 5,
                  boxShadow: '0 20px 30px rgba(0,255,170,0.15)',
                }}
              >
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-4">
                  <p className="text-xs text-gray-300">{project.category}</p>
                  <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
