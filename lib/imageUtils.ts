/**
 * Get the mobile version of an image path
 * Replaces the image with its mobile counterpart for mobile devices
 */
export function getMobileImagePath(desktopPath: string): string {
  const mobileMappings: Record<string, string> = {
    "/case study 1.png": "/case study 1 mobile.png",
    "/case study 2.png": "/case study 2 mobile.png",
    "/case study 3.png": "/case study 3 mobile.png",
    "/UX main banner.png": "/UX main banner mobile.png",
    "/ui case study main banner.png": "/ui case study main banner mobile.png",
    "/Website banner thumbnail.png": "/Website banner thumbnail mobile.png",
  };

  return mobileMappings[desktopPath] || desktopPath;
}

