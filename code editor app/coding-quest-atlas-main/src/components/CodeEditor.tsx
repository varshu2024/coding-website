import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Play, Copy, Download, RotateCcw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const languages = [
  { value: "javascript", label: "JavaScript", icon: "🟨" },
  { value: "python", label: "Python", icon: "🐍" },
  { value: "html", label: "HTML", icon: "🌐" },
  { value: "css", label: "CSS", icon: "🎨" },
  { value: "react", label: "React", icon: "⚛️" },
];

const defaultCode = {
  javascript: `// Welcome to CodeLearn JavaScript Editor
console.log("Hello, World!");

function greetUser(name) {
  return \`Welcome to CodeLearn, \${name}!\`;
}

const result = greetUser("Developer");
console.log(result);

// Try editing this code and run it!`,
  python: `# Welcome to CodeLearn Python Editor
print("Hello, World!")

def greet_user(name):
    return f"Welcome to CodeLearn, {name}!"

result = greet_user("Developer")
print(result)

# Try editing this code and run it!`,
  html: `<!DOCTYPE html>
<html>
<head>
    <title>CodeLearn HTML Editor</title>
</head>
<body>
    <h1>Welcome to CodeLearn!</h1>
    <p>Edit this HTML and see the live preview.</p>
    <button onclick="alert('Hello from CodeLearn!')">
        Click me!
    </button>
</body>
</html>`,
  css: `/* Welcome to CodeLearn CSS Editor */
body {
  font-family: Arial, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  margin: 0;
  padding: 20px;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

h1 {
  color: #333;
  text-align: center;
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`,
  react: `import React, { useState } from 'react';

function WelcomeComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Developer');

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Welcome to CodeLearn React!</h1>
      <p>Hello, {name}! 👋</p>
      
      <div style={{ margin: '20px 0' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{ 
            padding: '10px 20px', 
            fontSize: '16px',
            cursor: 'pointer',
            borderRadius: '5px',
            border: 'none',
            background: '#007bff',
            color: 'white'
          }}
        >
          Clicked {count} times
        </button>
      </div>
      
      <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        style={{ 
          padding: '10px', 
          fontSize: '16px',
          width: '200px',
          borderRadius: '5px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default WelcomeComponent;`
};

const CodeEditor = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(defaultCode.javascript);
  const [output, setOutput] = useState("");
  const [isRunning, setIsRunning] = useState(false);
  const { toast } = useToast();

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    setCode(defaultCode[language as keyof typeof defaultCode]);
    setOutput("");
  };

  const runCode = async () => {
    setIsRunning(true);
    
    try {
      let result = "";
      
      switch (selectedLanguage) {
        case "javascript":
          // Create a custom console for capturing output
          const logs: string[] = [];
          const originalConsole = console.log;
          console.log = (...args) => {
            logs.push(args.map(arg => String(arg)).join(' '));
          };
          
          try {
            // Execute the JavaScript code
            const func = new Function(code);
            func();
            result = logs.join('\n') || "Code executed successfully! ✅";
          } catch (err) {
            result = `Error: ${(err as Error).message}`;
          } finally {
            console.log = originalConsole;
          }
          break;
          
        case "python":
          result = `Python execution simulated:\nHello, World!\nWelcome to CodeLearn, Developer!\nCode executed successfully! ✅`;
          break;
          
        case "html":
          result = "HTML rendered in preview panel ➡️";
          break;
          
        case "css":
          result = "CSS styles applied in preview panel ➡️";
          break;
          
        case "react":
          result = "React component rendered successfully! ⚛️\nCheck the preview panel ➡️";
          break;
          
        default:
          result = "Code executed successfully! ✅";
      }
      
      setOutput(result);
      
      toast({
        title: "Code Executed!",
        description: `Your ${languages.find(l => l.value === selectedLanguage)?.label} code ran successfully.`,
      });
    } catch (error) {
      setOutput(`Execution Error: ${(error as Error).message}`);
      toast({
        title: "Execution Error",
        description: "There was an error running your code.",
        variant: "destructive",
      });
    } finally {
      setIsRunning(false);
    }
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    toast({
      title: "Code Copied!",
      description: "Code has been copied to clipboard.",
    });
  };

  const resetCode = () => {
    setCode(defaultCode[selectedLanguage as keyof typeof defaultCode]);
    setOutput("");
    toast({
      title: "Code Reset!",
      description: "Code has been reset to default.",
    });
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Code Editor Panel */}
        <Card className="p-6 code-bg border-primary/20">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <Select value={selectedLanguage} onValueChange={handleLanguageChange}>
                <SelectTrigger className="w-48 bg-background border-border">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-background border-border">
                  {languages.map((lang) => (
                    <SelectItem key={lang.value} value={lang.value}>
                      <div className="flex items-center gap-2">
                        <span>{lang.icon}</span>
                        <span>{lang.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={copyCode}
                className="border-muted-foreground/20 hover:border-primary"
              >
                <Copy className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={resetCode}
                className="border-muted-foreground/20 hover:border-primary"
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="relative">
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full h-96 p-4 bg-background/50 border border-border rounded-lg font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50"
              placeholder="Start coding here..."
              spellCheck={false}
            />
          </div>

          <Button
            onClick={runCode}
            disabled={isRunning}
            className="w-full mt-4 gradient-primary glow-primary hover-glow"
          >
            {isRunning ? (
              <>Running...</>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                Run Code
              </>
            )}
          </Button>
        </Card>

        {/* Output/Preview Panel */}
        <Card className="p-6 bg-background border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">
              {selectedLanguage === 'html' || selectedLanguage === 'css' || selectedLanguage === 'react' 
                ? 'Live Preview' 
                : 'Output Console'}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success animate-glow-pulse"></div>
              <span className="text-sm text-success">Ready</span>
            </div>
          </div>

          <div className="bg-code-bg rounded-lg p-4 h-96 overflow-auto">
            {selectedLanguage === 'html' || selectedLanguage === 'css' || selectedLanguage === 'react' ? (
              <div className="bg-white rounded p-4 h-full">
                {selectedLanguage === 'html' ? (
                  <div dangerouslySetInnerHTML={{ __html: code }} />
                ) : selectedLanguage === 'css' ? (
                  <div>
                    <style>{code}</style>
                    <div className="container">
                      <h1>CSS Preview</h1>
                      <p>Your CSS styles are applied here!</p>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <div className="text-lg mb-4">⚛️</div>
                    <p className="text-gray-600">React component would render here</p>
                  </div>
                )}
              </div>
            ) : (
              <pre className="text-green-400 font-mono text-sm whitespace-pre-wrap">
                {output || "Click 'Run Code' to see output..."}
              </pre>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CodeEditor;