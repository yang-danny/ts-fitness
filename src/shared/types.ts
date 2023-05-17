export enum SelectedPage {
    Home = "home",
    Benefits = "benefits",
    OurClasses = "ourclasses",
    BMI="bmi",
    ContactUs = "contactus",
  }
  
export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
  }

export interface ClassType {
  name: string;
  icon: string;
  image: string;
  classTime: string;
}