import { IMainJobs } from "../Types/MainJobs";
import castration from '../assets/castration.svg';
import hospitalization from '../assets/hospitalization.svg';
import vaccination from '../assets/vaccination.svg';

export const mainJobs: IMainJobs[] = [
    {
      img: castration,
      title: "Castração",
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesett"
    },
    {
      img: vaccination,
      title: "Vacinação",
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesett"
    },
    {
      img: hospitalization,
      title: "Internação",
      description: "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesett"
    }
  ]