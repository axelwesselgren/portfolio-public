import { Education } from "@/types/education";
import { queryOptions } from "@tanstack/react-query";
import { getEducation } from "@/actions/education";

export function createEducationQueryOptions() {
  return queryOptions<Education[]>({
    queryKey: ["education"],
    queryFn: getEducation,
  });
}
