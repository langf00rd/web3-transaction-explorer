"use client";

import { Button } from "@/components/ui/button";

export default function Error(props: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="text-center py-32 space-y-5">
      <p className="text-xl">{props.error.message}</p>
      <Button variant="outline" onClick={() => window.location.reload()}>
        Try again
      </Button>
    </div>
  );
}
