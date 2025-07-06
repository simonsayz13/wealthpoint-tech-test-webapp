import type { Features } from "../types/type";
import { baseURL } from "./constants";

export const buildOptimalLocationsURL = (
  noLocation: number,
  week: number,
  minPopulation: number,
  features: Features
) => {
  const { competitorDistance, competitorDensity, competitorRadius } = features;

  let url = `${baseURL}/optimal-locations?locations=${noLocation}&week=${week}&min_population=${minPopulation}&use_competitor_distance=${competitorDistance}&use_competitor_density=${competitorDensity}`;

  if (competitorDensity) url += `&competitor_radius=${competitorRadius}`;

  return url;
};
