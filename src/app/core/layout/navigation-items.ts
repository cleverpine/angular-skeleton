import { ROUTES } from 'src/app/constants/ROUTES';
import { FieldConfig } from './field-config';

export const navItems: FieldConfig[] = [
  {
    title: 'layoverPlanning',
    cssClass: 'icon-layover-planning icon',
    route: ROUTES.home,
    titleFull: 'layoverPlanningFullTitle',
    description: 'layoverPlanningDescription',
  },
  {
    title: 'quotationPlanning',
    cssClass: 'icon-quotation-planning icon',
    route: ROUTES.userProfile,
    titleFull: 'quotationPlanningFullTitle',
    description: 'quotationPlanningDescription',
  },
];
