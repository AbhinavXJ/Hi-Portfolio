import Search from "@/components/Search";
import { Suspense } from "react";
import Loading from "./loading";



export default async function Home() {




return (
  // <div className="min-h-screen bg-gradient-to-r from-blue-600 to-purple-500 flex items-center justify-center">
    <div className="dotted-background w-full min-h-screen overflow-hidden bg-blue-500 flex items-center justify-center">  
          <Search></Search>
    </div>

      
  

  );
}
