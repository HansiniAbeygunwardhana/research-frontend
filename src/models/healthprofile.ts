export interface HealthProfile {

    calories : number,
    carbohydrateContent : number,
    cholesterolContent : number,
    fatContent : number,
    fiberContent : number,
    proteinContent : number,
    saturatedFatContent : number,
    sodiumContent : number,
    sugarContent : number,
    id : number,
    condition_name : string,
    fav_ing_1 : string,
    fav_ing_2 : string | null,
    fav_ing_3 : string | null,
    health_condition_1 : string | null,
    health_condition_2 : string | null,
    health_condition_3 : string | null,
    prefered_diet_category : string,
}