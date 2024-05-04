import "./App.css";
import { ThemeProvider } from "@/Components/theme-provider";
import { Button } from "./Components/ui/button";

function App() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Button>hello</Button>
    </ThemeProvider>
  );
}

export default App;
