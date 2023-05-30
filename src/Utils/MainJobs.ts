import { IMainJobs } from '../Types/Types';
import castration from '../assets/castration.svg';
import hospitalization from '../assets/hospitalization.svg';
import vaccination from '../assets/vaccination.svg';

export const mainJobs: IMainJobs[] = [
    {
      id:1,
      img: castration,
      title: "Castração",
      description: "A castração tem várias indicações tanto para machos como para fêmeas. Para as fêmeas que não terão atividade reprodutiva (cujos tutores não tem intenção de procriar), a primeira indicação é para evitar a ocorrência do cio e de gestações indesejadas"
    },
    {
      id:2,
      img: vaccination,
      title: "Vacinação",
      description: "Manter à carteira de vacinação do seu pet atualizada é fundamental para a prevenção de doenças. Fique atento para às indicações de cada vacina, assim como, as datas de vencimento."
    },
    {
      id:3,
      img: hospitalization,
      title: "Internação",
      description: "Todos os animais internados são monitorados e supervisionados em período integral por um médico veterinário. Desta forma os cuidados e procedimentos necessários são feitos de forma rápida e eficaz para a completa recuperação dos pacientes."
    }
  ]