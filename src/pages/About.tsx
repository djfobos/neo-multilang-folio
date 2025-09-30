import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { skills, skillCategories } from '@/data/skills';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

export const About = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language as 'ka' | 'ru' | 'en';

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            {t('about.subtitle')}
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <Card className="shadow-elegant">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Profile Image */}
                <div className="md:col-span-1">
                  <div className="aspect-square rounded-2xl bg-gradient-accent overflow-hidden">
                    <img
                      src="/profile-photo.jpg"
                      alt="NEO Nazareveli"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://via.placeholder.com/400x400?text=NEO';
                      }}
                    />
                  </div>
                </div>

                {/* Bio Text */}
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-heading font-bold mb-4 text-gradient">
                    NEO Nazareveli (Gela)
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {t('about.bio')}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-base px-4 py-2">
                      5+ {t('about.years')}
                    </Badge>
                    <Badge variant="secondary" className="text-base px-4 py-2">
                      50+ Projects
                    </Badge>
                    <Badge variant="secondary" className="text-base px-4 py-2">
                      Georgia 🇬🇪
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            {t('about.skills_title')}
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {Object.entries(groupedSkills).map(([category, categorySkills]) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-card">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold mb-4">
                      {skillCategories[lang][category as keyof typeof skillCategories.ka]}
                    </h3>
                    <div className="space-y-4">
                      {categorySkills.map((skill) => (
                        <div key={skill.name}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">
                              {skill.level}%
                            </span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            {t('about.experience_title')}
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                year: '2019-2021',
                title: 'Junior Web Developer',
                company: 'Freelance',
                description: 'WordPress development, UI/UX implementation',
              },
              {
                year: '2021-2023',
                title: 'Full-Stack Developer',
                company: 'Various Agencies',
                description: 'React, Next.js, WordPress, E-commerce solutions',
              },
              {
                year: '2023-Present',
                title: 'Senior Full-Stack Developer',
                company: 'Freelance & Contract',
                description:
                  'Complex web applications, performance optimization, technical leadership',
              },
            ].map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card hover-lift">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <div className="md:w-32 shrink-0">
                        <Badge variant="outline" className="text-base">
                          {exp.year}
                        </Badge>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-heading font-semibold mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-muted-foreground mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
