import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Star, ArrowRight } from "lucide-react";

interface Course {
  title: string;
  description: string;
  icon: string;
  difficulty: string;
  duration: string;
  students: number;
}

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner':
        return 'bg-success text-white';
      case 'intermediate':
        return 'bg-warning text-black';
      case 'advanced':
        return 'bg-destructive text-white';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card 
      className="p-6 hover-glow group cursor-pointer transition-all duration-300 animate-fade-in border-border/50 hover:border-primary/50"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="text-4xl animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
          {course.icon}
        </div>
        <Badge className={getDifficultyColor(course.difficulty)}>
          {course.difficulty}
        </Badge>
      </div>

      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {course.title}
      </h3>
      
      <p className="text-muted-foreground mb-6 line-clamp-2">
        {course.description}
      </p>

      <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-1">
          <Users className="w-4 h-4" />
          <span>{course.students.toLocaleString()}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < 4 ? 'text-warning fill-current' : 'text-muted-foreground'
              }`}
            />
          ))}
          <span className="text-sm text-muted-foreground ml-2">4.8</span>
        </div>

        <Button 
          size="sm" 
          className="gradient-primary group-hover:glow-primary transition-all"
        >
          Start
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {/* Progress indicator */}
      <div className="mt-4 pt-4 border-t border-border/50">
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-1">
          <span>Progress</span>
          <span>0%</span>
        </div>
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <div 
            className="h-full gradient-primary transition-all duration-700 group-hover:w-2"
            style={{ width: '0%' }}
          ></div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;