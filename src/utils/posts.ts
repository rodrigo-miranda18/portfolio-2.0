import fs from 'fs';
import path from 'path';

export function getPosts(): { slug: string }[] {
  const postsDirectory = path.join(process.cwd(), 'src', 'data', 'posts');
  const postFolders = fs.readdirSync(postsDirectory);

  return postFolders.map((folder) => ({ slug: folder }));
}
