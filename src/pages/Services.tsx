import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Gauge, Globe, ShoppingCart, Palette, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      key: 'web_dev',
      color: 'text-blue-500',
    },
    {
      icon: Gauge,
      key: 'performance',
      color: 'text-green-500',
    },
    {
      icon: Globe,
      key: 'multilingual',
      color: 'text-purple-500',
    },
    {
      icon: ShoppingCart,
      key: 'ecommerce',
      color: 'text-orange-500',
    },
    {
      icon: Palette,
      key: 'ui_engineering',
      color: 'text-pink-500',
    },
    {
      icon: Zap,
      key: 'automation',
      color: 'text-yellow-500',
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
            {t('services.title')}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('services.subtitle')}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full shadow-card hover-lift group">
                <CardContent className="p-8">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-4">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            My Process
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: '01', title: 'Discovery', desc: 'Understanding your needs and goals' },
              { number: '02', title: 'Planning', desc: 'Technical architecture and timeline' },
              { number: '03', title: 'Development', desc: 'Building with best practices' },
              { number: '04', title: 'Launch', desc: 'Deploy, test, and optimize' },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="shadow-card text-center">
                  <CardContent className="p-6">
                    <div className="text-5xl font-heading font-bold text-primary/20 mb-3">
                      {step.number}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
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
