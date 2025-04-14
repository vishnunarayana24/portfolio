import { createCanvas } from 'canvas';

const generatePlaceholderImage = (title: string, category: string, id: number) => {
  const canvas = createCanvas(800, 600);
  const ctx = canvas.getContext('2d');

  // Background gradient based on category
  const gradients = {
    frontend: ['#9B87F5', '#6B5BFF'],
    backend: ['#4A90E2', '#2B6CB0'],
    fullstack: ['#F6AD55', '#ED8936'],
    mobile: ['#FC8181', '#F56565']
  };

  const gradient = ctx.createLinearGradient(0, 0, 800, 600);
  gradient.addColorStop(0, gradients[category as keyof typeof gradients][0]);
  gradient.addColorStop(1, gradients[category as keyof typeof gradients][1]);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 800, 600);

  // Add title
  ctx.font = 'bold 48px Arial';
  ctx.fillStyle = 'white';
  ctx.textAlign = 'center';
  ctx.fillText(title, 400, 300);

  // Add category
  ctx.font = '24px Arial';
  ctx.fillText(category.toUpperCase(), 400, 350);

  // Add level
  ctx.font = 'bold 36px Arial';
  ctx.fillText(`LEVEL ${id}`, 400, 400);

  return canvas.toBuffer('image/jpeg');
};

export const generateProjectImages = () => {
  const projects = [
    { title: 'E-Commerce Platform', category: 'fullstack', id: 1 },
    { title: 'Task Management App', category: 'frontend', id: 2 },
    { title: 'Real-time Chat API', category: 'backend', id: 3 },
    { title: 'Fitness Tracking App', category: 'mobile', id: 4 },
    { title: 'Weather Dashboard', category: 'frontend', id: 5 },
    { title: 'Content Management System', category: 'fullstack', id: 6 }
  ];

  projects.forEach(project => {
    const imageBuffer = generatePlaceholderImage(project.title, project.category, project.id);
    // Save the image to public/images/projects
    // Note: In a real implementation, you would use fs.writeFileSync
    // This is just a placeholder for the concept
    console.log(`Generated image for ${project.title}`);
  });
}; 