import { useParams, Link, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ProjectCard } from '@/components/ProjectCard';

export const ProjectDetail = () => {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'ka' | 'ru' | 'en';

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const relatedProjects = projects
    .filter((p) => p.id !== project.id && p.category.some((c) => project.category.includes(c)))
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button variant="ghost" asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {t('common.back')}
            </Link>
          </Button>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
                {project.title[lang]}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">{project.summary[lang]}</p>
              
              <div className="flex flex-wrap gap-4 mb-6">
                {project.link && (
                  <Button asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      {t('projects.view_live')}
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      {t('projects.view_code')}
                    </a>
                  </Button>
                )}
              </div>

              <div className="space-y-3">
                <div>
                  <span className="font-semibold text-muted-foreground">{t('projects.role')}: </span>
                  <span>{project.role}</span>
                </div>
                <div>
                  <span className="font-semibold text-muted-foreground">{t('projects.duration')}: </span>
                  <span>{project.duration}</span>
                </div>
              </div>
            </div>

            <div className="aspect-video rounded-lg overflow-hidden shadow-elegant">
              <img
                src={project.cover}
                alt={project.title[lang]}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Project+Image';
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-heading font-bold mb-4">{t('projects.technologies')}</h2>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-base px-4 py-2">
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>

        {/* Case Study */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { title: t('projects.problem'), content: project.problem[lang] },
            { title: t('projects.approach'), content: project.approach[lang] },
            { title: t('projects.outcome'), content: project.outcome[lang] },
          ].map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full shadow-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-primary">
                    {section.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Screenshots Gallery */}
        {project.screenshots.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-2xl font-heading font-bold mb-6">Screenshots</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-video rounded-lg overflow-hidden shadow-card"
                >
                  <img
                    src={screenshot}
                    alt={`${project.title[lang]} screenshot ${index + 1}`}
                    className="w-full h-full object-cover hover-lift"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/800x450?text=Screenshot';
                    }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-heading font-bold mb-8">{t('projects.related')}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProjects.map((relProject) => (
                <ProjectCard key={relProject.id} project={relProject} lang={lang} />
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
