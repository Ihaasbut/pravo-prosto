export interface ServiceCardI {
    link?: string;
    title: string;
    aboutList: string[];
    slug: string;
    detailPage?: ServiceDetailI;
}
export interface ServicesI {
    area: string;
    serviceCards: ServiceCardI[];
}

export interface ServicesDataI {
    servicesBlocks: ServicesI[];
}

export interface ServiceDetailI {
          title: string;
          description: string;
          whatsIncluded: WhatsIncludedI[]
}

 
export interface WhatsIncludedI {
          title: string;
          description: string;
}