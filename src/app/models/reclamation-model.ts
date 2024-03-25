import { CategorieModel } from "./categorie-model";
import { DetailDommageModel } from "./detail-dommage-model";
import { InformationGeneralModel } from "./information-general-model";
import { PlanificationModel } from "./planification-model";

export class ReclamationModel {

  categorie!: CategorieModel; 
  informationGeneral! : InformationGeneralModel;
  detailDomage!: DetailDommageModel;
  plannification!:PlanificationModel

}

