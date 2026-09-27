import type { ImageMetadata } from 'astro';
import profilePhoto from './images/aaron-mendez.png';
import dsavisionCover from './images/dsavision-cover.png';
import ecocompaneirosCover from './images/ecocompaneiros-cover.png';

/** Hero portrait (LCP). */
export const heroProfileImage: ImageMetadata = profilePhoto;

const projectImages: Record<string, ImageMetadata> = {
  ecocompaneiros: ecocompaneirosCover,
  dsavision: dsavisionCover,
};

export function getProjectImage(projectId: string): ImageMetadata | undefined {
  return projectImages[projectId];
}
