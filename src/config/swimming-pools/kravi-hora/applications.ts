import { SwimmingPoolApplicationConfig } from '~/types/swimming-pool';

// TODO(kravi-hora): fill in the pool's Google spreadsheet, its tab GIDs,
// SendGrid templates, lecture capacities and the verified sender.
// Until a category is listed here, its application page shows a "closed" message
// and lectures are shown from Sanity without occupancy.
export const kraviHoraApplicationConfig: SwimmingPoolApplicationConfig = {
  spreadsheetId: '',
  categories: {},
};
