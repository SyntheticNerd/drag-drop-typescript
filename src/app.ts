//this is how you import name spaces type script will recognize the "///"
import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";

new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
