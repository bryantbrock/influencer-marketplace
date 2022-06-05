import { setupEnvironment } from './environment';
import { db } from './services';
import { searchByCategoryDateDesc } from './scripts/searchByCategoryDateDesc';

(async () => {
  setupEnvironment();

  const data = await searchByCategoryDateDesc('vehicles');

  console.log(data);
})();
