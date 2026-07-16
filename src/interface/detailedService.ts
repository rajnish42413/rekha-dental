// Define custom interfaces for the newly enriched service data structure
interface ComparisonTable {
    headers: string[];
    rows: string[][];
  }
  
  interface ServiceBenefits {
    tag: string;
    title: string;
    description: string;
    points?: string[];
    comparison_table?: ComparisonTable;
  }
  
  interface ClinicalReasons {
    tag: string;
    title: string;
    description: string;
    points: string[];
  }
  
  interface PostOpCare {
    tag: string;
    title: string;
    description: string;
  }
  
  // Extend the core service type to recognize our new fields safely
  export interface CustomService {
    id: number;
    slug: string;
    hero: {
      title: string;
      subtitle: string;
      image: string;
    };
    overview: {
      tag: string;
      description: string;
    };
    technology: {
      tag: string;
      points: string[];
    };
    process: {
      tag: string;
      title: string;
      steps: {
        index: string;
        title: string;
        description: string;
        image: string;
      }[];
    };
    faqs: {
      question: string;
      answer: string;
    }[];
    treatments: {
      name: string;
      price: string;
    }[];
    // Mark our expanded sections as optional so other treatments don't break
    clinical_reasons?: ClinicalReasons;
    benefits?: ServiceBenefits;
    post_op_care?: PostOpCare;
  }