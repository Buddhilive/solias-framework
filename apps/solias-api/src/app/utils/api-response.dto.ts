class Link {
  rel: string; // Relationship (e.g., self, next, prev)
  href: string; // URL of the related resource
  method?: string; // HTTP method (e.g., GET, POST, PUT, DELETE) (optional)
}

export class ApiResponse<T> {
  statusCode: number;
  message: string;
  data?: T;
  error?: {
    message: string;
    details?: string;
  };
  links?: Link[]; // Array of HATEOAS links
}
