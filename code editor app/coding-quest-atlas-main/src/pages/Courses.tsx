import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import Navigation from "@/components/Navigation";
import CourseCard from "@/components/CourseCard";
import { Clock, Users, Star, BookOpen, Calendar, User, CheckCircle } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    description: "Master the basics of JavaScript programming with hands-on exercises and real-world projects.",
    level: "Beginner",
    duration: "8 weeks",
    students: 12453,
    rating: 4.8,
    price: "Free",
    image: "🟨",
    topics: ["Variables", "Functions", "DOM", "Events", "Async/Await"],
    progress: 75,
    lastAccessed: "2024-01-15",
    totalLessons: 24,
    completedLessons: 18,
    brief: "Start your coding journey with JavaScript - the most popular programming language for web development.",
    instructor: "Sarah Chen",
    prerequisites: "None required"
  },
  {
    id: 2,
    title: "Python for Data Science",
    description: "Learn Python programming focused on data analysis, visualization, and machine learning.",
    level: "Intermediate", 
    duration: "12 weeks",
    students: 8921,
    rating: 4.9,
    price: "$49",
    image: "🐍",
    topics: ["NumPy", "Pandas", "Matplotlib", "Scikit-learn", "Jupyter"],
    progress: 45,
    lastAccessed: "2024-01-20",
    totalLessons: 36,
    completedLessons: 16,
    brief: "Transform data into insights using Python's powerful data science libraries and tools.",
    instructor: "Dr. Michael Rodriguez",
    prerequisites: "Basic Python knowledge"
  },
  {
    id: 3,
    title: "React Development",
    description: "Build modern web applications with React, hooks, and component-based architecture.",
    level: "Advanced",
    duration: "10 weeks", 
    students: 6744,
    rating: 4.7,
    price: "$79",
    image: "⚛️",
    topics: ["Components", "Hooks", "State", "Router", "Testing"],
    progress: 90,
    lastAccessed: "2024-01-22",
    totalLessons: 30,
    completedLessons: 27,
    brief: "Master React to build scalable, interactive web applications used by millions.",
    instructor: "Alex Thompson",
    prerequisites: "JavaScript fundamentals"
  },
  {
    id: 4,
    title: "HTML & CSS Mastery",
    description: "Create beautiful, responsive websites with modern HTML5 and CSS3 techniques.",
    level: "Beginner",
    duration: "6 weeks",
    students: 15632,
    rating: 4.6,
    price: "Free", 
    image: "🌐",
    topics: ["Semantic HTML", "Flexbox", "Grid", "Animations", "Responsive"],
    progress: 100,
    lastAccessed: "2024-01-10",
    totalLessons: 18,
    completedLessons: 18,
    brief: "Build the foundation of web development with modern HTML and CSS techniques.",
    instructor: "Emma Wilson",
    prerequisites: "None required"
  },
  {
    id: 5,
    title: "Node.js Backend",
    description: "Build scalable server-side applications with Node.js, Express, and databases.",
    level: "Intermediate",
    duration: "14 weeks",
    students: 4521,
    rating: 4.8,
    price: "$99",
    image: "🚀",
    topics: ["Express", "MongoDB", "APIs", "Authentication", "Deployment"],
    progress: 30,
    lastAccessed: "2024-01-18",
    totalLessons: 42,
    completedLessons: 12,
    brief: "Create powerful backend systems that handle millions of requests efficiently.",
    instructor: "James Park",
    prerequisites: "JavaScript fundamentals"
  },
  {
    id: 6,
    title: "Mobile App Development",
    description: "Create cross-platform mobile apps using React Native and modern development tools.",
    level: "Advanced",
    duration: "16 weeks",
    students: 3245,
    rating: 4.9,
    price: "$129",
    image: "📱",
    topics: ["React Native", "Navigation", "APIs", "Push Notifications", "App Store"],
    progress: 0,
    lastAccessed: null,
    totalLessons: 48,
    completedLessons: 0,
    brief: "Build native mobile apps for iOS and Android using React Native framework.",
    instructor: "Lisa Zhang",
    prerequisites: "React development experience"
  }
];

const Courses = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Coding Courses
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Master programming with our comprehensive courses designed for all skill levels
          </p>
          
          {/* Filter Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            <Badge variant="secondary" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              All Courses
            </Badge>
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              Beginner
            </Badge>
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              Intermediate
            </Badge>
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              Advanced
            </Badge>
            <Badge variant="outline" className="hover:bg-primary hover:text-primary-foreground cursor-pointer transition-colors">
              Free
            </Badge>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <Card key={course.id} className="group hover:shadow-2xl transition-all duration-300 overflow-hidden animate-fade-in border-border/50 hover:border-primary/50" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="p-6">
                  {/* Course Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl mb-2">{course.image}</div>
                    <div className="flex gap-2">
                      <Badge variant={course.level === 'Beginner' ? 'secondary' : course.level === 'Intermediate' ? 'outline' : 'default'} className="text-xs">
                        {course.level}
                      </Badge>
                      {course.progress > 0 && (
                        <Badge variant="outline" className="text-xs text-primary">
                          {course.progress}% Complete
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {course.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-3 italic">
                    "{course.brief}"
                  </p>
                  
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {course.description}
                  </p>
                  
                  {/* Progress Bar */}
                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                        <span>Progress</span>
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>
                  )}
                  
                  {/* Course Details */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="w-3 h-3" />
                      {course.instructor}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {course.duration}
                    </div>
                    {course.lastAccessed && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Last: {new Date(course.lastAccessed).toLocaleDateString()}
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      {course.rating} ({course.students.toLocaleString()})
                    </div>
                  </div>
                  
                  {/* Prerequisites */}
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2">Prerequisites:</div>
                    <Badge variant="outline" className="text-xs">
                      {course.prerequisites}
                    </Badge>
                  </div>
                  
                  {/* Topics */}
                  <div className="mb-6">
                    <div className="text-xs text-muted-foreground mb-2">What you'll learn:</div>
                    <div className="flex flex-wrap gap-2">
                      {course.topics.slice(0, 3).map((topic) => (
                        <Badge key={topic} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                      {course.topics.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{course.topics.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  {/* Price and CTA */}
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold gradient-text">
                        {course.price}
                      </span>
                    </div>
                    <Button className={`gradient-primary glow-primary hover-glow ${course.progress === 100 ? 'opacity-75' : ''}`}>
                      {course.progress === 100 ? (
                        <>
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Completed
                        </>
                      ) : course.progress > 0 ? (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Continue
                        </>
                      ) : (
                        <>
                          <BookOpen className="w-4 h-4 mr-2" />
                          Start Course
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;