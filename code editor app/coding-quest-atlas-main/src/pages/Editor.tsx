import Navigation from "@/components/Navigation";
import CodeEditor from "@/components/CodeEditor";

const Editor = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Code Editor
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Write, run, and test your code in real-time with our powerful online editor
          </p>
        </div>
      </section>

      {/* Code Editor */}
      <section className="pb-20 px-4">
        <CodeEditor />
      </section>
    </div>
  );
};

export default Editor;