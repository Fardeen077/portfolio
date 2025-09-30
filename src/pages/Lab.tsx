import { labProject } from "@/data/labProject"
import type { Project } from "@/data"
import { motion } from "framer-motion"

export default function Lab() {
  return (
    <div className="w-full">
      {labProject.map((item: Project, index: number) => {
        const isEven = index % 2 === 0; // alternate layout

        return (
          <div
            key={item.id}
            className={`mt-32 px-16 flex flex-col md:flex-row items-center gap-8 ${
              isEven ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Text Section */}
            <motion.div
              initial={{ x: isEven ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>

            {/* Image Section */}
            <motion.div
              initial={{ x: isEven ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="w-full md:w-1/2"
            >
              {item.images.map((img, i) => (
                <img
                  key={i}
                  src={img.src}
                  alt={`project-${i}`}
                  className="w-full rounded-2xl object-cover"
                />
              ))}
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
