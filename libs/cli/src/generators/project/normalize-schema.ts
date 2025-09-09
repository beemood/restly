import { join } from 'path';
import { type NormalizedProjectGeneratorSchema } from './normalized-schema';
import { type ProjectGeneratorSchema } from './schema';

export function normalizeProjectGeneratorSchema(
  options: ProjectGeneratorSchema,
  mainProjectJson: Record<string, any>
): NormalizedProjectGeneratorSchema {
  const { directory, type } = options;
  const targetRoot = directory;
  const projectName = directory.split(/[/\\]/).pop()!;
  const sourceRoot = join(__dirname, type);
  const fullProjectName =
    (mainProjectJson.name as string).split(/[/\\]/).shift()! +
    '/' +
    projectName;

  return {
    targetRoot,
    sourceRoot,
    projectName,
    fullProjectName,
    directory,
    type,
  };
}
