import { MOCK_PROJECTS } from "./MockProjects";

function ProjectsPage() {
  return (
    <>
      <div>Projects</div>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, " ")}</pre>
    </>
  );
}

export default ProjectsPage;
