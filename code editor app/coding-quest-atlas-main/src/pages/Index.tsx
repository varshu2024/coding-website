import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Code, Play, BookOpen, Users, Zap, Terminal } from "lucide-react";
import Navigation from "@/components/Navigation";
import CodeEditor from "@/components/CodeEditor";
import CourseCard from "@/components/CourseCard";

const codeExamples = [
  'console.log("Hello, World!");',
  'print("Welcome to CodeLearn!")',
  'function learn() { return "coding"; }',
  '<h1>Build Amazing Apps</h1>',
  'let dreams = "become reality";',
];

const courses = [
  {
    title: "JavaScript Fundamentals",
    description: "Learn the basics of JavaScript programming",
    icon: "🟨",
    difficulty: "Beginner",
    duration: "4 weeks",
    students: 1250
  },
  {
    title: "Python Mastery",
    description: "Master Python from basics to advanced",
    icon: "🐍",
    difficulty: "Intermediate",
    duration: "6 weeks",
    students: 980
  },
  {
    title: "React Development",
    description: "Build modern web applications",
    icon: "⚛️",
    difficulty: "Advanced",
    duration: "8 weeks",
    students: 750
  },
  {
    title: "HTML & CSS",
    description: "Create beautiful web interfaces",
    icon: "🎨",
    difficulty: "Beginner",
    duration: "3 weeks",
    students: 1500
  }
];

const Index = () => {
  const [typedCode, setTypedCode] = useState("");
  const [codeIndex, setCodeIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showEditor, setShowEditor] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentCode = codeExamples[codeIndex];
      
      if (charIndex < currentCode.length) {
        setTypedCode(currentCode.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setTypedCode("");
          setCodeIndex((codeIndex + 1) % codeExamples.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [charIndex, codeIndex]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="gradient-hero min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJtIDYwIDAgTCAwIDAgMCA2MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJoc2woMjE3IDkxJSA2MCUgLyAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPjwvc3ZnPg==')] opacity-10"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="animate-fade-in">
            <Terminal className="w-16 h-16 mx-auto mb-8 text-primary animate-glow-pulse" />
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeLearn
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
              Master programming with our interactive coding platform. 
              Learn, practice, and build amazing projects in real-time.
            </p>
          </div>
          
          {/* Animated Code Display */}
          <div className="max-w-2xl mx-auto mb-12 animate-slide-in">
            <Card className="p-8 code-bg border-primary/20 hover-glow">
              <div className="text-left">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-destructive"></div>
                  <div className="w-3 h-3 rounded-full bg-warning"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                  <span className="text-sm text-muted-foreground ml-4">code-editor</span>
                </div>
                <div className="font-mono text-lg">
                  <span className="text-accent">{'> '}</span>
                  <span className="text-foreground">{typedCode}</span>
                  <span className="typing-cursor text-primary"></span>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button 
              size="lg" 
              className="gradient-primary glow-primary hover-glow text-lg px-8 py-6"
              onClick={() => setShowEditor(true)}
            >
              <Play className="w-5 h-5 mr-2" />
              Start Coding Now
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6"
            >
              <BookOpen className="w-5 h-5 mr-2" />
              Browse Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Why Choose <span className="text-primary">CodeLearn</span>?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover-glow animate-slide-in">
              <Zap className="w-12 h-12 text-accent mb-6 animate-float" />
              <h3 className="text-xl font-bold mb-4">Real-time Coding</h3>
              <p className="text-muted-foreground">
                Write code and see results instantly with our live editor and preview system.
              </p>
            </Card>
            
            <Card className="p-8 hover-glow animate-slide-in" style={{ animationDelay: '0.2s' }}>
              <Code className="w-12 h-12 text-primary mb-6 animate-float" />
              <h3 className="text-xl font-bold mb-4">Multi-Language Support</h3>
              <p className="text-muted-foreground">
                Learn JavaScript, Python, HTML/CSS, React and more in one platform.
              </p>
            </Card>
            
            <Card className="p-8 hover-glow animate-slide-in" style={{ animationDelay: '0.4s' }}>
              <Users className="w-12 h-12 text-accent mb-6 animate-float" />
              <h3 className="text-xl font-bold mb-4">Interactive Learning</h3>
              <p className="text-muted-foreground">
                Join thousands of students in our interactive coding community.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Popular <span className="text-primary">Courses</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <CourseCard key={course.title} course={course} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Code Editor Section */}
      {showEditor && (
        <section className="py-20 px-6">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Try Our <span className="text-primary">Live Editor</span>
            </h2>
            <CodeEditor />
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;