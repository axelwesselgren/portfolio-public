import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

export function SubmitButton({
  isSubmitting,
  isValid,
}: {
  isSubmitting: boolean;
  isValid: boolean;
}) {
  return (
    <Button
      type="submit"
      className="w-full"
      disabled={isSubmitting || !isValid}
    >
      {isSubmitting ? (
        <span className="flex items-center gap-2">
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
          Sending...
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Send className="h-4 w-4" />
          Send Message
        </span>
      )}
    </Button>
  );
}