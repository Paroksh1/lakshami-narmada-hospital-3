import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EnhancedButton } from '@/components/ui/enhanced-button';
import { BookOpen, Video, FileText, Download } from 'lucide-react';

const KnowledgeHubPage = () => {
  const articles = [
    {
      title: 'Complete Newborn Care Guide',
      type: 'Article',
      summary: 'Essential tips for caring for your newborn in the first few weeks',
      author: 'Dr. Sanjeev Kumar',
      date: '2024-01-15',
      icon: FileText
    },
    {
      title: 'Childhood Vaccination Schedule',
      type: 'Video',
      summary: 'Understanding the importance and timing of childhood vaccines',
      author: 'Dr. Priya Sharma',
      date: '2024-01-10',
      icon: Video
    },
    {
      title: 'Managing Fever in Children',
      type: 'Guide',
      summary: 'When to worry about fever and home care tips',
      author: 'Dr. Sanjeev Kumar',
      date: '2024-01-05',
      icon: BookOpen
    }
  ];
  
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-trust section-padding">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Knowledge Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expert-backed articles, videos, and guides to help you make informed 
            decisions about your child's health and development.
          </p>
        </div>
      </section>
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article, index) => {
              const Icon = article.icon;
              return (
                <Card key={index} className="card-service">
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-trust text-trust-foreground">
                        <Icon className="h-5 w-5" />
                      </div>
                      <Badge variant="outline">{article.type}</Badge>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {article.summary}
                    </p>
                    
                    <div className="text-xs text-muted-foreground mb-4">
                      By {article.author} • {article.date}
                    </div>
                    
                    <EnhancedButton variant="outline" size="sm" className="w-full">
                      Read More
                    </EnhancedButton>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default KnowledgeHubPage;