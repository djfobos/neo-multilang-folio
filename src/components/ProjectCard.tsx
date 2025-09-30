import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent, CardFooter } from './ui/card';
import type { Project } from '@/data/projects';

interface ProjectCardProps {
  project: Project;
  lang: 'ka' | 'ru' | 'en';
}

export const ProjectCard = ({ project, lang }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Card className="group overflow-hidden hover-lift h-full flex flex-col">
        {/* Cover Image */}
        <div className="relative aspect-video overflow-hidden bg-muted">
          <img
            src={project.cover}
            alt={project.title[lang]}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="flex-1 p-6">
          {/* Title */}
          <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
            {project.title[lang]}
          </h3>

          {/* Summary */}
          <p className="text-muted-foreground mb-4 line-clamp-3">
            {project.summary[lang]}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline">+{project.stack.length - 4}</Badge>
            )}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button asChild variant="default" className="flex-1">
            <Link to={`/projects/${project.id}`}>
              View Project
            </Link>
          </Button>
          {project.link && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.github && (
            <Button variant="outline" size="icon" asChild>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};
