// "use client";
// import Link from 'next/link'
import { useRouter } from "next/navigation";
// import { useNavigate, useRouter } from '@tanstack/react-router'
import { Button } from "@/components/ui/button";

export default function NotFoundError() {
  const router = useRouter();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      // Check if there is history
      router.back();
    } else {
      router.push("/"); // Go to home page if no history
    }
  };

  // const navigate = useNavigate()
  // const { history } = useRouter()
  return (
    <div className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] leading-tight font-bold">404</h1>
        <span className="font-medium">Oops! Page Not Found!</span>
        <p className="text-muted-foreground text-center">
          It seems like the page you're looking for <br />
          does not exist or might have been removed.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline" onClick={handleBackClick}>
            Go Back
          </Button>
          <Button onClick={() => router.push("/")}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
