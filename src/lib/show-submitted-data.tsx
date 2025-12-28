import { toast } from "sonner";

export function showSubmittedData(data: unknown, title: string = "Da luu!") {
  toast.success(title);
}
