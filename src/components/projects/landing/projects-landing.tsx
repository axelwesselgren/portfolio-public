"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { ProjectStates } from "./project-states";
import { ProjectHeader } from "./project-header";

export function ProjectsLanding() {
  return (
    <div className="py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <ProjectHeader />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <ProjectStates />
        </div>

        <div className="flex justify-center">
          <Link href="/projects" className={buttonVariants()}>
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

