// lib/types/blueprint.ts
export type Blueprint = {
  app_name: string;
  goal: string;
  type: 'web' | 'mobile' | 'api';
  features: string[];
  tech_stack: {
    frontend: string;
    backend: string;
    database: string;
  };
  ui_theme?: string;
};
