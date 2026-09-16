export interface ServiceBannerI {
  image: string;
  description: string;
  buttonText: string;
  labelText: string;
}

export interface ServiceBannerPropsI {
  data: ServiceBannerI;
}
