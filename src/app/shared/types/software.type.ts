export type ProjectCategory =
    | 'ERP' // Enterprise Resource Planning, e.g. Huttons
    | 'CRM' // Customer Relationship Management, e.g. Salesforce
    | 'CMS' // Content Management System, e.g. WordPress
    | 'Landing' // Landing Pages, e.g. Portfolio
    | 'Tools' // Tools, e.g. Redoc
    | 'E-commerce' // E-commerce, e.g. Shopee
    | 'Miscellaneous';

export type ProjectType = 'Personal' | 'Team';

// https://uwaterloo.ca/ist-project-management-office/methodologies/project-sizing-and-complexity
export type ProjectSize = 'Not Rated' | 'Small' | 'Medium' | 'Large';
