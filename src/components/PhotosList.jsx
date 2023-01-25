import { useFetchPhotosQuery } from '../store';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);

  return 'PhothosList';
}

export default PhotosList;
